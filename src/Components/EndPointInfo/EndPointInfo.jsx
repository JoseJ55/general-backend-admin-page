import React from 'react';
import './EndPointInfo.css';

import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function EndPointInfo() {
  const activeEndpoint = useSelector((state) => state.endpoints.activeEndpoint);

  return (
    <div id="endpointinfo">{JSON.stringify(activeEndpoint)}</div>
  );
}

export default EndPointInfo;
