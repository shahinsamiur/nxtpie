import React, { useRef, useState } from 'react';
import Navbar from '../nav';
import axios from 'axios';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isLoginState,setisLoginState]=useState(false)


  const validateName = (name) => /^[A-Za-z]+$/.test(name); // Only letters allowed
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Validate first name
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required.';
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'First name must contain only letters.';
    }
  
    // Validate last name
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required.';
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Last name must contain only letters.';
    }
  
    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update errors if validation fails
      return;
    }
  
    try {

      setisLoginState(true)
      // Send form data to the server
      const response = await axios.post('http://localhost:5000/signup', formData);
  
      // Handle success (e.g., show a success message or redirect)
      console.log('Server Response:', response.data);
  
      // Reset form
      setFormData({ firstName: '', lastName: '', email: '' });
      setErrors({});
      setisLoginState(false)
    } catch (error) {
      // Handle error (e.g., server issues or validation errors from the backend)
      console.error('Error submitting form:', error.response?.data || error.message);
    }
  };
  

  return (
    <div className="flex flex-col gap-[20vh] lg:gap-[15vh] items-center min-h-screen bg-[#000101]">
      <div className="w-full">
        <Navbar />
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:bg-[#121212] shadow-md font-body_font rounded px-8 py-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold font-heading text-[#7456F1] text-center mb-6">
          Join Us
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2 font-heading"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-3 py-1 border ${
              errors.firstName ? 'border-red-500' : 'border-gray-700'
            } bg-inherit rounded-md text-gray-700 focus:outline-none focus:ring-2 ${
              errors.firstName ? 'focus:ring-red-500' : 'focus:ring-[#7456F1]'
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2 font-heading"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-3 py-1 border ${
              errors.lastName ? 'border-red-500' : 'border-gray-700'
            } bg-inherit rounded-md text-gray-700 focus:outline-none focus:ring-2 ${
              errors.lastName ? 'focus:ring-red-500' : 'focus:ring-[#7456F1]'
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-1 border ${
              errors.email ? 'border-red-500' : 'border-gray-700'
            } bg-inherit rounded-md text-gray-700 focus:outline-none focus:ring-2 ${
              errors.email ? 'focus:ring-red-500' : 'focus:ring-[#7456F1]'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Submit Button */}

        {isLoginState?   <button
          type="submit"
          className="w-full bg-[#7456F1] text-[5vw] lg:text-[1.5vw] font-postnobills text-white py-1 px-2 rounded-md"
        >
          
          Please wait
        </button>:<button
          type="submit"
          className="w-full bg-[#7456F1] text-[5vw] lg:text-[1.5vw] font-postnobills text-white py-1 px-2 rounded-md"
        >
          
          Sign Up
        </button>}
  
      </form>
    </div>
  );
};

export default SignupForm;
