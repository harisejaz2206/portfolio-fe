import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const SoleAdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleForgotPassword = () => {
    // Implement your "Forgot Password" functionality here
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-2xl">
        <div className="mb-8 text-center">
          <img
            src="/loyalty point coin 1.png" 
            alt="Your Brand Logo"
            className="mx-auto h-20"
          />
          <p className="text-red-600">Welcome Sole-Chain Admin!</p>
          <h2 className="text-3xl font-semibold text-gray-800">Log in to Your Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:border-red-800"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:border-red-800"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? < FaEye className='text-red-600 mr-3' /> : <FaEyeSlash className='text-gray-600 mr-3'/>}
              </span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 text-red-800"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" className="text-gray-600">Remember me</label>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-red-800 hover:underline"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SoleAdminLogin;
