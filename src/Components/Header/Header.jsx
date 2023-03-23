import React from 'react';
import './style.css';
import ProfileTab from '../ProfileTab/ProfileTab';

function Header() {
  const onImageClick = () => {
    console.log('clicked');
  };

  return (
    <div id="header">
      <p id="header-title">Admin Page</p>
      <div id="header-user">
        <p id="header-user-username">Username</p>
        <img
          id="header-user-image"
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="default profile"
          onClick={onImageClick}
          role="presentation"
        />

        <div id="header-user-tab">
          <ProfileTab />
        </div>
      </div>
    </div>
  );
}

export default Header;
