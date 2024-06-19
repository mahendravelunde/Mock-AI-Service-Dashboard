import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchAIDataAsync } from './store/slices/aiDataSlice';
import CategoryDistributionChart from './components/CategoryDistributionChart';
import './styles/main.scss';
import ResponseTimeChart from './components/ResponseTimeChart';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const aiData = useAppSelector((state) => state.aiData);

  useEffect(() => {
    dispatch(fetchAIDataAsync());
  }, [dispatch]);

  if (aiData.status === 'loading') {
    return <p>Loading data...</p>;
  }

  if (aiData.status === 'failed') {
    return <p>Failed to load data</p>;
  }

  if (aiData.status === 'succeeded' && aiData.data) {
    return (
      <div className="container">
        <h1>AI Dashboard</h1>
        <div className="chart category-distribution-chart">
            <CategoryDistributionChart data={aiData.data.category_distribution} />
        </div>
        <div className="chart response-time-chart">
            <ResponseTimeChart data={aiData.data.response_times.day_wise} />
        </div>
        {/* <CategoryDistributionChart data={aiData.data.category_distribution} />
        <ResponseTimeChart data={aiData.data.response_times.day_wise} /> */}
      </div>
    );
  }

  return null;
};

export default App;
