import React, { useState } from 'react'
import Loading from '../../../components/Loading'
import axiosInstance from '../../../utils/axiosInstance'
import { showToast } from '../../../components/Toast';

function SetYourRate() {
     const [isLoading, setLoading] = useState(false)
     // Form data state
      const [formData, setFormData] = useState({
        // Rate
        rate: {
          perHour: ''
        }
      });

        const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };


  
  const calculateRates = (hourlyRate) => {
    const rate = parseFloat(hourlyRate) || 0;
    return {
      perHour: rate,
      perMinute: (rate / 60).toFixed(2),
      per15Minutes: (rate / 4).toFixed(2),
      per30Minutes: (rate / 2).toFixed(2)
    };
  };

  const handleRateChange = (value) => {
    const rates = calculateRates(value);
    updateFormData('rate', rates);
  };


  const handleSave = async () => {
      setLoading(true);
      if (!formData.rate || formData.rate.length === 0) {
        showToast("Please add at least one Rates.", 'error');
        return;
      }
    
      try {
       const response = await axiosInstance.post('/profile/rate', { rate:formData.rate }, {
      withCredentials: true
    });
    
    
        if (response.status === 200) {
          showToast("Rates updated successfully.", 'success');
        } else {
          showToast("Failed to update Rates.", 'error');
        }
    setLoading(false)
      } catch (error) {
        console.error(error);
        showToast("An error occurred while updating Rates.", 'error');
      }
    };


  return (
    <div>
        <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Set Your Rate</h2>
              <p className="text-gray-600">Define your hourly rate and let us calculate the rest</p>
            </div>

            <div className="w-full lg:w-1/2 mx-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hourly Rate (INR)</label>
              <input
                type="number"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={formData.rate.perHour}
                onChange={(e) => handleRateChange(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-1">Per Minute</p>
                <p className="text-lg font-semibold text-gray-900">₹ {formData.rate.perMinute}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-1">15 Minutes</p>
                <p className="text-lg font-semibold text-gray-900">₹ {formData.rate.per15Minutes}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-1">30 Minutes</p>
                <p className="text-lg font-semibold text-gray-900">₹ {formData.rate.per30Minutes}</p>
              </div>
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

export default SetYourRate