import React from 'react';
import './EndpointsUsed.css';

import PieGraph from '../Charts/PieGraph/PieGraph';

// Shows a pie prgah with the info of what category of the endpoint is used (ie.
// Auth, Users, etc)
function EndpointsUsed() {
  return (
    <div id="endpointused">
      <p id="endpointused-title">Endpoints</p>
      <PieGraph />
    </div>
  );
}

export default EndpointsUsed;
