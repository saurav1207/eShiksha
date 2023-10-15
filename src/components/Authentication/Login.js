import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Authentication/Login.css';
import loginpic from './img/loginn.svg';

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to clear the error message after a timeout
  const clearError = () => {
    setError('');
  };

  useEffect(() => {
    let errorTimeout;

    if (error) {
      errorTimeout = setTimeout(clearError, 2000);
    }

    return () => {
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
    };
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email.trim() !== '' && password.trim() !== '') {
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Invalid email');
      } else {
        setIsSubmitting(true);

        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));

        // Check if the entered email and password match the stored user data
        if (userData && email === userData.email && password === userData.password) {
          setIsSubmitting(false);

          // Show success message
          setSuccess('Login successful!');

          // Store the authentication status in localStorage
          localStorage.setItem('isLoggedIn', true);

          // Navigate to the home page
          navigate('/');

        } else {
          setIsSubmitting(false);

          setError('Login failed. Please try again.');
          
        }
      }
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <section className='login-section'>
      <div className="login-content">
        <div className="login-img">
          <img src={loginpic} alt="Login illustration" />
        </div>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <button type="submit" disabled={isSubmitting} className="login-button">
              Login
            </button>

          </form>
          <p>
            Not logged in? <Link to="/signin">Sign up here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
