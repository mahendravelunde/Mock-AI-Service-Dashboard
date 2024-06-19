export interface AIData {
    insight_summary: {
      total_queries: number;
      successful_queries: number;
      failed_queries: number;
      average_response_time: number;
    };
    category_distribution: {
      small_talk: number;
      technical_support: number;
      sales_inquiries: number;
      customer_service: number;
    };
    response_times: {
      day_wise: { date: string; average_time: number }[];
      week_wise: { week: string; average_time: number }[];
    };
    user_satisfaction: {
      ratings: { rating: number; count: number }[];
    };
    usage_statistics: {
      by_platform: { iOS: number; Android: number; Web: number };
      by_country: { USA: number; India: number; Germany: number; Japan: number; Brazil: number };
    };
  }
  