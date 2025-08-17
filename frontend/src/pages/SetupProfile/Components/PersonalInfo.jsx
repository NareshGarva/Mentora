import React, { useState } from 'react';
import { Camera, ChevronDown } from 'lucide-react';
import Loading from '../../../components/Loading';
import axiosInstance from '../../../utils/axiosInstance';

function PersonalInfo() {
  const [isLoading, setLoading] = useState(false);
  
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    number: '+91 74398-74728',
    bio: '',
    gender: '',
    dob: '',
    profession: '',
  });
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState(null);
  
  // Profession dropdown states
  const [professionDropdownOpen, setProfessionDropdownOpen] = useState(false);
  
  // Preset professions list
  const presetProfessions = [
    'Software Developer',
    'Data Scientist',
    'Product Manager',
    'Designer',
    'Marketing Manager',
    'Sales Executive',
    'Doctor',
    'Teacher',
    'Engineer',
    'Lawyer',
    'Nurse',
    'Accountant',
    'Business Analyst',
    'Consultant',
    'Project Manager',
    'HR Manager',
    'Content Writer',
    'Digital Marketer',
    'Photographer',
    'Artist',
    'Student',
    'Entrepreneur',
    'Freelancer',
    'Other'
  ];

  const updateFormData = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file); // Save image separately
    }
  };
  
  const checkUsernameAvailability = async () => {
    const username = formData.username.trim();
    if (!username) return;

    setChecking(true);
    setAvailable(null);

    try {
      const res = await axiosInstance.get(`/user/check-username`, {
        params: { username },
        withCredentials: true
      });

      setAvailable(res.data.available);  // We'll return this from backend
    } catch (err) {
      console.log(err);
      setAvailable(false);
    } finally {
      setChecking(false);
    }
  };

  // Filter professions based on search
  const filteredProfessions = presetProfessions.filter(profession =>
    profession.toLowerCase().includes(formData.profession.toLowerCase())
  );

  const handleProfessionSelect = (profession) => {
    updateFormData('profession', profession);
    setProfessionDropdownOpen(false);
  };

  const handleProfessionInputChange = (e) => {
    const value = e.target.value;
    updateFormData('profession', value);
    setProfessionDropdownOpen(true);
  };

  const handleProfessionFocus = () => {
    setProfessionDropdownOpen(true);
  };

  const handleProfessionBlur = () => {
    // Delay closing to allow click events on dropdown items
    setTimeout(() => setProfessionDropdownOpen(false), 150);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append('avatar', avatar); // must be File object from <input type="file" />

      // Append all other fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axiosInstance.put('/profile/update-profile', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (response.status === 200) {
        alert('Profile updated successfully.');
      } else {
        alert('Failed to update profile.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Tell us about yourself to get started</p>
      </div>

      {/* Avatar Upload */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
            {avatar ? (
              <img src={URL.createObjectURL(avatar)} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                <Camera size={32} className="text-blue-600" />
              </div>
            )}
          </div>
          <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700 transition-colors shadow-lg">
            <Camera size={16} />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        </div>
        <p className="text-sm text-gray-500">Click the camera icon to upload your photo</p>
      </div>

      <div className="p-7 rounded-2xl bg-white space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Username *</label>
            <input
              type="text"
              placeholder="unique_username"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.username}
              onChange={(e) => updateFormData('username', e.target.value)}
            />
            <p
              onClick={checkUsernameAvailability}
              className="text-sm font-semibold cursor-pointer"
            >
              {checking ? 'Checking...' : 'Check Availability'}
            </p>
            {available !== null && (
              <p className={`mt-1 text-sm ${available ? 'text-green-600' : 'text-red-500'}`}>
                {available ? 'Username is available' : 'Username is taken'}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
            />
          </div>

          {/* Searchable Profession Field */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search or enter your profession"
                className="w-full p-4 border-2 border-gray-200 rounded-xl pr-10"
                value={formData.profession}
                onChange={handleProfessionInputChange}
                onFocus={handleProfessionFocus}
                onBlur={handleProfessionBlur}
              />
              <ChevronDown 
                size={20} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setProfessionDropdownOpen(!professionDropdownOpen)}
              />
            </div>
            
            {/* Dropdown */}
            {professionDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                {filteredProfessions.length > 0 ? (
                  filteredProfessions.map((profession, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onMouseDown={(e) => {
                        e.preventDefault(); // Prevent blur event
                        handleProfessionSelect(profession);
                      }}
                    >
                      {profession}
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-gray-500">
                    No matches found. Press Enter to use "{formData.profession}" as custom profession.
                  </div>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.number}
              onChange={(e) => updateFormData('number', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
            <select
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.gender}
              onChange={(e) => updateFormData('gender', e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={formData.dob}
              onChange={(e) => updateFormData('dob', e.target.value)}
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
          <textarea
            rows="4"
            className="w-full p-4 border-2 border-gray-200 rounded-xl resize-none"
            placeholder="Tell us about yourself, your interests, and what makes you unique..."
            value={formData.bio}
            onChange={(e) => updateFormData('bio', e.target.value)}
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors shadow-lg"
        >
          {isLoading ? <Loading /> : 'Save'}
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;