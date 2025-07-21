import React, { useState } from 'react'

function SetYourRate() {
     // Form data state
      const [formData, setFormData] = useState({
        // Rate
        rate: {
          perHour: '',
          perMinute: 0,
          per15Minutes: 0,
          per30Minutes: 0
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
          </div>
    </div>
  )
}

export default SetYourRate