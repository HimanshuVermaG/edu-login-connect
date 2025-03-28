
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzODJiZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDEwdjEwSDM2em0tMTYgMGgxMHYxMEgyMHptOC0xNmgxMHYxMEgyOHoiLz48L2c+PC9nPjwvc3ZnPg==')]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
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
    </div>
  );
};

export default Dashboard;
