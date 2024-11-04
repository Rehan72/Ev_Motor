import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../hooks/UseAuth';
import './Login.css';

function LoginPage() {
  const {login, isAuthenticated, loading, error} = useAuth();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleChange = e => {
    const {name, value} = e.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = inputValues;
    login(email, password);
  };

  const handleWindowLoad = useCallback(() => {
    console.log('I am rendering...');
  }, []);

  useEffect(() => {
    window.addEventListener('load', handleWindowLoad);

    if (isAuthenticated) {
      navigate('/dashboard'); // Navigate to the desired route
    }
    return () => {
      // window.removeEventListener("load", handleWindowLoad);
    };
  }, [isAuthenticated, navigate, handleWindowLoad]);

  useEffect(() => {
    const handleInputChange = event => {
      console.log('Direct event listener:', event.target.value);
    };

    const emailElement = emailRef.current;
    const passwordElement = passwordRef.current;
    emailElement.addEventListener('change', handleInputChange);
    passwordElement.addEventListener('change', handleInputChange);

    // Cleanup to remove the event listener
    return () => {
      emailElement.removeEventListener('change', handleInputChange);
      passwordElement.removeEventListener('change', handleInputChange);
    };
  }, []);

  return (
    <div className="login-card">
      <h2>Welcome!</h2>
      <p>Sign in to continue.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={inputValues.email}
            onChange={handleChange}
            ref={emailRef}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={inputValues.password}
            onChange={handleChange}
            ref={passwordRef}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
