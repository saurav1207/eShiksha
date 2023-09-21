import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signpic from '../assets/create_acc.svg';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Define isSubmitting state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setRegistrationMessage('Please fill in all the fields.');
      setRegistrationSuccess(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setRegistrationMessage('Invalid email');
      setRegistrationSuccess(false);
      return;
    }

    // Save user data in localStorage
    const userData = {
      name,
      email,
      password,
    };

    try {
      setRegistrationMessage('Registering...');
      setIsSubmitting(true); // Set isSubmitting to true during submission

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setRegistrationSuccess(true);
      setRegistrationMessage('Registration successful. You can now log in.');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', true);
      navigate('/login');
    } catch (error) {
      setRegistrationMessage('Registration failed.');
      setRegistrationSuccess(false);
      console.error('Error during registration:', error);
    } finally {
      setIsSubmitting(false); // Set isSubmitting back to false when done
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-content">
        <div className="signup-container">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {registrationMessage && (
              <div className={registrationSuccess ? 'success-message' : 'error-message'}>
                {registrationMessage}
              </div>
            )}
            <button type="submit" disabled={isSubmitting} className="regis">
              Sign Up
            </button>
          </form>
          <p>
            Already signed up? <Link to="/login">Login here</Link>
          </p>
        </div>

        <div className="signup-img">
          <img src={signpic} alt="Signup illustration" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
