import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginForm() {
  const navigate = useNavigate();

  const toSignUp = () => {
    navigate('/signup');
  };

  return (
    <div id="login-box">
      <div id="login-box-title">
        <p>Login</p>
      </div>

      <div id="login-box-form">
        <p id="login-box-form-error">error</p>

        <input id="login-box-form-username" className="form-edit" type="text" placeholder="Email or Username" autoComplete="false" />

        <input id="login-box-form-password" className="form-edit" type="password" placeholder="Password" autoComplete="false" />

        <input id="login-box-form-submit" type="button" value="login" />

        <div id="login-box-form-signup">
          <p>Do not have an account? </p>
          <input id="login-box-form-signup-button" type="button" value="Sign Up" onClick={toSignUp} />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
