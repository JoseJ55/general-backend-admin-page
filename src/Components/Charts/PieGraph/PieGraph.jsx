import React from 'react';
// import './PieGraph.css';

// eslint-disable-next-line import/no-extraneous-dependencies
// import 'chartjs-adapter-date-fns';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Doughnut } from 'react-chartjs-2';

// Makes a Line graph
function PieGraph() {
  const state = {
    labels: [
      'Address',
      'Categories',
      'Customers',
      'Employees',
      'Manufactures',
      'Merchants',
      'Partnerships',
      'Products',
      'Users',
    ],
    datasets: [
      {
        label: 'Endpoints',
        data: [645, 364, 456, 457, 345, 435, 453, 656, 567],
        backgroundColor: [
          'rgb(231, 123, 118)',
          'rgb(249, 213, 152)',
          'rgb(138, 231, 132)',
          'rgb(137, 234, 194)',
          'rgb(137, 205, 234)',
          'rgb(137, 174, 234)',
          'rgb(171, 137, 234)',
          'rgb(234, 137, 221)',
          'rgb(216, 137, 234)',
        ],
        borderColor: 'rgba(44, 44, 44, 1)',
      },
    ],
  };

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
  );

  return (
    <Doughnut
      id="doughnut"
      data={state}
      options={{
        plugins: {
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          legend: {
            display: false,
            position: 'right',
          },
        },
        responsive: true,
      }}
    />
  );
}

export default PieGraph;
