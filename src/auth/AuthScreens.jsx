import React, { useState } from 'react';
import './AuthScreens.css';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Camera } from 'lucide-react';

const AuthScreens = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentScreen === 'login') {
      console.log('Login attempt:', { email: formData.email, password: formData.password });
    } else {
      console.log('Signup attempt:', formData);
    }
  };

  const toggleScreen = () => {
    setCurrentScreen(currentScreen === 'login' ? 'signup' : 'login');
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });
  };

  return (
    <div className="auth-container">
      {/* Background */}
      <div className="auth-background-grid">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="auth-background-cell">
            <img
              src={`https://randomuser.me/api/portraits/${Math.random() < 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`}
              alt=""
              className="auth-background-img"
            />
          </div>
        ))}
        <div className="auth-background-overlay"></div>
      </div>

      {/* Content */}
      <div className="auth-content-wrapper">
        <div className="auth-form-container">
          <div className="auth-header">
            <div className="auth-logo">
              <Camera size={32} className="auth-logo-icon" />
              <span className="auth-logo-text">PhotoGallery</span>
            </div>
            <h1 className="auth-title">
              {currentScreen === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="auth-subtitle">
              {currentScreen === 'login'
                ? 'Sign in to access your photo gallery'
                : 'Join us to organize and share your photos'}
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {currentScreen === 'signup' && (
              <div className="auth-name-fields">
                {['firstName', 'lastName'].map((name, idx) => (
                  <div className="auth-input-wrapper" key={name}>
                    <User className="auth-input-icon" size={20} />
                    <input
                      type="text"
                      name={name}
                      placeholder={name === 'firstName' ? 'First Name' : 'Last Name'}
                      value={formData[name]}
                      onChange={handleInputChange}
                      className="auth-input"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="auth-input-wrapper">
              <Mail className="auth-input-icon" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="auth-input"
              />
            </div>

            <div className="auth-input-wrapper">
              <Lock className="auth-input-icon" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="auth-input password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="auth-toggle-button">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {currentScreen === 'signup' && (
              <div className="auth-input-wrapper">
                <Lock className="auth-input-icon" size={20} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="auth-input password"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="auth-toggle-button">
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            )}

            <button type="submit" className="auth-submit-button">
              {currentScreen === 'login' ? 'Sign In' : 'Sign Up'} <ArrowRight size={18} />
            </button>

            <div className="auth-toggle-screen">
              <span>
                {currentScreen === 'login' ? "Don't have an account?" : "Already have an account?"}
              </span>
              <button type="button" onClick={toggleScreen} className="auth-switch-button">
                {currentScreen === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="auth-footer">
            <p>© {new Date().getFullYear()} PhotoGallery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreens;
