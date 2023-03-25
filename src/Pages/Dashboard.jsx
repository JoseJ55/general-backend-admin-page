import React from 'react';
import './style.css';

import Usage from '../Components/Usage/Usage';
import DashboardTabs from '../Components/DashboardTabs/DashboardTabs';
import EndpointsUsed from '../Components/EndpointsUsed/EndpointsUsed';
import Users from '../Components/Users/Users';

function Dashboard() {
  return (
    <div id="dashborad">
      <Usage />
      <DashboardTabs />
      <EndpointsUsed />
      <Users />
    </div>
  );
}

export default Dashboard;
