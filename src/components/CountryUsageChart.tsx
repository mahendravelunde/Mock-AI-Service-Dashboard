// src/components/CountryUsageChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CountryUsageChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Usage by Country',
        data: Object.values(data),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
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
        text: 'Country Usage',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default CountryUsageChart;
