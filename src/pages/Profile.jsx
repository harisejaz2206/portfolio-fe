import React from "react";
import {
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaHistory,
  FaCog,
  FaAddressCard,
  FaCreditCard,
} from "react-icons/fa";

const Profile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    // Add more user details as needed
  };

  return (
    <div className="container mx-auto mt-8 mb-8">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500">@{user.username}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">Phone: {user.phoneNumber}</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaHistory className="text-blue-500" />
            <a
              href="/order-history"
              className="text-blue-500 hover:underline ml-2"
            >
              Order History
            </a>
          </div>
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaHeart className="text-red-500" />
            <a href="/wishlist" className="text-red-500 hover:underline ml-2">
              Wishlist
            </a>
          </div>
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaShoppingCart className="text-green-500" />
            <a href="/cart" className="text-green-500 hover:underline ml-2">
              Cart
            </a>
          </div>
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaCog className="text-gray-500" />
            <a href="/settings" className="text-gray-500 hover:underline ml-2">
              Settings
            </a>
          </div>
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaAddressCard className="text-indigo-500" />
            <a href="/address" className="text-indigo-500 hover:underline ml-2">
              Address Book
            </a>
          </div>
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaCreditCard className="text-purple-500" />
            <a
              href="/payment-methods"
              className="text-purple-500 hover:underline ml-2"
            >
              Payment Methods
            </a>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
