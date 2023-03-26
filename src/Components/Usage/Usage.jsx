import React from 'react';
import './Usage.css';

import LineGraph from '../Charts/UsageLine/UsageLine';

// Shows a line graph taht shows the usage of the endpoints
function Usage() {
  return (
    <div id="usage">
      <div id="usage-graph">
        <LineGraph />
      </div>

      <div id="usage-filters">
        <input type="button" value="24h" className="usage-filters-buttons" />
        <input type="button" value="3d" className="usage-filters-buttons" />
        <input type="button" value="7d" className="usage-filters-buttons" />
        {/* <input type="button" value="24h" /> */}
      </div>
    </div>
  );
}

export default Usage;
