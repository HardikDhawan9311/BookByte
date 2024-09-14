import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <nav className="relative p-4">
        <div className="container mx-auto flex justify-between items-center mt-4">
          {/* Logo */}
          <div className='h-30 w-40'>
            <img src={Logo} alt="logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-28 items-center text-xl">
            <li className="text-white hover:text-gray-300">
              <a href="/">Home</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="/buypage">Buy</a>
            </li>
            <li className="text-white hover:text-gray-300">
              <a href="/chat">Chat</a>
            </li>
          </ul>

          {/* Sign In and Login Buttons */}
          <div className="flex space-x-4">
            <button 
              className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-yellow-300 hover:text-gray-800"
              onClick={() => setShowLoginForm(false)}
            >
              <a href="/Signup">Sign up</a>
            </button>
            <button 
              className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-yellow-300"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      {showLoginForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="relative bg-white p-12 rounded-lg shadow-2xl max-w-md w-full transition-transform transform hover:scale-105 duration-300">
            {/* Close Button */}
            <button 
              onClick={handleCloseForm} 
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-3xl mb-6 font-semibold text-center text-gray-800">Login</h2>
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium">Email:</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" 
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium">Password:</label>
                <input 
                  type="password" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" 
                />
              </div>
              <button 
                type="submit" 
                className="bg-yellow-300 text-gray-800 w-full py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;