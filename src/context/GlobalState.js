import React, { createContext, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  loggedin: localStorage.getItem('isloggedin') ? true : false,
  name: localStorage.getItem('name') || '',
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGGEDIN':
      return { ...state, loggedin: action.payload };
    case 'SET_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleCustomError = (message) => {
    // You can handle custom error messages here
    console.error('Error:', message);
    // For example, you can show a custom error message using an alert
    alert(`Custom Error: ${message}`);
  };

  const loginfunction = async (emailpass) => {
    try {
      const response = await axios.post('/api/login', emailpass);
      dispatch({ type: 'SET_LOGGEDIN', payload: true });
      dispatch({ type: 'SET_name', payload: response.data.name });

      // Save loggedin state and name to local storage
      localStorage.setItem('isloggedin', '1');
      localStorage.setItem('name', response.data.name);

      // Navigate to the desired page
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized error
        handleCustomError('Invalid email or password. Please try again.');
      } else {
        // Other errors
        handleCustomError('Login failed. Please try again.');
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('isloggedin', state.loggedin ? '1' : '');
    localStorage.setItem('name', state.name || '');
  }, [state.loggedin, state.name]);

  return (
    <GlobalContext.Provider
      value={{
        loggedin: state.loggedin,
        loginfunction,
        name: state.name,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
