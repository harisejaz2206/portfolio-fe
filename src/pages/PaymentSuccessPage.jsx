import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleViewOrders = () => {
    navigate("/orders");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Display an image in the center */}
      <img
        src="/success.png" // Replace with your image path
        alt="Payment Success"
        className="mb-4"
      />

      {/* Payment Successful text in green */}
      <p className="text-green-500 text-lg font-semibold mb-8">
        Payment Successful
      </p>

      {/* Two buttons: "Go Back" and "Orders" */}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md m-2"
        onClick={handleGoBack}
      >
        Go Back
      </button>

      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md m-2"
        onClick={handleViewOrders}
      >
        Orders
      </button>
    </div>
  );
};

export default PaymentSuccessPage;
