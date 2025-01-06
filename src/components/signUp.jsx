import React, { useState } from 'react';
import Navbar from '../nav';
import axios from 'axios';

const SignupForm = () => {
  var response
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [isLoginState, setisLoginState] = useState(false);

  const validateName = (name) => /^[A-Za-z]+$/.test(name); // Only letters allowed
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate first name
    if (!formData.firstName) {
      setError('**First name is required.**');
      return;
    } else if (!validateName(formData.firstName)) {
      setError('**First name must contain only letters.**');
      return;
    }

    // Validate last name
    if (!formData.lastName) {
      setError('**Last name is required.**');
      return;
    } else if (!validateName(formData.lastName)) {
      setError('**Last name must contain only letters.**');
      return;
    }

    // Validate email
    if (!formData.email) {
      setError('**Email is required.**');
      return;
    } else if (!validateEmail(formData.email)) {
      setError('**Please enter a valid email address.**');
      return;
    }

    try {
      setisLoginState(true);
        response = await axios.post('https://nxtpie-landing-server.vercel.app/signup', formData);
 
      // Send form data to the server


      // Handle success (e.g., show a success message or redirect)
    if(response.status===200){
      // Reset form
      setFormData({ firstName: '', lastName: '', email: '' });
      setError('');
      setisLoginState(false);

    }else{
      setError(`**${response.data}**`);
      setisLoginState(false);

    }

    } catch (error) {
      setError(`**${response.data}**`);
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
        <h2 className="text-2xl font-bold font-heading text-[#7456F1] text-center mb-2">
          Join Us
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 text-sm font-heading text-center">
            {error}
          </div>
        )}

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
            className="w-full px-3 py-1 border border-gray-700 bg-inherit rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#7456F1]"
            placeholder="Enter your first name"
          />
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
            className="w-full px-3 py-1 border border-gray-700 bg-inherit rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#7456F1]"
            placeholder="Enter your last name"
          />
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
            className="w-full px-3 py-1 border border-gray-700 bg-inherit rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#7456F1]"
            placeholder="Enter your email"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-[#7456F1] text-[5vw] lg:text-[1.5vw] font-postnobills text-white py-1 px-2 rounded-md ${
            isLoginState ? ' cursor-not-allowed bg-gray-400' : ''
          }`}
          disabled={isLoginState}
        >
          {isLoginState ? 'Please wait' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
