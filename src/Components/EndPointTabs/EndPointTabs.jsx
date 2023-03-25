import React from 'react';
import EndPointTab from '../EndPointTab/EndPointTab';
import './EndPointTabs.css';

// eslint-disable-next-line react/prop-types
function EndPointTabs() {
  const dummyData = [
    {
      endpoint_id: 1,
      endpoint_name: '/first',
      type: 'GET',
      description: 'A basic endpoint to get data and view what things are.',
      arguments: ['id'],
      token: null,
      body: '{}',
      results: {
        success: {
          status: 200,
          returns: '{}',
        },
        errors: [
          {
            status: 403,
            returns: '{ error: Forbidden, user does not have access }',
          },
        ],
      },
    },
    {
      endpoint_id: 2,
      endpoint_name: '/first',
      type: 'POST',
      description: 'A basic endpoint to make data and view the results.',
      arguments: [],
      token: null,
      body: '{ context: sending data }',
      results: {
        success: {
          status: 200,
          returns: '{ message: Added data }',
        },
        errors: [
          {
            status: 403,
            returns: '{ error: Forbidden, user does not have access }',
          },
        ],
      },
    },
  ];

  return (
    <div id="endpointtabs">
      {/* eslint-disable-next-line react/prop-types */}
      { dummyData.map((item) => (
        <EndPointTab data={item} key={item.endpoint_id} />
      ))}
    </div>
  );
}

export default EndPointTabs;
