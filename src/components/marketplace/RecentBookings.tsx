
import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RecentBookings = () => {
  const bookings = [
    {
      id: 1,
      service: "House Cleaning",
      provider: "CleanPro Services",
      date: "Dec 18, 2024",
      time: "2:00 PM",
      status: "confirmed",
      amount: "$90"
    },
    {
      id: 2,
      service: "Plumbing Repair",
      provider: "Quick Fix Plumbing",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      status: "pending",
      amount: "$150"
    },
    {
      id: 3,
      service: "Garden Maintenance",
      provider: "Green Thumb Co.",
      date: "Dec 15, 2024",
      time: "9:00 AM",
      status: "completed",
      amount: "$80"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'completed':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        <a href="/bookings" className="text-blue-600 hover:text-blue-700 text-sm">
          View all
        </a>
      </div>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(booking.status)}
                <div>
                  <h3 className="font-medium text-gray-900">{booking.service}</h3>
                  <p className="text-sm text-gray-600">{booking.provider}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {booking.date}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  {booking.time}
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-medium text-gray-900">{booking.amount}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full capitalize ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;
