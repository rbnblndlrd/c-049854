
import React from 'react';
import { Star, MapPin } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Premium House Cleaning",
      provider: "CleanPro Services",
      rating: 4.9,
      reviews: 234,
      price: "$45/hour",
      location: "Downtown",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Handyman Services",
      provider: "FixIt Fast",
      rating: 4.8,
      reviews: 156,
      price: "$65/hour",
      location: "Westside",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Garden Maintenance",
      provider: "Green Thumb Co.",
      rating: 4.7,
      reviews: 89,
      price: "$40/hour",
      location: "Suburbs",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Featured Services</h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.provider}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{service.rating} ({service.reviews})</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {service.location}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
