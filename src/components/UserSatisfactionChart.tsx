// src/components/UserSatisfactionChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserSatisfactionChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: data.map((item: any) => `Rating ${item.rating}`),
    datasets: [
      {
        label: 'User Satisfaction',
        data: data.map((item: any) => item.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'User Satisfaction',
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default UserSatisfactionChart;
