import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginForm() {
  const [error, setError] = useState({
    value: 'N/A',
    status: false,
  });
  const [userInfo, setUserInfo] = useState({
    emailUsername: '',
    password: '',
  });

  const navigate = useNavigate();

  const toSignUp = () => {
    navigate('/signup');
  };

  const checkEmail = () => {
    if (!String(userInfo.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )) {
      return false;
    }
    return true;
  };

  const sendData = () => {
    console.log(userInfo);
  };

  return (
    <div id="login-box">
      <div id="login-box-title">
        <p>Login</p>
      </div>

      <div id="login-box-form">
        <p id="login-box-form-error" style={{ visibility: error.status ? 'visible' : 'hidden' }}>{error.value}</p>

        <input
          id="login-box-form-username"
          className="form-edit"
          type="text"
          placeholder="Email or Username"
          autoComplete="false"
          value={userInfo.emailUsername}
          onChange={(e) => setUserInfo({ ...userInfo, emailUsername: e.target.value })}
        />

        <input
          id="login-box-form-password"
          className="form-edit"
          type="password"
          placeholder="Password"
          autoComplete="false"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        />

        <input
          id="login-box-form-submit"
          type="button"
          value="login"
          onClick={sendData}
        />

        <div id="login-box-form-signup">
          <p>Do not have an account? </p>
          <input id="login-box-form-signup-button" type="button" value="Sign Up" onClick={toSignUp} />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
