import React from 'react';
import './DashboardTabs.css';

import UsedTodayTab from '../UsedTodayTab/UsedTodayTab';
import MostUsedTab from '../MostUsedTab/MostUsedTab';

// Holds the tabs of info for the endpoints
function DashboardTabs() {
  return (
    <div id="dashboardtab">
      <UsedTodayTab />
      <MostUsedTab />
    </div>
  );
}

export default DashboardTabs;
