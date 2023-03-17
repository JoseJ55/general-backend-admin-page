import React from 'react';
import EndPointTabs from '../Components/EndPointTabs/EndPointTabs';
import EndPointInfo from '../Components/EndPointInfo/EndPointInfo';
import './style.css';

function Endpoints() {
  return (
    <div id="endpoints">
      <EndPointTabs />
      <EndPointInfo />
    </div>
  );
}

export default Endpoints;
