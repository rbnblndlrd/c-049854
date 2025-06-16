
import React from 'react';
import { Users, Calendar, Star, TrendingUp } from 'lucide-react';

const MarketplaceStats = () => {
  const stats = [
    {
      title: "Active Providers",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "blue"
    },
    {
      title: "Bookings This Month",
      value: "856",
      change: "+8%",
      icon: Calendar,
      color: "green"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      color: "yellow"
    },
    {
      title: "Revenue Growth",
      value: "23%",
      change: "+5%",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600",
      yellow: "bg-yellow-50 text-yellow-600",
      purple: "bg-purple-50 text-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
            </div>
            <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
              <stat.icon size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceStats;
