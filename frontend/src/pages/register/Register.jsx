import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Loading from '../../components/Loading';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Mentee',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  //form validation
  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = "Please enter your full name";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = "Please enter your email";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Enter a valid email";
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!formData.password) {
      formErrors.password = "Please enter a password";
    } else if (!passwordPattern.test(formData.password)) {
      formErrors.password = "Password must be 3+ characters with letters & numbers";
    }

    if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    return formErrors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
      // const submitBtn = document.getElementById('submitBtn');
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
      setLoading(true);
      // submitBtn.disabled = true;
      const response = await axios.post('http://localhost:3000/api/auth/create-user', formData);
      // submitBtn.disabled = false;
        alert(response.data.message);
        formData.role==="Mentor"?navigate("/setup-profile"):""

    } catch (error) {
      console.error(`Error in sending data: ${error}`);
    } finally{
      setLoading(false);
    }
    
  }
};


  return (
    <section className="w-full min-h-screen flex items-center justify-center py-10 bg-gradient-to-tr from-secondary-300 via-yellow-100 to-tertiary-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md px-6 py-8 mx-4  ">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Join our community and start your mentorship journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs text-gray-700 mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xs text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Create a password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-xs text-gray-700 mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Re-enter your password"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="bloblack text-gray-700 mb-1 font-medium">
              I am
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="Mentee">Mentee seeking mentorship</option>
              <option value="Mentor">Mentor offering guidance</option>
            </select>
          </div>

          {/* Submit */}
          <button id="submitBtn" 
            type="submit"
            className="w-full py-2 mt-4 bg-black hover:bg-black/90 text-white font-semibold cursor-pointer rounded-md transition"
          >
            {isLoading?<Loading/>:'Create Account'}

          </button>
          
        </form>
        <div className="mt-3 flex items-center justify-center gap-1 text-sm bg-gray-50/30 border border-gray-300 py-2 rounded-md">
          <p>Already have an account? </p>

          <NavLink to="/login" className="text-blue-600 font-medium hover:underline">
             login
          </NavLink>

        </div>
      </div>
    </section>
  );
}

export default Register;
