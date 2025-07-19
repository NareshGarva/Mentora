import React, { useState, useEffect } from 'react';

const EditDetails = ({ onClose, initialData }) => {
  const [form, setForm] = useState({
    profile_pic: '',
    learner_name: '',
    learner_since: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data (replace with real API call)
    setTimeout(() => {
      setForm(initialData);
      setLoading(false);
    }, 1000);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert('Profile updated!');
    onClose();
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-4 items-center bg-white border border-m-gray-300">
      <div>
        <label>Profile Picture URL:</label>
        <input
          type="text"
          name="profile_pic"
          value={form.profile_pic}
          onChange={handleChange}
          className="border p-2 rounded w-64"
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="learner_name"
          value={form.learner_name}
          onChange={handleChange}
          className="border p-2 rounded w-64"
        />
      </div>
      <div>
        <label>Learner Since:</label>
        <input
          type="text"
          name="learner_since"
          value={form.learner_since}
          onChange={handleChange}
          className="border p-2 rounded w-64"
        />
      </div>
      <button type="submit" className="bg-secondary-300 border border-secondary-500 p-4 rounded-full mt-4">
        Submit
      </button>
    </form>
  );
};

export default EditDetails;