import React, { useState } from 'react';

function EducationInfo() {
  const [educations, setEducations] = useState([]);
  const [currentEducation, setCurrentEducation] = useState(initialForm());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function initialForm() {
    return {
      college: '',
      course: '',
      cgpa: '',
      enrollmentDate: '',
      passoutDate: '',
      currentlyStudying: false
    };
  }

  const handleChange = (field, value) => {
    setCurrentEducation(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = () => {
    setCurrentEducation(prev => ({
      ...prev,
      currentlyStudying: !prev.currentlyStudying,
      passoutDate: !prev.currentlyStudying ? '' : prev.passoutDate
    }));
  };

  const handleAddOrUpdate = () => {
    if (isEditing) {
      const updatedList = [...educations];
      updatedList[editIndex] = currentEducation;
      setEducations(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setEducations(prev => [...prev, currentEducation]);
    }

    setCurrentEducation(initialForm());
  };

  const handleEdit = (index) => {
    setCurrentEducation(educations[index]);
    setEditIndex(index);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = (index) => {
    setEducations(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <p className="text-gray-600">Your academic background</p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">College/University *</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              placeholder="Institution name"
              value={currentEducation.college}
              onChange={(e) => handleChange('college', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Course *</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              placeholder="Degree/Course name"
              value={currentEducation.course}
              onChange={(e) => handleChange('course', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">CGPA/Grade *</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              placeholder="e.g., 3.8/4.0 or 85%"
              value={currentEducation.cgpa}
              onChange={(e) => handleChange('cgpa', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Enrollment Date *</label>
            <input
              type="date"
              className="w-full p-4 border-2 border-gray-200 rounded-xl"
              value={currentEducation.enrollmentDate}
              onChange={(e) => handleChange('enrollmentDate', e.target.value)}
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Passout Date *</label>
            <input
              type="date"
              className="w-full lg:w-1/2 p-4 border-2 border-gray-200 rounded-xl"
              value={currentEducation.passoutDate}
              onChange={(e) => handleChange('passoutDate', e.target.value)}
              disabled={currentEducation.currentlyStudying}
            />
            <div className="mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="currentlyStudying"
                checked={currentEducation.currentlyStudying}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="currentlyStudying" className="text-sm text-gray-700">Currently studying here</label>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
        >
          {isEditing ? 'Update Education' : 'Add Education'}
        </button>
      </div>

      {/* Saved Education Cards */}
      <div className="space-y-6 pt-4">
        {educations.map((edu, index) => (
          <div key={index} className="bg-white border p-6 rounded-2xl relative shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{edu.course} at {edu.college}</h3>
                <p className="text-sm text-gray-600">
                  {edu.enrollmentDate} - {edu.currentlyStudying ? 'Present' : edu.passoutDate}
                </p>
                <p className="mt-2 text-gray-800">CGPA: {edu.cgpa}</p>
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

export default EducationInfo;
