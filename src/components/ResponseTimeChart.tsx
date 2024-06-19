
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ResponseTimeChart = ({ data }: { data: any }) => {
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

  return <Line data={chartData} />;
};

export default ResponseTimeChart;
