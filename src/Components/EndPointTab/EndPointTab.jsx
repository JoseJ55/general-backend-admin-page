/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './EndPointTab.css';

import { changeActiveEndpoint } from '../../app/Reducers/Endpoints';
// eslint-disable-next-line import/order
import { useDispatch, useSelector } from 'react-redux';

function EndPointTab({ data }) {
  const [active, setActive] = useState(false);
  const [tabBackgroundColor, setTabBackgroundColor] = useState('--request-get');
  const [tabBorderColor, setTabBorderColor] = useState('--secondary-text-color');

  const dispatch = useDispatch();

  const activeEndpoint = useSelector((state) => state.endpoints.activeEndpoint);

  // Checks the type and changes the background color accordingly.
  const checkBackground = () => {
    if (data.type === 'POST') {
      setTabBackgroundColor('--request-post');
    } else if (data.type === 'PATCH') {
      setTabBackgroundColor('--request-patch');
    } else if (data.type === 'DELETE') {
      setTabBackgroundColor('--request-delete');
    } else {
      setTabBackgroundColor('--request-get');
    }
  };

  // Changes the tabs clicked to active while also resetting any other active tab.
  const toActive = () => {
    if (active) {
      setTabBorderColor('--secondary-text-color');
      checkBackground();
      setActive(false);
      if (data.endpoint_id === activeEndpoint.endpoint_id) {
        dispatch(changeActiveEndpoint({}));
      }
    } else {
      setTabBorderColor(tabBackgroundColor);
      setTabBackgroundColor('--main-text-color');
      setActive(true);
      dispatch(changeActiveEndpoint(data));
    }
  };

  // Checks if the active tabs is the current one rendered and if not then resets.
  useEffect(() => {
    if (data.endpoint_id !== activeEndpoint.endpoint_id) {
      setActive(false);
      setTabBorderColor('--secondary-text-color');
      checkBackground();
    }
  }, [activeEndpoint]);

  useEffect(() => {
    // if (data.endpoint_id !== activeEndpoint.endpoint_id) setActive(true);
    checkBackground();
  }, []);

  return (
    <div
      id="endpointtab"
      onClick={() => toActive()}
      role="presentation"
      style={{ backgroundColor: `var(${tabBackgroundColor})`, borderColor: `var(${tabBorderColor})` }}
    >
      <p id="endpointtab-name">{data.endpoint_name}</p>
      <p id="endpointtab-type" style={{ color: active ? `var(${tabBorderColor})` : 'black' }}>{data.type}</p>
    </div>
  );
}

export default EndPointTab;
