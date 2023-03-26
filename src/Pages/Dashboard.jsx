import React from 'react';
import './style.css';

import Usage from '../Components/Usage/Usage';
import DashboardTabs from '../Components/DashboardTabs/DashboardTabs';
import EndpointsUsed from '../Components/EndpointsUsed/EndpointsUsed';
import Users from '../Components/Users/Users';

function Dashboard() {
  return (
    <div id="dashboard">
      <div id="dashboard-section">
        <div id="dashboard-data">
          <Usage />
          <DashboardTabs />
          <EndpointsUsed />
        </div>

        <div id="dashboard-users">
          <Users />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
