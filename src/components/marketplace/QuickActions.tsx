
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MessageSquare, Settings } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: "Find Services",
      description: "Browse available providers",
      icon: Search,
      link: "/browse-providers",
      color: "blue"
    },
    {
      title: "My Bookings",
      description: "Manage your appointments",
      icon: Calendar,
      link: "/bookings",
      color: "green"
    },
    {
      title: "Messages",
      description: "Chat with providers",
      icon: MessageSquare,
      link: "/chat",
      color: "purple"
    },
    {
      title: "Settings",
      description: "Account preferences",
      icon: Settings,
      link: "/settings",
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      purple: "bg-purple-500 hover:bg-purple-600",
      gray: "bg-gray-500 hover:bg-gray-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`p-4 rounded-lg text-white transition-colors ${getColorClasses(action.color)}`}
          >
            <action.icon className="w-6 h-6 mb-2" />
            <h3 className="font-medium">{action.title}</h3>
            <p className="text-sm opacity-90">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
