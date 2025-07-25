import React, { useState, useEffect, useContext } from 'react';
import {useNavigate, useParams } from 'react-router-dom'
import { Clock, Video, CheckCircle2, AlertCircle } from 'lucide-react';
import SideProfile from './components/sideProfile';
import axiosInstance from '../../utils/axiosInstance';
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';
import { useAuth } from '../../context/auth.context';
import {MentorContext} from '../../context/mentor.context';


const MENTOR_INFO = {
  name: 'Sarah Johnson',
  title: 'Senior Software Engineer',
  avatar: 'SJ',
  rating: 4.9,
  totalSessions: 247,
  pricePerMinute: 5,
  availableFrom: 9,
  availableTo: 19,
};



const BookSession = () => {
    const {user} = useAuth()
    const { username } = useParams();
      const {mentors,loading} = useContext(MentorContext);
    const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [sessionDuration, setSessionDuration] = useState(15);
  const [customDuration, setCustomDuration] = useState('');
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDescription, setSessionDescription] = useState('');
  const [sessionType, setSessionType] = useState('video');
  const [endTime, setEndTime] = useState('');
  const [errors, setErrors] = useState({});
  const [bookedSessions, setBookedSessions] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  const sessionTypeOptions = [
    { value: 'video', label: 'Video', icon: Video, color: 'bg-blue-500' },
  ];
  const mentor = mentors.find((mentor)=>username === mentor.username);


  const getCurrentDuration = () =>
    sessionDuration === 'custom' ? parseInt(customDuration) || 0 : sessionDuration;

  const calculatePrice = (duration) => duration * MENTOR_INFO.pricePerMinute;

  const parseTimeToMinutes = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let hour24 = period === 'PM' && hours !== 12 ? hours + 12 : hours;
    if (period === 'AM' && hours === 12) hour24 = 0;
    return hour24 * 60 + minutes;
  };

  const minutesToTimeString = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours % 12 || 12;
    return `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
  };

  const isTimeSlotBooked = (date, startTime, duration) => {
    const sessionStart = parseTimeToMinutes(startTime);
    const sessionEnd = sessionStart + duration;
    return bookedSessions.some(({ date: d, startTime: s, duration: dur }) => {
      if (d !== date.toDateString()) return false;
      const start = parseTimeToMinutes(s);
      const end = start + dur;
      return sessionStart < end && sessionEnd > start;
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const isToday = selectedDate.toDateString() === now.toDateString();

    for (let hour = MENTOR_INFO.availableFrom; hour < MENTOR_INFO.availableTo; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (isToday && (hour < currentHour || (hour === currentHour && minute <= currentMinute + 30))) continue;
        const timeString = new Date().setHours(hour, minute, 0);
        const readable = new Date(timeString).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        if (!isTimeSlotBooked(selectedDate, readable, getCurrentDuration())) {
          slots.push(readable);
        }
      }
    }
    return slots;
  };

  const validateEndTime = (startTime, duration) =>
    parseTimeToMinutes(startTime) + duration <= MENTOR_INFO.availableTo * 60;

  useEffect(() => {
    const slots = generateTimeSlots();
    setAvailableSlots(slots);
    if (selectedStartTime && !slots.includes(selectedStartTime)) {
      setSelectedStartTime('');
    }
  }, [selectedDate, sessionDuration, customDuration, bookedSessions]);

  useEffect(() => {
    if (selectedStartTime && getCurrentDuration()) {
      const endMinutes = parseTimeToMinutes(selectedStartTime) + getCurrentDuration();
      setEndTime(minutesToTimeString(endMinutes));
    }
  }, [selectedStartTime, sessionDuration, customDuration]);

  const validateForm = () => {
    const duration = getCurrentDuration();
    const newErrors = {};

    if (!sessionTitle.trim()) newErrors.title = 'Session title is required';
    if (!selectedStartTime) newErrors.startTime = 'Start time must be selected';
    if (duration < 15 || duration > 180) newErrors.duration = 'Session must be 15–180 mins';
    if (sessionDuration === 'custom' && isNaN(duration)) newErrors.customDuration = 'Invalid duration';
    if (selectedStartTime && duration) {
      if (!validateEndTime(selectedStartTime, duration)) {
        newErrors.endTime = `Session ends at ${endTime}, but mentor is only available until 7:00 PM`;
      }
      if (isTimeSlotBooked(selectedDate, selectedStartTime, duration)) {
        newErrors.timeConflict = 'This slot conflicts with an existing booking';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleBookSession = async () => {
    if (!validateForm()) return;
    setLoading(true);

    const sessionData = {
      id: Date.now(),
      mentor: username,
      mentee: user?.username,
      date: selectedDate.toDateString(),
      startTime: selectedStartTime,
      endTime,
      duration: getCurrentDuration(),
      title: sessionTitle,
      description: sessionDescription,
      type: sessionType,
      price: calculatePrice(getCurrentDuration()),
    };

    try {
      const { data } = await axiosInstance.post(
        '/session/initiate-session',
        { sessionData },
        { withCredentials: true }
      );

      if (data.success) {
        const { order, booking } = data;
        const isLoaded = await loadRazorpayScript();
        if (!isLoaded) return alert('Failed to load Razorpay');

        const options = {
          key: 'rzp_test_4eUvKQWERKoSWn',
          amount: order.amount,
          currency: order.currency,
          name: 'Mentora',
          description: 'Mentorship Session Booking',
          image: Logo,
          order_id: order.id,
          handler: async (response) => {
            try {
              const verifyRes = await axiosInstance.post(
                '/session/verify-payment',
                { ...response, bookingId: booking._id, sessionData },
                { withCredentials: true }
              );
              if (verifyRes.data.success) {
                alert('Session booked!');
                navigate('/payment-success',{ state: { booking: verifyRes.data.booking, mentorName:mentor.name } });
              }
              else alert('Payment failed verification.');
            } catch {
              alert('Error verifying payment.');
            }
          },
          prefill: {
            name: 'Rahul Kumar',
            email: 'rahul@example.com',
            contact: '9876543210',
          },
          theme: { color: '#6366f1' },
        };

        new window.Razorpay(options).open();
      }
    } catch (err) {
      console.error(err);
      alert('Failed to initiate session.');
    } finally {
      setLoading(false);
      setSessionTitle('');
      setSessionDescription('');
      setSelectedStartTime('');
      setSessionDuration(15);
      setCustomDuration('');
      setErrors({});
    }
  };

  const handleDurationChange = (change) => {
    if (sessionDuration !== 'custom') {
      setSessionDuration((prev) => Math.max(15, Math.min(180, prev + change)));
    } else {
      const updated = Math.max(15, Math.min(180, (parseInt(customDuration) || 15) + change));
      setCustomDuration(updated.toString());
    }
  };

  
  if(loading){
    return ;
  }

  return (
    <div className="min-h-screen bg-transparent p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Book a Session
          </h1>
          <p className="text-gray-600 text-lg">Schedule your personalized mentorship session</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <SideProfile
            mentor={mentor}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            sessionTypeOptions={sessionTypeOptions}
            sessionType={sessionType}
            setSessionType={setSessionType}
            sessionDuration={sessionDuration}
            setSessionDuration={setSessionDuration}
            customDuration={customDuration}
            setCustomDuration={setCustomDuration}
            handleDurationChange={handleDurationChange}
            calculatePrice={calculatePrice}
            getCurrentDuration={getCurrentDuration}
            errors={errors}
          />


          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Session Details</h2>
                {bookedSessions.length > 0 && (
                  <span className="text-sm text-gray-500">{bookedSessions.length} session(s) booked</span>
                )}
              </div>
              
              <div className="space-y-6">
                {/* Session Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Session Title *
                  </label>
                  <input
                    type="text"
                    value={sessionTitle}
                    onChange={(e) => setSessionTitle(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., React Architecture Review, Career Guidance..."
                  />
                  {errors.title && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.title}
                    </div>
                  )}
                </div>

                {/* Session Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description / Notes
                  </label>
                  <textarea
                    value={sessionDescription}
                    onChange={(e) => setSessionDescription(e.target.value)}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Describe what you'd like to discuss..."
                  />
                </div>

             

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Available Time Slots * ({availableSlots.length} available)
                  </label>
                  {availableSlots.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      No available slots for selected date and duration
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      {availableSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedStartTime(time)}
                          className={`p-3 rounded-lg text-sm font-medium transition-all ${
                            selectedStartTime === time
                              ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {(errors.startTime || errors.endTime || errors.timeConflict) && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.startTime || errors.endTime || errors.timeConflict}
                    </div>
                  )}
                  
                  {selectedStartTime && endTime && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg mt-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedStartTime} - {endTime} ({getCurrentDuration()} minutes)</span>
                    </div>
                  )}
                </div>

              

                {/* Summary Card */}
                {selectedStartTime && (
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Session Summary
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{selectedDate.toDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedStartTime} - {endTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{getCurrentDuration()} minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium capitalize">{sessionType} session</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-600 font-semibold">Total Price:</span>
                        <span className="font-bold text-indigo-600 text-lg">₹{calculatePrice(getCurrentDuration())}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Book Session Button */}
                <button
                  onClick={()=>{if(!user){alert("Please login first.")}else{handleBookSession()}}}
                  disabled={!selectedStartTime}
                  className={`w-full font-semibold py-2 rounded-lg transition-all shadow-lg ${
                    selectedStartTime 
                      ? 'bg-black text-white hover:black/90 hover:to-purple-700 transform hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isLoading?<Loading/>:`Book Session - ₹${calculatePrice(getCurrentDuration())}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSession