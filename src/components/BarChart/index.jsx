// src/components/index.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const index = (props) => {
  const {
    x,
    y
  } = props
  const data = {
    labels: x,
    datasets: [
      {
        label: 'Revenue',
        data: y,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: 'Data Revenue',
        color: 'white'
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgb(105,105,105)' // X-axis grid line color
        }
      },
      y: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'rgb(105,105,105)' // X-axis grid line color
        }
      }
    }
  };

  return (
    <div style={{ maxWidth: '95%', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default index;
