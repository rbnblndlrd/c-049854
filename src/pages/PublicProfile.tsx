
import React from 'react';
import { useParams } from 'react-router-dom';

const PublicProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Public Profile</h1>
        <p className="text-gray-600">Public profile for user {id}</p>
      </div>
    </div>
  );
};

export default PublicProfile;
