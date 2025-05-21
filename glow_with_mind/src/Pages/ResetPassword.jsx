// // src/pages/ResetPassword.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// import axios from 'axios';

// const ResetPassword = () => {
//   const { token } = useParams(); // gets token from URL
//   const navigate = useNavigate();

//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleReset = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`/auth/reset-password/${token}`, { password });
//       setMessage(res.data.message || "Password reset successful");
//       setTimeout(() => navigate('/login'), 2000); // redirect after 2s
//     } catch (err) {
//       setMessage("Invalid or expired token");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleReset} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

//         <input
//           type="password"
//           placeholder="Enter new password"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
//           Reset Password
//         </button>

//         {message && <p className="text-center mt-4 text-blue-600">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;
