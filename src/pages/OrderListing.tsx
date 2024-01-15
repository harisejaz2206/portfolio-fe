import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppThunkDispatch } from "../store/rootReducer";
import { selectOrdersListingData } from "../app/features/order/order.selectors";
import { getOrderListing } from "../app/features/order/order.thunk";
import { Toast } from "../utils/toast";

const OrderListing: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppThunkDispatch>();
  const orders = useSelector(selectOrdersListingData);
  const orderIds = orders!.map(order => order._id);
  console.log("order Ids", orderIds);

  const handleViewDetails = (orderid: string) => {
    navigate(`/order-listing/order-details/${orderid}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getOrderListing()).then((result: any) => {
          Toast.fire({
            icon: "success",
            title: result.payload.message,
          });
        }); // Using await with dispatch here
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Order Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders!.map((order) => (
            <div key={order._id} className="bg-white shadow-md rounded-md p-6">
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-lg font-semibold ${order.status === "paid" ? "text-green-500" : "text-red-500"
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
                  onClick={() => handleViewDetails(order._id)}
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
