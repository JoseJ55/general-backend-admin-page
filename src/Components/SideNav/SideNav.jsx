import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ImCancelCircle } from 'react-icons/im';
import './SideNav.css';

// Redux
// eslint-disable-next-line import/no-extraneous-dependencies
// import { useDispatch } from 'react-redux';
// import { toggleSideNav } from '../../app/Reducers/SideNavbar';

function SideNav() {
//   const dispatch = useDispatch();
  //   const navToggled = useSelector((state) => state.sidenav.toggled);

  const iconCLicked = () => {
    // dispatch(toggleSideNav)
  };

  return (
    <div id="sideNav">
      <div id="sideNav-closed">
        <RxHamburgerMenu id="sideNav-closed-icon" onClick={() => iconCLicked()} />
      </div>

      <div id="sideNav-open">
        <div id="sideNav-open-icon-area">
          <ImCancelCircle id="sidNav-open-icon" onClick={() => iconCLicked()} />
        </div>

        <div id="sideNav-open-links">
          <input type="button" value="Dashboard" />
          <input type="button" value="endpoints" />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
