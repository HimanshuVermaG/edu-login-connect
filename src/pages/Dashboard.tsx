
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          This is a placeholder dashboard page. After successful login, users will be directed here.
        </p>
        
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-edu-primary text-white rounded-lg hover:bg-edu-primary-dark transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
