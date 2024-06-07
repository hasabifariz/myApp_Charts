import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
        label: 'Sales',
        data: y,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',

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
        text: 'Data Sales',
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
      <Line data={data} options={options} />
    </div>
  );
};

export default index;
