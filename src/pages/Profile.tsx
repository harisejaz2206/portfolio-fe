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
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectCatalogLoading } from "../app/features/catalog/catalog.selector";
import { selectUser } from "../app/features/auth/auth.selector";

const Profile: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  // const navigate = useNavigate();
  const user = useSelector(selectUser);
  // const user = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   username: "johndoe123",
  //   email: "john.doe@example.com",
  //   phoneNumber: "+1234567890",
  //   // Add more user details as needed
  // };

  return (
    <div className="container mx-auto mt-8 mb-8">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">
              {user?.username}
            </h1>
            <p className="text-gray-500">@{user!.username}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">Email: {user!.email}</p>
          <p className="text-gray-700">Phone: {user!.role}</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 border-t pt-4">
            <FaHistory className="text-blue-500" />
            <a
              href="/order-listing"
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
