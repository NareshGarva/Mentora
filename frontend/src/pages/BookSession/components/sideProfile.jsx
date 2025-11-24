import React,{useEffect} from "react";
import Avatar from "../../../components/Avatar";
import { Star, Calendar,Minus, Plus,AlertCircle } from "lucide-react";


function SideProfile({ mentor, selectedDate, sessionTypeOptions, sessionType,setSessionType, handleDurationChange,errors,setCustomDuration,customDuration, sessionDuration,setSessionDuration, getCurrentDuration, calculatePrice, setSelectedDate }) {

const getAvailabilityForSelectedDate = () => {
  if (!mentor || !mentor.availability || mentor.availability.length === 0) return null;

  const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayAvailability = mentor.availability[0]?.[dayName];

  if (!todayAvailability || !todayAvailability.isAvailable) {
    return 'Not available on this day';
  }

  const formatTime = (timeStr) => {
    const [hour, minute] = timeStr.split(':');
    const hourNum = parseInt(hour, 10);
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum % 12 || 12;
    return `${displayHour}:${minute} ${period}`;
  };

  return `Available: ${formatTime(todayAvailability.startTime)} – ${formatTime(todayAvailability.endTime)}`;
};

useEffect(()=>{
getAvailabilityForSelectedDate();
},[selectedDate])

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-lg p-4 sticky top-20">
        <div className="flex justify-left items-start gap-3 mb-4">
          <Avatar />
          <div>
            <div className="flex justify-between items-center gap-3">
              <h3 className="font-semibold text-gray-800 truncate">
                {mentor.name}
              </h3>
              <div className="flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-semibold">{mentor.reviews.length}</span>
                <span className="text-xs text-gray-500">
                  ({mentor.sessions.length})
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 truncate">{mentor.username}</p>
          </div>
        </div>

        {/* Live Price Display */}
        <div className="text-center p-2 bg-black text-white rounded-lg mb-4">
          <div className="text-xl font-bold">
            ₹{calculatePrice(getCurrentDuration())}{" "}
            <span className="text-xs text-gray-400 font-normal">
              {getCurrentDuration()} minutes
            </span>
          </div>
        </div>

        {/* Available Hours */}
        <div className="text-center text-xs text-gray-600 bg-gray-100 p-2 rounded-lg">
          {getAvailabilityForSelectedDate()}
        </div>


{/* session date and duration */}
           <div>
                  {/* Date Selection */}
                  <div className="mt-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Date
                    </label>
                    <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <input
                        type="date"
                        value={selectedDate.toISOString().split('T')[0]}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setSelectedDate(new Date(e.target.value))}
                        className="flex-1 bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Duration Selection with Controls */}
                  <div className="mt-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Duration *
                    </label>
                    <div className="space-y-2">
                      <select
                        value={sessionDuration}
                        onChange={(e) => setSessionDuration(e.target.value === 'custom' ? 'custom' : parseInt(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value={15}>15 minutes</option>
                        <option value={30}>30 minutes</option>
                        <option value={45}>45 minutes</option>
                        <option value={60}>60 minutes</option>
                        <option value="custom">Custom duration</option>
                      </select>
                      
                      {/* Duration Controls */}
                      <div className="flex items-center justify-center p-3 bg-gray-50 rounded-xl mt-2">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleDurationChange(-15)}
                            className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          {sessionDuration === 'custom' ? (
                            <input
                              type="number"
                              value={customDuration}
                              onChange={(e) => setCustomDuration(e.target.value)}
                              min="15"
                              max="180"
                              className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                          ) : (
                            <span className="text-lg font-semibold text-gray-800 min-w-[60px] text-center">
                              {sessionDuration}
                            </span>
                          )}
                          <span className="text-sm text-gray-600">min</span>
                          
                          <button
                            type="button"
                            onClick={() => handleDurationChange(15)}
                            className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                       
                      </div>
                      
                      {(errors.duration || errors.customDuration) && (
                        <div className="flex items-center gap-2 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.duration || errors.customDuration}
                        </div>
                      )}
                    </div>
                  </div>

                    {/* Session Type */}
              
                </div>


                    {/* sesion type */}
        <div>
                  <label className="block text-sm font-semibold text-gray-700 mt-5">
                    Session Type
                  </label>
                  <div className="">
                    {sessionTypeOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.value}
                          onClick={() => setSessionType(option.value)}
                          className={`p-2 w-full flex justify-center items-center rounded-lg border-2 transition-all ${
                            sessionType === option.value
                              ? 'border-indigo-500 bg-indigo-50'
                              : 'border-gray-200 hover:border-indigo-300'
                          }`}
                        >
                            <IconComponent className="w-5 h-5 mr-2  ${option.color}" />
                          <div className="text-xs font-medium text-gray-700">{option.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
      </div>

  
    </div>
  );
}

export default SideProfile;
