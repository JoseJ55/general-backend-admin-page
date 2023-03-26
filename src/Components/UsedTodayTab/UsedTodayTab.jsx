import React, { useState, useEffect } from 'react';
import './UsedTodayTab.css';

// Shows how many people used the endpoints today.
function UsedTodayTab() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div id="usedtodaytab" style={{ transform: loading ? 'translateY(40%)' : 'translateY(0%)', opacity: loading ? 0 : 1 }}>
      <p id="usedtodaytab-title">Amount of users who called an endpoint today</p>
      <p id="usedtodaytab-content">10</p>
    </div>
  );
}

export default UsedTodayTab;
