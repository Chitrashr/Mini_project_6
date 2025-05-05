import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = loginUser(username, phone);
    if (success) {
      navigate('/courses');
    } else {
      alert('User not found. Please check your name and phone number.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block mb-4">
          <span className="text-gray-300">Name</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-300">Phone Number</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md"
          />
        </label>

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
