import React, { useState } from 'react';
import Loading from '../../../components/Loading'
import axiosInstance from '../../../utils/axiosInstance'
import { showToast } from '../../../components/Toast';

function WorkExperience() {
      const [isLoading, setLoading] = useState(false)
  const [workExperiences, setWorkExperiences] = useState([]);
  const [currentExperience, setCurrentExperience] = useState(initialForm());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function initialForm() {
    return {
      company: '',
      jobProfile: '',
      joiningDate: '',
      endingDate: '',
      aboutJob: '',
      currentlyWorking: false
    };
  }

  const handleChange = (field, value) => {
    setCurrentExperience(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = () => {
    setCurrentExperience(prev => ({
      ...prev,
      currentlyWorking: !prev.currentlyWorking,
      endingDate: !prev.currentlyWorking ? '' : prev.endingDate
    }));
  };

  const handleAddOrUpdate = () => {
    if (isEditing) {
      const updatedList = [...workExperiences];
      updatedList[editIndex] = currentExperience;
      setWorkExperiences(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setWorkExperiences(prev => [...prev, currentExperience]);
    }
    setCurrentExperience(initialForm());
  };

  const handleEdit = (index) => {
    setCurrentExperience(workExperiences[index]);
    setEditIndex(index);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = (index) => {
    setWorkExperiences(prev => prev.filter((_, i) => i !== index));
  };


  const handleSave = async () => {
    setLoading(true);
    if (!workExperiences || workExperiences.length === 0) {
      showToast("Please add at least one work history.", 'error');
      return;
    }
  
    try {
     const response = await axiosInstance.post('/profile/work-experience', { workExperiences }, {
    withCredentials: true
  });
  
  
      if (response.status === 200) {
        showToast("work history updated successfully.", 'success');
      } else {
        showToast("Failed to update work history.", 'error');
      }
  setLoading(false)
    } catch (error) {
      console.error(error);
      showToast("An error occurred while updating work history.", 'error');
    }
  };


  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <p className="text-gray-600">Share your professional journey</p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              placeholder="Company name"
              value={currentExperience.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Job Profile *</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              placeholder="Your role/position"
              value={currentExperience.jobProfile}
              onChange={(e) => handleChange('jobProfile', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Joining Date *</label>
            <input
              type="date"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={currentExperience.joiningDate}
              onChange={(e) => handleChange('joiningDate', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ending Date</label>
            <input
              type="date"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={currentExperience.endingDate}
              onChange={(e) => handleChange('endingDate', e.target.value)}
              disabled={currentExperience.currentlyWorking}
            />
            <div className="mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="currentlyWorking"
                checked={currentExperience.currentlyWorking}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="currentlyWorking" className="text-sm text-gray-700">Currently working here</label>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">About Job *</label>
          <textarea
            rows="4"
            className="w-full p-4 border-2 border-gray-200 rounded-xl resize-none"
            placeholder="Describe your role, responsibilities, and achievements..."
            value={currentExperience.aboutJob}
            onChange={(e) => handleChange('aboutJob', e.target.value)}
          />
        </div>

        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg mr-5"
        >
          {isEditing ? 'Update Experience' : 'Add Experience'}
        </button>
          <button
                  onClick={handleSave}
                  className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors shadow-lg"
                >
                  {isLoading?<Loading/>:'Save'}
                </button>
      </div>

      {/* Saved Cards */}
      <div className="space-y-6 pt-4">
        {workExperiences.map((exp, index) => (
          <div key={index} className="bg-white border p-6 rounded-2xl relative shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{exp.jobProfile} at {exp.company}</h3>
                <p className="text-sm text-gray-600">
                  {exp.joiningDate} - {exp.currentlyWorking ? 'Present' : exp.endingDate}
                </p>
                <p className="mt-2 text-gray-800">{exp.aboutJob}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
