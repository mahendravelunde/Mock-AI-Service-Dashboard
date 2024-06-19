import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchAIDataAsync } from "./store/slices/aiDataSlice";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import "./styles/main.scss";
import ResponseTimeChart from "./components/ResponseTimeChart";
import DailyResponseTimeChart from "./components/DailyResponseTimeChart";
import WeeklyResponseTimeChart from "./components/WeeklyResponseTimeChart";
import UserSatisfactionChart from "./components/UserSatisfactionChart";
import PlatformUsageChart from "./components/PlatformUsageChart";
import CountryUsageChart from "./components/CountryUsageChart";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const aiData = useAppSelector((state) => state.aiData);

  useEffect(() => {
    dispatch(fetchAIDataAsync());
  }, [dispatch]);

  if (aiData.status === "loading") {
    return <p>Loading data...</p>;
  }

  if (aiData.status === "failed") {
    return <p>Failed to load data</p>;
  }

  if (aiData.status === "succeeded" && aiData.data) {
    return (
      <div className="container">
      <h1>AI Dashboard</h1>
      <div className="chart category-distribution-chart">
        <CategoryDistributionChart data={aiData.data.category_distribution} />
      </div>
      <div className="chart response-time-chart">
        <ResponseTimeChart data={aiData.data.response_times.day_wise} />
      </div>
      <div className="chart daily-response-time-chart">
        <DailyResponseTimeChart data={aiData.data.response_times.day_wise} />
      </div>
      <div className="chart weekly-response-time-chart">
        <WeeklyResponseTimeChart data={aiData.data.response_times.week_wise} />
      </div>
      <div className="chart user-satisfaction-chart">
        <UserSatisfactionChart data={aiData.data.user_satisfaction.ratings} />
      </div>
      <div className="chart platform-usage-chart">
        <PlatformUsageChart data={aiData.data.usage_statistics.by_platform} />
      </div>
      <div className="chart country-usage-chart">
        <CountryUsageChart data={aiData.data.usage_statistics.by_country} />
      </div>
    </div>
    );
  }

  return null;
};

export default App;
