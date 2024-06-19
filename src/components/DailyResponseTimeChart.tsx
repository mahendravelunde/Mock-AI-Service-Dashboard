// src/components/DailyResponseTimeChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DailyResponseTimeChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: data.map((item: any) => item.date),
    datasets: [
      {
        label: 'Average Response Time',
        data: data.map((item: any) => item.average_time),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
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
        text: 'Daily Response Time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default DailyResponseTimeChart;
