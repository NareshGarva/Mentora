import React, { useState } from 'react'
import Loading from '../../../components/Loading'
import axiosInstance from '../../../utils/axiosInstance'
import { showToast } from '../../../components/Toast';

function WeeklyAvailability() {     
   const [isLoading, setLoading] = useState(false)
     // Form data state
      const [formData, setFormData] = useState({
        availability: {
          monday: { startTime: '', endTime: '', isAvailable: false },
          tuesday: { startTime: '', endTime: '', isAvailable: false },
          wednesday: { startTime: '', endTime: '', isAvailable: false },
          thursday: { startTime: '', endTime: '', isAvailable: false },
          friday: { startTime: '', endTime: '', isAvailable: false },
          saturday: { startTime: '', endTime: '', isAvailable: false },
          sunday: { startTime: '', endTime: '', isAvailable: false }
        },
      });


      const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };


   const handleSave = async () => {
      setLoading(true);
      if (!formData.availability || formData.availability.length === 0) {
        showToast("Please add at least one Availability.", 'error');
        return;
      }
    
      try {
       const response = await axiosInstance.post('/profile/availability', { availability:formData.availability }, {
      withCredentials: true
    });
    
    
        if (response.status === 200) {
          showToast("Availability updated successfully.", 'success');
        } else {
          showToast("Failed to update Availability.", 'error');
        }
    setLoading(false)
      } catch (error) {
        console.error(error);
        showToast("An error occurred while updating Availability.", 'error');
      }
    };
  




       const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const dayIcons = ['🌟', '🔥', '⚡', '💪', '🎯', '🎉', '☀️'];
  return (
    <div>
         <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Weekly Availability</h2>
              <p className="text-gray-600">Set your available hours for each day</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {daysOfWeek.map((day, index) => (
                <div key={day} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{dayIcons[index]}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{dayNames[index]}</h3>
                    </div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.availability[day].isAvailable}
                        onChange={(e) => {
                          const newAvailability = {
                            ...formData.availability,
                            [day]: {
                              ...formData.availability[day],
                              isAvailable: e.target.checked,
                              startTime: e.target.checked ? formData.availability[day].startTime : '',
                              endTime: e.target.checked ? formData.availability[day].endTime : ''
                            }
                          };
                          updateFormData('availability', newAvailability);
                        }}
                      />
                      <div className={`relative w-14 h-8 rounded-full transition-colors ${
                        formData.availability[day].isAvailable ? 'bg-blue-600' : 'bg-gray-300'
                      }`}>
                        <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                          formData.availability[day].isAvailable ? 'translate-x-6' : 'translate-x-0'
                        }`}></div>
                      </div>
                    </label>
                  </div>
                  
                  {formData.availability[day].isAvailable ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Start Time</label>
                        <input
                          type="time"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          value={formData.availability[day].startTime}
                          onChange={(e) => {
                            const newAvailability = {
                              ...formData.availability,
                              [day]: {
                                ...formData.availability[day],
                                startTime: e.target.value
                              }
                            };
                            updateFormData('availability', newAvailability);
                          }}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">End Time</label>
                        <input
                          type="time"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          value={formData.availability[day].endTime}
                          onChange={(e) => {
                            const newAvailability = {
                              ...formData.availability,
                                                            [day]: {
                                ...formData.availability[day],
                                endTime: e.target.value
                              }
                            };
                            updateFormData('availability', newAvailability);
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 mt-2">Not available on this day</p>
                  )}
                </div>
              ))}
            </div>
              <button
                              onClick={handleSave}
                              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors shadow-lg"
                            >
                              {isLoading?<Loading/>:'Save'}
                            </button>
          </div>
    </div>
  )
}

export default WeeklyAvailability