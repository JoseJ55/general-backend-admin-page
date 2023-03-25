/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './EndPointInfo.css';
import { useSelector } from 'react-redux';
import waiting from '../../assets/undraw_on_the_office_re_cxds.svg';

// eslint-disable-next-line react/prop-types
function EndPointInfo() {
  const [typeColor, setTypeColor] = useState('--request-get');

  const activeEndpoint = useSelector((state) => state.endpoints.activeEndpoint);
  // console.log(activeEndpoint);

  const checkBackground = () => {
    if (activeEndpoint.type === 'POST') {
      setTypeColor('--request-post');
    } else if (activeEndpoint.type === 'PATCH') {
      setTypeColor('--request-patch');
    } else if (activeEndpoint.type === 'DELETE') {
      setTypeColor('--request-delete');
    } else {
      setTypeColor('--request-get');
    }
  };

  useEffect(() => {
    checkBackground();

    return () => {
      setTypeColor('--request-get');
    };
  }, []);

  useEffect(() => {
    checkBackground();
  }, [activeEndpoint]);

  if (JSON.stringify(activeEndpoint) === '{}') {
    return (
      <div id="endpointinfo">
        <img src={waiting} alt="person waiting" id="endpointinfo-emptyImage" />
        <p id="endpointinfo-emptyText">Click on an endpoint to see the info.</p>
      </div>
    );
  }

  return (
    <div id="endpointinfo">
      <div id="endpointinfo-header">
        <p id="endpointinfo-header-name">{activeEndpoint.endpoint_name}</p>
        <p id="endpointinfo-header-type" style={{ color: `var(${typeColor})` }}>{activeEndpoint.type}</p>
      </div>

      <div id="endpointinfo-desc">
        <p>{activeEndpoint.description}</p>
      </div>

      <div id="endpointinfo-requirements">
        <p id="endpointinfo-requirements-header" className="section-header">Requirements</p>
        <div id="endpointinfo-requirements-arguments">
          <p className="section-subheader">Arguments: </p>
          {activeEndpoint.arguments.length > 0
            ? activeEndpoint.arguments.map((arg) => (
              <p className="section-subheader">
                {arg}
                ,
              </p>
            ))
            : <p className="section-subheader">null</p>}
        </div>
        <div id="endpointinfo-requirements-tokens">
          <p className="section-subheader">
            Tokens:
            {' '}
            {activeEndpoint.token ? activeEndpoint.token : 'null'}
          </p>
        </div>
      </div>

      <div id="endpointinfo-request">
        <p id="endpointinfo-request-header" className="section-header">Requests</p>
        <div id="endpointinfo-request-body">
          <p className="section-subheader">Body: </p>
          <code className="code-body" id="request-code-body">{activeEndpoint.body}</code>
        </div>
      </div>

      <div id="endpointinfo-responses">
        <p id="endpointinfo-responses-header" className="section-header">Responses</p>
        <div id="endpointinfo-responses-two">
          <p className="section-subheader">200: </p>
          <code className="code-body">{activeEndpoint.results.success.returns}</code>
        </div>
        <div id="endpointinfo-responses-four">
          <p className="section-subheader">403: </p>
          <code className="code-body">{activeEndpoint.results.errors[0].returns}</code>
        </div>
      </div>
    </div>
  );
}

export default EndPointInfo;
