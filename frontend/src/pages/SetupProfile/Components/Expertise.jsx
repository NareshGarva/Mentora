import React, { useState } from 'react';
import Loading from '../../../components/Loading'
import axiosInstance from '../../../utils/axiosInstance'
import { showToast } from '../../../components/Toast';



function Expertise() {
    const [isLoading, setLoading] = useState(false)
  const [expertises, setExpertises] = useState([]);
  const [currentExpertise, setCurrentExpertise] = useState(initialForm());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function initialForm() {
    return {
      expertise: '',
      level: 'Beginner'
    };
  }

  const handleChange = (field, value) => {
    setCurrentExpertise(prev => ({ ...prev, [field]: value }));
  };

  const handleAddOrUpdate = () => {
    if (!currentExpertise.expertise.trim()) return;

    if (isEditing) {
      const updatedList = [...expertises];
      updatedList[editIndex] = currentExpertise;
      setExpertises(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setExpertises(prev => [...prev, currentExpertise]);
    }

    setCurrentExpertise(initialForm());
  };

  const handleEdit = (index) => {
    setCurrentExpertise(expertises[index]);
    setEditIndex(index);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = (index) => {
    setExpertises(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    setLoading(true);
    if (!expertises || expertises.length === 0) {
      showToast("Please add at least one Expertise.", 'error');
      return;
    }
  
    try {
     const response = await axiosInstance.post('/profile/expertise', { expertises }, {
    withCredentials: true
  });
  
  
      if (response.status === 200) {
        showToast("Expertise updated successfully.",'success');
      } else {
        showToast("Failed to update Expertise.", 'error');
      }
  setLoading(false)
    } catch (error) {
      console.error(error);
      showToast("An error occurred while updating Expertise.", 'error');
    }
  };


  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Expertise & Skills</h2>
          <p className="text-gray-600">What are you good at?</p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Skill/Expertise *</label>
          <input
            type="text"
            className="w-full p-4 border-2 border-gray-200 rounded-xl"
            placeholder="e.g., React, Python, Digital Marketing"
            value={currentExpertise.expertise}
            onChange={(e) => handleChange('expertise', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Proficiency Level *</label>
          <div className="grid grid-cols-3 gap-2">
            {['Beginner', 'Intermediate', 'Expert'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleChange('level', level)}
                className={`p-3 text-sm font-medium rounded-xl transition-all ${
                  currentExpertise.level === level
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-300'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg mr-5"
        >
          {isEditing ? 'Update Skill' : 'Add Skill'}
        </button>
             <button
                  onClick={handleSave}
                  className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors shadow-lg"
                >
                  {isLoading?<Loading/>:'Save'}
                </button>
      </div>

      {/* Saved Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        {expertises.map((skill, index) => (
          <div key={index} className="bg-white border p-6 rounded-2xl relative shadow space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{skill.expertise}</h3>
                <p className="text-sm text-gray-600">Level: {skill.level}</p>
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

export default Expertise;
