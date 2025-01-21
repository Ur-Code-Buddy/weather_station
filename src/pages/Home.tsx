import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    const { username, password } = credentials;
    if (username === 'admin' && password === 'dataadmin') {
      localStorage.setItem('authToken', 'authenticated');
      setIsLoggedIn(true);
      alert('Login successful!');
      navigate('/data');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="text-center max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Welcome to the Weather Station</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your one-stop solution for monitoring and managing weather data effectively.
        </p>
        {!isLoggedIn ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition-all w-full"
            >
              Log In
            </button>
          </div>
        ) : (
          <>
            <p className="text-md text-gray-600 mb-6">
              Use the navigation bar to explore data or manage settings via the admin panel.
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-red-700 transition-all"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
