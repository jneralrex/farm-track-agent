import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { BarChart2, Cloud, DollarSign } from 'lucide-react';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Add New Entry
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <div className="bg-yellow-100 text-yellow-500 p-3 rounded-full">
              <BarChart2 size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Sales</p>
              <h2 className="text-xl font-bold">N24,000</h2>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
              <Cloud size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Weather Updates</p>
              <h2 className="text-xl font-bold">28°C Sunny</h2>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex items-center gap-4">
            <div className="bg-green-100 text-green-500 p-3 rounded-full">
              {/* <DollarSign size={24} /> */}
              <p>N</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h2 className="text-xl font-bold">N120,000</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Performance Overview</h2>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Latest Activity</h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-4 flex justify-between">
                  <p className="text-gray-700">New sale completed</p>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-gray-700">Inventory updated</p>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-gray-700">Weather alert issued</p>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Notifications</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 text-red-500 p-3 rounded-full">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <p className="text-gray-700">Upcoming test</p>
                  <span className="text-sm text-gray-500">2 days remaining</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
                  <Cloud size={20} />
                </div>
                <div>
                  <p className="text-gray-700">New weather report</p>
                  <span className="text-sm text-gray-500">Just now</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Budget Overview</h2>
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
