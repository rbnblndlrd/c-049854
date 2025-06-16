
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketplaceStats from "@/components/marketplace/MarketplaceStats";
import FeaturedServices from "@/components/marketplace/FeaturedServices";
import RecentBookings from "@/components/marketplace/RecentBookings";
import QuickActions from "@/components/marketplace/QuickActions";

export default function Index() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to HOUSIE
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted marketplace for home services
          </p>
          
          {!user && (
            <div className="flex justify-center space-x-4">
              <a
                href="/auth"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/browse-providers"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Browse Services
              </a>
            </div>
          )}
        </div>

        {/* Dashboard Content */}
        {user ? (
          <div className="space-y-8">
            <MarketplaceStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeaturedServices />
              <QuickActions />
            </div>
            <RecentBookings />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧹</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cleaning Services</h3>
              <p className="text-gray-600">Professional home and office cleaning</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Handyman Services</h3>
              <p className="text-gray-600">Repairs and maintenance for your home</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gardening</h3>
              <p className="text-gray-600">Landscaping and garden maintenance</p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
