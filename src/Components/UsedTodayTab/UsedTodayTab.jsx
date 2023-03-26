import React from 'react';
import './UsedTodayTab.css';

// Shows how many people used the endpoints today.
function UsedTodayTab() {
  return (
    <div id="usedtodaytab">
      <p id="usedtodaytab-title">Amount of users who called an endpoint today</p>
      <p id="usedtodaytab-content">10</p>
    </div>
  );
}

export default UsedTodayTab;
