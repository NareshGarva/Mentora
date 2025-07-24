import React, { useState } from 'react';
import { User, GraduationCap, Share2, Award, Lock, Bell, Globe, Trash2, Eye, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth.context';

function Settings() {
  const {user} = useAuth();
  const Navigate = useNavigate();
  const [settings, setSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    publicProfile: true,
    showEmail: false,
    twoFactorAuth: false,
  });


  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // TODO: Show success or error toast
  };

  const handleSectionUpdate = (section) => {
    console.log(`Opening ${section} update modal`);
    // TODO: Open modal or navigate to section-specific page
  };

  const profileSections = [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Update your basic information, contact details, and bio',
      icon: User,
      color: 'bg-blue-500 hover:bg-blue-600',
      path:'personal-info'
    },
    {
      id: 'education',
      title: 'Education & Qualifications',
      description: 'Add your educational background and certifications',
      icon: GraduationCap,
      color: 'bg-green-500 hover:bg-green-600',
      path:'education-info'
    },
    {
      id: 'social',
      title: 'Social Links',
      description: 'Connect your social media profiles and websites',
      icon: Share2,
      color: 'bg-purple-500 hover:bg-purple-600',
      path:'social-link'
    },
    {
      id: 'expertise',
      title: 'Skills & Expertise',
      description: 'Showcase your skills, experience, and areas of expertise',
      icon: Award,
      color: 'bg-orange-500 hover:bg-orange-600',
      path:'expertise-info'
    }
  ];

  return (
    <div className="space-y-8">


      {/* Profile Update Sections */}
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Profile Management</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {profileSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Link to={'/setup-profile/'+section.path}
                key={section.id}
                className="group border-2 border-gray-100 hover:border-gray-300 rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => handleSectionUpdate(section.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${section.color} p-3 rounded-xl transition-colors`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {section.description}
                    </p>
                    <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      Update →
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Security & Privacy</h2>
        </div>

        {/* Password Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">Change Password</h3>
          </div>
          
          <div className="grid gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              value={settings.currentPassword}
              onChange={(e) => handleChange('currentPassword', e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              value={settings.newPassword}
              onChange={(e) => handleChange('newPassword', e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              value={settings.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
            />
          </div>
        </div>

        {/* Privacy Toggles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <div>
                <label className="font-medium text-gray-800">Email Notifications</label>
                <p className="text-sm text-gray-600">Receive updates about your account activity</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-600" />
              <div>
                <label className="font-medium text-gray-800">Public Profile</label>
                <p className="text-sm text-gray-600">Make your profile visible to others</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.publicProfile}
                onChange={(e) => handleChange('publicProfile', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Eye className="w-5 h-5 text-gray-600" />
              <div>
                <label className="font-medium text-gray-800">Show Email Publicly</label>
                <p className="text-sm text-gray-600">Display your email address on your profile</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.showEmail}
                onChange={(e) => handleChange('showEmail', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <div>
                <label className="font-medium text-gray-800">Two-Factor Authentication</label>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Save All Changes
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-4">
          <Trash2 className="w-6 h-6 text-red-600" />
          <h3 className="text-2xl font-bold text-red-600">Danger Zone</h3>
        </div>
        <p className="text-red-700 mb-6">
          Once you deactivate your account, there is no going back. Please be certain.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
          Deactivate Account
        </button>
      </div>
    </div>
  );
}

export default Settings;