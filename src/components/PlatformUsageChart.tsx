// src/components/PlatformUsageChart.tsx
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

const PlatformUsageChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Usage by Platform',
        data: Object.values(data),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
        text: 'Platform Usage',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default PlatformUsageChart;
