import React, { useState, useEffect } from 'react';
import './UsageLine.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'chartjs-adapter-date-fns';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
} from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Chart } from 'react-chartjs-2';

// Makes a Line graph
function LineGraph() {
//   const [timeRange, setTimeRange] = useState(24);

  //   useEffect(() => {

  //   }, []);

  const state = {
    // labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        id: 0,
        // type: 'time',
        backgroundColor: 'rgba(0, 194, 255, .53)',
        borderColor: 'rgba(0, 133, 255, 1)',
        fill: true,
        tension: 0.3,
        data: [{
          x: '2015-06-12T00:49:50+00:00',
          y: 85,
        },
        {
          x: '2015-06-12T07:09:03+00:00',
          y: 77,
        },
        {
          x: '2015-06-12T11:23:15+00:00',
          y: 58,
        },
        {
          t: '2015-06-12T16:00:58+00:00',
          y: 110,
        },
        {
          t: '2015-06-12T19:35:01+00:00',
          y: 97,
        },
        {
          t: '2015-06-12T21:15:50+00:00',
          y: 142,
        }],
      },
    ],
  };

  ChartJS.register(
    LineElement,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Filler,
  );

  return (
    <Chart
      id="line"
      type="line"
      datasetIdKey="id"
      data={state}
      options={{
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Endpoints Used',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)',
            font: 'Verdana, Geneva, Tahoma, sans-serif',
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
          legend: {
            display: false,
            position: 'right',
          },
        },
        scales: {
          x: {
            // type: 'time',
            bounds: 'ticks',
            display: true,
            ticks: {
              font: 'Verdana, Geneva, Tahoma, sans-serif',
              color: 'rgba(255, 255, 255, 1)',
            },
            time: {
              unit: 'hour',
              unitStepSize: 1,
              min: '2015-06-12T00:00',
              max: '2015-06-13T00:00',
              parser: 'hour',
              displayFormats: {
                hour: 'HH:mm',
              },
            },
          },
          y: {
            display: true,
            ticks: {
              font: 'Verdana, Geneva, Tahoma, sans-serif',
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        },
        responsive: true,
      }}
    />
  );
}

export default LineGraph;
