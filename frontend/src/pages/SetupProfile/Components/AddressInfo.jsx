import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Loading from '../../../components/Loading';
import axiosInstance from '../../../utils/axiosInstance';

function AddressInfo() {
  const [isLoading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    isDefault: false,
  });

  const updateFormData = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/address/create', formData, {
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        alert('Address saved successfully.');
      } else {
        alert('Failed to save address.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving address.');
    } finally {
      setLoading(false);
    }
  };

  // Indian states list for dropdown
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Address Information</h2>
        <p className="text-gray-600">Add your address details for better service</p>
      </div>

      {/* Address Icon */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-lg">
          <MapPin size={32} className="text-green-600" />
        </div>
      </div>

      <div className="p-7 rounded-2xl bg-white space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Street Address */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
            <input
              type="text"
              placeholder="Enter your complete street address"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.street}
              onChange={(e) => updateFormData('street', e.target.value)}
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.city}
              onChange={(e) => updateFormData('city', e.target.value)}
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
            <select
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.state}
              onChange={(e) => updateFormData('state', e.target.value)}
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Postal Code *</label>
            <input
              type="text"
              placeholder="Enter PIN code"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.postalCode}
              onChange={(e) => updateFormData('postalCode', e.target.value)}
              maxLength="6"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
            <select
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.country}
              onChange={(e) => updateFormData('country', e.target.value)}
            >
              <option value="India">India</option>
            </select>
          </div>
        </div>

        {/* Default Address Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="isDefault"
            className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
            checked={formData.isDefault}
            onChange={(e) => updateFormData('isDefault', e.target.checked)}
          />
          <label htmlFor="isDefault" className="text-sm font-medium text-gray-700">
            Set as default address
          </label>
        </div>

        <button
          onClick={handleSave}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors shadow-lg"
        >
          {isLoading ? <Loading /> : 'Save Address'}
        </button>
      </div>
    </div>
  );
}

export default AddressInfo;