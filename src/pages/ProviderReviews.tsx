
import React from 'react';
import { useParams } from 'react-router-dom';

const ProviderReviews = () => {
  const { providerId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Provider Reviews</h1>
        <p className="text-gray-600">Reviews for provider {providerId}</p>
      </div>
    </div>
  );
};

export default ProviderReviews;
