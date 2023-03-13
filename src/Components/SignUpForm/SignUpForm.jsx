import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function SignUpForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    status: 'weak',
    color: 'red',
  });
  const [error, setError] = useState({
    value: 'N/A',
    status: false,
    current: '',
  });
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Checks the email entered and sees if it is valid.
  const checkEmail = () => {
    if (!String(userInfo.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )) {
      setError({
        ...error, value: 'Invalid Email', status: true, current: 'email',
      });
    } else {
      setError({
        ...error, value: 'N/A', status: false, current: '',
      });
    }
  };

  // Checks the password and sees if it is valid.
  const checkPassword = () => {
    if (!String(userInfo.password).match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
      if (userInfo.password.length < 6) {
        setError({
          ...error, value: 'Password needs 7 or more characters', status: true, current: 'password',
        });
      } else {
        setError({
          ...error, value: 'Password needs uppercase, digit, and special character', status: true, current: 'password',
        });
      }
    } else {
      setError({
        ...error, value: 'N/A', status: false, current: '',
      });
    }
  };

  // Check if bot passwords are the same.
  const checkConfirmPassword = () => {
    if (userInfo.password !== userInfo.confirmPassword) {
      setError({
        ...error, value: 'Password do not match', status: true, current: 'password',
      });
    } else {
      setError({
        ...error, value: 'N/A', status: false, current: '',
      });
    }
  };

  // Takes user to the login page.
  const toLogin = () => {
    navigate('/login');
  };

  // Sends the data to the backend to register the user.
  const sendData = () => {
    checkEmail();
    checkPassword();
    checkConfirmPassword();
  };

  // This useEffect is here to check if there is an error.
  useEffect(() => {
    if (error.value !== 'N/A') {
      setError({ ...error, status: true });
    } else {
      setError({ ...error, status: false });
    }
  }, [error.value]);

  // This useEffect checks the strength or the password.
  useEffect(() => {
    if (userInfo.password.match(/[a-z]+/) && userInfo.password.match(/[A-Z]+/) && userInfo.password.match(/[0-9]+/) && userInfo.password.match(/[$@#%!]+/) && userInfo.password.length > 8) {
      setPasswordStrength({ ...passwordStrength, status: 'Strong', color: 'green' });
    } else if (userInfo.password.match(/[a-z]+/) && userInfo.password.match(/[A-Z]+/) && userInfo.password.match(/[0-9]+/) && userInfo.password.length > 6) {
      setPasswordStrength({ ...passwordStrength, status: 'Good', color: 'yellow' });
    } else if (userInfo.password.match(/[a-z]+/) && userInfo.password.match(/[A-Z]+/) && userInfo.password.match(/[0-9]+/)) {
      setPasswordStrength({ ...passwordStrength, status: 'Fine', color: 'orange' });
    } else {
      setPasswordStrength({ ...passwordStrength, status: 'Weak', color: 'red' });
    }
  }, [userInfo.password]);

  return (
    <div id="signup-box">
      <div id="signup-box-title">
        <p>Sign Up</p>
      </div>

      <div id="signup-box-form">
        <p id="signup-box-form-error" style={{ visibility: error.status ? 'visible' : 'hidden' }}>{error.value}</p>

        <input
          className="form-edit"
          id="signup-box-form-email"
          type="text"
          placeholder="Email"
          autoComplete="false"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          style={{ borderBlockColor: error.current === 'email' ? 'red' : 'black' }}
        />

        <input
          className="form-edit"
          id="signup-box-form-username"
          type="text"
          placeholder="Username"
          autoComplete="false"
          value={userInfo.username}
          onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
          style={{ borderBlockColor: error.current === 'username' ? 'red' : 'black' }}
        />

        <input
          className="form-edit"
          id="signup-box-form-password"
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          autoComplete="false"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          style={{ borderBlockColor: error.current === 'password' ? 'red' : 'black' }}
        />

        <input
          className="form-edit"
          id="signup-box-form-confirm"
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          autoComplete="false"
          value={userInfo.confirmPassword}
          onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
          style={{ borderBlockColor: error.current === 'password' ? 'red' : 'black' }}
        />

        <div id="signup-box-form-passwordInfo">
          <div id="signup-box-form-passwordInfo-strength" style={{ visibility: userInfo.password.length > 0 ? 'visible' : 'hidden' }}>
            <p id="signup-box-form-passwordInfo-strength-normal">Strength: </p>
            <p id="signup-box-form-passwordInfo-strength-status" style={{ color: passwordStrength.color }}>{passwordStrength.status}</p>
          </div>

          <div id="signup-box-form-passwordInfo-show">
            <p id="signup-box-form-passwordInfo-show-text">View Password</p>
            <input id="signup-box-form-passwordInfo-show" type="checkbox" onClick={(e) => setShowPassword(e.currentTarget.checked)} />
          </div>
        </div>

        <input id="signup-box-form-submit-button" type="button" value="Sign Up" onClick={sendData} />

        <div id="signup-box-form-login">
          <p>Already have an account? </p>
          <input id="signup-box-form-login-button" type="button" value="Log In" onClick={toLogin} />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
