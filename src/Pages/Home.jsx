import React from 'react';
import Header from '../Components/Header/Header';
import SideNav from '../Components/SideNav/SideNav';
import Endpoints from './Endpoints';
import Dashboard from './Dashboard';
import './style.css';

// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { useSelector } from 'react-redux';

function Home() {
  const currentTab = useSelector((state) => state.sidenav.currentTab);

  return (
    <div>
      <Header />
      <div id="home-body">
        <SideNav />
        {currentTab === 'dashboard' ? <Dashboard /> : null}
        {currentTab === 'endpoint' ? <Endpoints /> : null}
      </div>
    </div>
  );
}

export default Home;
