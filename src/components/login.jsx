import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const  LoginPage =() =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    setError('');
    setSuccess('');

    if (!username || !password) {
      setError('Iltimos, barcha maydonlarni to\'ldiring!');
      return;
    }

    if (username === 'user1' && password === 'passwd123!') {
      setSuccess('Muvaffaqiyatli kirdingiz! Xush kelibsiz!');
      navigate('/market');
    } else {
      setError('Login yoki parol noto\'g\'ri!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-50 to-gray-200 justify-center items-center p-10">
        <div className="max-w-md">
          <svg viewBox="0 0 400 300" className="w-full h-auto">
            {/* Desk */}
            <rect x="80" y="200" width="240" height="15" fill="#8B7355" rx="5"/>
            <rect x="90" y="215" width="10" height="80" fill="#6B5345"/>
            <rect x="300" y="215" width="10" height="80" fill="#6B5345"/>
            
            {/* Computer Monitor */}
            <rect x="140" y="140" width="120" height="80" fill="#E8E8E8" rx="5"/>
            <rect x="150" y="150" width="100" height="60" fill="#0D7CFF" rx="3"/>
            <rect x="190" y="220" width="20" height="5" fill="#999"/>
            <circle cx="200" cy="228" r="8" fill="#666"/>
            
            {/* Person */}
            <circle cx="110" cy="160" r="20" fill="#FFD1A0"/>
            <path d="M 110 180 Q 90 200 95 240" stroke="#4A90E2" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M 110 180 Q 130 200 125 240" stroke="#4A90E2" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M 110 190 L 110 220" stroke="#4A90E2" strokeWidth="15" fill="none"/>
            
            {/* Chair */}
            <circle cx="110" cy="245" r="25" fill="#555"/>
            <rect x="105" y="240" width="10" height="40" fill="#666"/>
            
            {/* Decorative elements */}
            <circle cx="50" cy="100" r="15" fill="#E0E0E0" opacity="0.5"/>
            <circle cx="350" cy="120" r="20" fill="#E0E0E0" opacity="0.5"/>
            <circle cx="330" cy="60" r="10" fill="#E0E0E0" opacity="0.5"/>
            
            {/* Books on desk */}
            <rect x="260" y="185" width="15" height="20" fill="#E74C3C"/>
            <rect x="277" y="185" width="15" height="20" fill="#3498DB"/>
            <rect x="294" y="185" width="15" height="20" fill="#2ECC71"/>
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 flex justify-center items-center p-10 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-dashed border-white/30 rounded-full -mb-32 -mr-32"></div>
        
        {/* Login Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hello!</h2>
          <p className="text-gray-600 text-sm mb-8">Sign Up to Get Started</p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <AlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="text-sm">{success}</span>
            </div>
          )}

          {/* Email Input */}
          <div className="mb-5 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-sm"
              autoComplete="username"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors text-sm"
              autoComplete="current-password"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
            Login
          </button>

          {/* Forgot Password */}
          <a
            href="#"
            className="block text-center mt-6 text-gray-600 text-sm hover:text-blue-600 transition-colors"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;