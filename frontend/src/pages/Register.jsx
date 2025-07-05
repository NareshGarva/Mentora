import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'mentee',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const validate = () => {
    let formErrors = {};

    // Full Name
    if (!formData.name.trim()) {
      formErrors.name = "Please enter your full name";
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = "Please enter your email";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Enter a valid email";
    }

    // Password
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{,}$/;
    if (!formData.password) {
      formErrors.password = "Please enter a password";
    } else if (!passwordPattern.test(formData.password)) {
      formErrors.password = "Password must be 3+ characters with letters & numbers";
    }

    // Confirm Password
    if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      // Reset form if needed
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'mentee',
      });
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='rounded-2xl w-[400px] p-5 bg-white shadow-md'>
        <h1 className='font-bold text-3xl'>Create your account</h1>
        <p className='mt-2 text-sm text-gray-600'>Join our community and start your mentorship journey</p>

        <form onSubmit={handleSubmit} className='mt-6'>
          {/* Full Name */}
          <div className='mb-4'>
            <label htmlFor="name" className='block font-semibold'>Full Name:</label>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 border-2 border-gray-300 rounded-xl mt-1'
              placeholder='Enter your full name'
            />
            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
          </div>

          {/* Email */}
          <div className='mb-4'>
            <label htmlFor="email" className='block font-semibold'>Email:</label>
            <input
              type="email" name='email' value={formData.email} onChange={handleChange}  className='w-full p-2 border-2 border-gray-300 rounded-xl mt-1'  placeholder='Enter your email' />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
          </div>

          {/* Password */}
          <div className='mb-4'>
            <label htmlFor="password" className='block font-semibold'>Set Password:</label>
            <input type="password"  name='password' value={formData.password}  onChange={handleChange}  className='w-full p-2 border-2 border-gray-300 rounded-xl mt-1'  placeholder='Create a password' />
            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className='mb-4'>
            <label htmlFor="confirmPassword" className='block font-semibold'>Confirm Password:</label>
            <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} className='w-full p-2 border-2 border-gray-300 rounded-xl mt-1' placeholder='Re-enter password' />
            {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>}
          </div>

          {/* Role */}
          <div className='mb-4'>
            <label htmlFor="role" className='block font-semibold'>I am:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className='w-full p-2 border-2 border-gray-300 rounded-xl mt-1'
            >
              <option value="mentee">Mentee seeking mentorship</option>
              <option value="mentor">Mentor offering guidance</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className='w-full bg-blue-900 text-white font-semibold p-2 rounded-xl mt-4 hover:bg-blue-800'
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;












 