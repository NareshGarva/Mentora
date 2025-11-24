import React, { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance'
import Loading from '../../../components/Loading'
import { showToast } from '../../../components/Toast';

function SocialLinks() {
  const [isLoading, setLoading] = useState(false)
  const [socialLinks, setSocialLinks] = useState([]);
  const [currentLink, setCurrentLink] = useState(initialForm());
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function initialForm() {
    return {
      platform: '',
      url: ''
    };
  }

  const handleChange = (field, value) => {
    setCurrentLink(prev => ({ ...prev, [field]: value }));
  };

  const handleAddOrUpdate = () => {
    if (!currentLink.platform || !currentLink.url) return;

    if (isEditing) {
      const updatedList = [...socialLinks];
      updatedList[editIndex] = currentLink;
      setSocialLinks(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setSocialLinks(prev => [...prev, currentLink]);
    }

    setCurrentLink(initialForm());
  };

  const handleEdit = (index) => {
    setCurrentLink(socialLinks[index]);
    setEditIndex(index);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = (index) => {
    setSocialLinks(prev => prev.filter((_, i) => i !== index));
  };

const handleSave = async () => {
  setLoading(true);
  if (!socialLinks || socialLinks.length === 0) {
    showToast("Please add at least one social link.", 'error');
    return;
  }

  try {
   const response = await axiosInstance.post('/profile/social-links', { socialLinks }, {
  withCredentials: true
});


    if (response.status === 200) {
      showToast("Social links updated successfully.", 'success');
    } else {
      showToast("Failed to update social links.", 'error');
    }
setLoading(false)
  } catch (error) {
    console.error(error);
    showToast("An error occurred while updating social links.", 'error');
  }
};


  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Social Links</h2>
          <p className="text-gray-600">Connect your social profiles</p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Platform *</label>
          <select
            className="w-full p-4 border-2 border-gray-200 rounded-xl"
            value={currentLink.platform}
            onChange={(e) => handleChange('platform', e.target.value)}
          >
            <option value="">Select Platform</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="GitHub">GitHub</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Portfolio">Portfolio</option>
            <option value="YouTube">YouTube</option>
            <option value="Behance">Behance</option>
            <option value="Dribbble">Dribbble</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Profile URL *</label>
          <input
            type="url"
            className="w-full p-4 border-2 border-gray-200 rounded-xl"
            placeholder="https://..."
            value={currentLink.url}
            onChange={(e) => handleChange('url', e.target.value)}
          />
        </div>

        <button
          onClick={handleAddOrUpdate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg mr-5"
        >
          {isEditing ? 'Update Link' : 'Add Link'}
        </button>
         <button
          onClick={handleSave}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/90 transition-colors shadow-lg"
        >
          {isLoading?<Loading/>:'Save'}
        </button>
      </div>

      {/* Saved Link Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="bg-white border p-6 rounded-2xl relative shadow space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{link.platform}</h3>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline break-words"
                >
                  {link.url}
                </a>
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

export default SocialLinks;
