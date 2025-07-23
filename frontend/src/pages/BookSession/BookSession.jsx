import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Video, Headphones, MessageSquare, Star, CheckCircle2, AlertCircle, Plus, Minus } from 'lucide-react';
import SideProfile from './components/sideProfile';

function BookSession() {
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

  // Mock mentor data
  const mentor = {
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    avatar: "SJ",
    rating: 4.9,
    totalSessions: 247,
    pricePerMinute: 5, 
    availableFrom: 9, // 9 AM
    availableTo: 19, // 7 PM
  };

  // Calculate price based on duration
  const calculatePrice = (duration) => {
    return duration * mentor.pricePerMinute;
  };

  // Check if a time slot conflicts with existing bookings
  const isTimeSlotBooked = (date, startTime, duration) => {
    const dateStr = date.toDateString();
    const sessionStart = parseTimeToMinutes(startTime);
    const sessionEnd = sessionStart + duration;

    return bookedSessions.some(session => {
      if (session.date !== dateStr) return false;
      const bookedStart = parseTimeToMinutes(session.startTime);
      const bookedEnd = bookedStart + session.duration;
      
      return (sessionStart < bookedEnd && sessionEnd > bookedStart);
    });
  };

  // Convert time string to minutes from midnight
  const parseTimeToMinutes = (timeString) => {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) hour24 += 12;
    if (period === 'AM' && hours === 12) hour24 = 0;
    
    return hour24 * 60 + minutes;
  };

  // Convert minutes to time string
  const minutesToTimeString = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
    
    return `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
  };

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    for (let hour = mentor.availableFrom; hour < mentor.availableTo; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const slotTime = new Date();
        slotTime.setHours(hour, minute, 0, 0);
        
        // Skip past time slots for today
        const isToday = selectedDate.toDateString() === now.toDateString();
        if (isToday && (hour < currentHour || (hour === currentHour && minute <= currentMinute + 30))) {
          continue;
        }
        
        const timeString = slotTime.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        });
        
        // Check if this slot is available (not booked)
        if (!isTimeSlotBooked(selectedDate, timeString, getCurrentDuration())) {
          slots.push(timeString);
        }
      }
    }
    return slots;
  };

  const [availableSlots, setAvailableSlots] = useState([]);

  // Update available slots when date, duration, or bookings change
  useEffect(() => {
    setAvailableSlots(generateTimeSlots());
    // Reset selected time if it's no longer available
    if (selectedStartTime && !generateTimeSlots().includes(selectedStartTime)) {
      setSelectedStartTime('');
    }
  }, [selectedDate, sessionDuration, customDuration, bookedSessions]);

  // Get current duration value
  const getCurrentDuration = () => {
    return sessionDuration === 'custom' ? parseInt(customDuration) || 0 : sessionDuration;
  };

  // Validate if end time exceeds mentor availability
  const validateEndTime = (startTime, duration) => {
    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = startMinutes + duration;
    const maxAvailableMinutes = mentor.availableTo * 60; // 7 PM = 19 * 60 = 1140 minutes
    
    return endMinutes <= maxAvailableMinutes;
  };

  // Calculate end time
  useEffect(() => {
    const duration = getCurrentDuration();
    if (selectedStartTime && duration) {
      const startMinutes = parseTimeToMinutes(selectedStartTime);
      const endMinutes = startMinutes + duration;
      setEndTime(minutesToTimeString(endMinutes));
    }
  }, [selectedStartTime, sessionDuration, customDuration]);

  const validateForm = () => {
    const newErrors = {};
    const duration = getCurrentDuration();
    
    if (!sessionTitle.trim()) newErrors.title = 'Session title is required';
    if (!selectedStartTime) newErrors.startTime = 'Start time must be selected';
    
    if (duration < 15) newErrors.duration = 'Minimum session duration is 15 minutes';
    if (duration > 180) newErrors.duration = 'Maximum session duration is 180 minutes';
    
    if (sessionDuration === 'custom' && (!customDuration || isNaN(customDuration))) {
      newErrors.customDuration = 'Please enter a valid custom duration';
    }

    // Validate end time doesn't exceed mentor availability
    if (selectedStartTime && duration) {
      if (!validateEndTime(selectedStartTime, duration)) {
        newErrors.endTime = `Session would end at ${endTime}, but mentor is only available until 7:00 PM`;
      }

      // Check for conflicts with existing bookings
      if (isTimeSlotBooked(selectedDate, selectedStartTime, duration)) {
        newErrors.timeConflict = 'This time slot conflicts with an existing booking';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookSession = () => {
    if (validateForm()) {
      const sessionData = {
        id: Date.now(),
        date: selectedDate.toDateString(),
        startTime: selectedStartTime,
        endTime: endTime,
        duration: getCurrentDuration(),
        title: sessionTitle,
        description: sessionDescription,
        type: sessionType,
        price: calculatePrice(getCurrentDuration()),
        mentor: mentor.name
      };

      setBookedSessions(prev => [...prev, sessionData]);
      
      // Reset form
      setSessionTitle('');
      setSessionDescription('');
      setSelectedStartTime('');
      setSessionDuration(15);
      setCustomDuration('');
      setErrors({});

      alert(`Session booked successfully!\nDate: ${sessionData.date}\nTime: ${sessionData.startTime} - ${sessionData.endTime}\nDuration: ${sessionData.duration} minutes\nPrice: ₹${sessionData.price}`);
    }
  };

  const handleDurationChange = (change) => {
    if (sessionDuration !== 'custom') {
      const newDuration = Math.max(15, Math.min(180, sessionDuration + change));
      setSessionDuration(newDuration);
    } else {
      const currentCustom = parseInt(customDuration) || 15;
      const newDuration = Math.max(15, Math.min(180, currentCustom + change));
      setCustomDuration(newDuration.toString());
    }
  };

  const sessionTypeOptions = [
    { value: 'video', label: 'Video', icon: Video, color: 'bg-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-transparent p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Book a Session
          </h1>
          <p className="text-gray-600 text-lg">Schedule your personalized mentorship session</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Minimal Mentor Profile Card */}
         <SideProfile mentor={mentor} selectedDate={selectedDate} errors={errors} setSessionType={setSessionType} sessionTypeOptions={sessionTypeOptions} sessionType={sessionType} setCustomDuration={setCustomDuration} customDuration={customDuration} handleDurationChange={handleDurationChange} setSessionDuration={setSessionDuration} sessionDuration={sessionDuration} setSelectedDate={setSelectedDate} calculatePrice={calculatePrice} getCurrentDuration={getCurrentDuration}/>

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
                  onClick={handleBookSession}
                  disabled={!selectedStartTime}
                  className={`w-full font-semibold py-2 rounded-lg transition-all shadow-lg ${
                    selectedStartTime 
                      ? 'bg-black text-white hover:black/90 hover:to-purple-700 transform hover:scale-105' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Book Session - ₹{calculatePrice(getCurrentDuration())}
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