import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailurePage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleRetryPayment = () => {
    // You can handle retry logic here
    // For simplicity, it just navigates back to the home page
    navigate("/orders");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Display an image in the center */}
      <img
        src="/failure.png" // Replace with your image path
        alt="Payment Failure"
        className="mb-4"
      />

      {/* Payment Failed text in red */}
      <p className="text-red-500 text-lg font-semibold mb-8">Payment Failed</p>

      {/* Two buttons: "Go Back" and "Retry Payment" */}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md m-2"
        onClick={handleGoBack}
      >
        Go Back
      </button>

      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md m-2"
        onClick={handleRetryPayment}
      >
        Retry Payment
      </button>
    </div>
  );
};

export default PaymentFailurePage;
