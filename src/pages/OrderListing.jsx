import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderListing = () => {
  const navigate = useNavigate();
  const ordersData = [
    {
      _id: "658ef26e7082d502dcded7ad",
      status: "paid",
      createdAt: "2023-12-29T16:23:10.655Z",
      updatedAt: "2023-12-29T16:23:24.692Z",
    },
    // Add more orders as needed
  ];

  const handleViewDetails = () => {
    // Navigate to /order-details
    navigate("/order-details");
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Order Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ordersData.map((order) => (
            <div key={order._id} className="bg-white shadow-md rounded-md p-6">
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-lg font-semibold ${
                    order.status === "paid" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {order.status}
                </span>
                <span className="text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Order ID: {order._id}</span>
                {/* <button className="text-blue-500 hover:underline">
                  <FaEye />
                </button> */}
              </div>
              <hr className="my-2 border-gray-300" />
              <div className="flex items-center justify-between">
                <p className="text-gray-700">View Details</p>
                <FaEye
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                  onClick={handleViewDetails}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderListing;
