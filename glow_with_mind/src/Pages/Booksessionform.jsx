import React, { useState } from 'react';
import axios from 'axios';

const BookSessionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    problem: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await axios.post(`http://localhost:3000/api/auth/booking`, formData);
      
      if (response.status === 200) {
        alert("Session Booked Successfully!");
        setFormData({
          name: '',
          email: '',
          mobile: '',
          problem: '',
        });
      }
    } catch (error) {
      console.error('Error booking session:', error);
      alert('There was an error booking your session. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#3d405b]">Book Your Session</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} className="w-full border p-2 rounded" required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} className="w-full border p-2 rounded" required />
        <input type="tel" name="mobile" placeholder="Your Mobile Number" onChange={handleChange} value={formData.mobile} className="w-full border p-2 rounded" required />
        <textarea name="problem" placeholder="Write your concern..." rows="4" onChange={handleChange} value={formData.problem} className="w-full border p-2 rounded" required></textarea>
        
        <button type="submit" className="bg-[#81b29a] text-white w-full py-2 rounded hover:bg-[#6a8f8d] transition">
          Book Session
        </button>
      </form>
    </div>
  );
};

export default BookSessionForm;
