import React, { useState, useEffect } from 'react';


const SuperAdminDashboard = () => {
  // State to hold system statistics
  const [systemStats, setSystemStats] = useState({
    totalOutlets: 73,
    totalUsers: 45,
    totalOrders: 100,
    // Add more statistics as needed
  });

  // Fetch system statistics from an API or use placeholder data
  useEffect(() => {
    // Fetch data here or set placeholder data
    const fetchData = async () => {
      // Replace with actual API endpoint
      const response = await fetch('/api/system-stats');
      const data = await response.json();

      // Update the state with fetched data
      setSystemStats(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-4">
      {/* Greeting and Dashboard title */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Hi Admin! Manage all your tasks on the go.</h1>
        <p className="text-sm text-gray-600">Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Outlets Card */}
        <SuperAdminDashboardCard title="Total Outlets" value={systemStats.totalOutlets} />  

        {/* Total Users Card */}
        <SuperAdminDashboardCard title="Total Users" value={systemStats.totalUsers} />
        
        {/* Total Orders Card */}
        <SuperAdminDashboardCard title="Total Orders" value={systemStats.totalOrders} />
        
        {/* Add more cards for other metrics */}
      </div>
    </div>
  );
};

const SuperAdminDashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-8">
      <p className="text-2xl font-bold mt-2">{value}</p>
      <h3 className="text-sm font-normal text-gray-500">{title}</h3>
    </div>
  );
};

export default SuperAdminDashboard;
