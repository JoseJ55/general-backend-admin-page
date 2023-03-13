import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function SignUpForm() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate('/login');
  };

  return (
    <div id="signup-box">
      <div id="signup-box-title">
        <p>Sign Up</p>
      </div>

      <div id="signup-box-form">
        <p id="signup-box-form-error">error</p>

        <input className="form-edit" id="signup-box-form-email" type="text" placeholder="Email" autoComplete="false" />

        <input className="form-edit" id="signup-box-form-username" type="text" placeholder="Username" autoComplete="false" />

        <input className="form-edit" id="signup-box-form-password" type="password" placeholder="Password" autoComplete="false" />

        <input className="form-edit" id="signup-box-form-confirm" type="password" placeholder="Confirm Password" autoComplete="false" />

        <div id="signup-box-form-passwordInfo">
          <div id="signup-box-form-passwordInfo-strength">
            <p id="signup-box-form-passwordInfo-strength-normal">Strength: </p>
            <p id="signup-box-form-passwordInfo-strength-status">Weak</p>
          </div>

          <div id="signup-box-form-passwordInfo-show">
            <p id="signup-box-form-passwordInfo-show-text">View Password</p>
            <input id="signup-box-form-passwordInfo-show" type="checkbox" />
          </div>
        </div>

        <input id="signup-box-form-submit-button" type="button" value="Sign Up" />

        <div id="signup-box-form-login">
          <p>Already have an account? </p>
          <input id="signup-box-form-login-button" type="button" value="Log In" onClick={toLogin} />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
