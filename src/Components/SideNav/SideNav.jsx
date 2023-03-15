import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ImCancelCircle } from 'react-icons/im';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineApi } from 'react-icons/ai';
import './SideNav.css';

// Redux
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideNav, changeTab } from '../../app/Reducers/SideNavbar';

function SideNav() {
  const navToggled = useSelector((state) => state.sidenav.toggled);
  const dispatch = useDispatch();

  const iconCLicked = () => {
    dispatch(toggleSideNav());
  };

  const navigateTo = (location) => {
    dispatch(changeTab(location));
  };

  return (
    <div id="sideNav" style={{ minWidth: !navToggled ? '15%' : '5%', transform: !navToggled ? 'translateX(0)' : 'translateX(-5%)' }}>
      <div
        id="sideNav-closed"
        style={{ display: !navToggled ? 'none' : 'flex' }}
      >
        <div id="sideNav-closed-icon-area">
          <RxHamburgerMenu id="sideNav-closed-icon" onClick={() => iconCLicked()} style={{ animation: !navToggled ? 'fadeOut 1s ease-in-out' : 'fadeIn 1s ease-in-out' }} />
        </div>

        <div id="sideNav-closed-links">
          <div className="sideNav-closed-link" onClick={() => navigateTo('dashboard')} role="presentation">
            <MdOutlineSpaceDashboard
              className="closed-link-icon"
              style={{ animation: !navToggled ? 'fadeOut 1s ease-in-out' : 'fadeIn 1s ease-in-out' }}
            />
          </div>
          <div className="sideNav-closed-link" onClick={() => navigateTo('endpoint')} role="presentation">
            <AiOutlineApi
              className="closed-link-icon"
              style={{ animation: !navToggled ? 'fadeOut 1s ease-in-out' : 'fadeIn 1s ease-in-out' }}
            />
          </div>
        </div>
      </div>

      <div
        id="sideNav-open"
        style={{ display: navToggled ? 'none' : 'flex' }}
      >
        <div id="sideNav-open-icon-area">
          <ImCancelCircle id="sidNav-open-icon" onClick={() => iconCLicked()} style={{ animation: !navToggled ? 'fadeIn 1s ease-in-out' : 'fadeOut 1s ease-in-out' }} />
        </div>

        <div id="sideNav-open-links">
          <div className="sideNav-open-link" onClick={() => navigateTo('dashboard')} role="presentation">
            <MdOutlineSpaceDashboard className="link-icon" />
            <p style={{ animation: !navToggled ? 'fadeIn 1s ease-in-out' : 'fadeOut 1s ease-in-out' }}>Dashboard</p>
          </div>

          <div className="sideNav-open-link" onClick={() => navigateTo('endpoint')} role="presentation">
            <AiOutlineApi className="link-icon" />
            <p style={{ animation: !navToggled ? 'fadeIn 1s ease-in-out' : 'fadeOut 1s ease-in-out' }}>Endpoint</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
