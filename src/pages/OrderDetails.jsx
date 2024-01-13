import React from "react";

const OrderDetails = () => {
  const order = {
    _id: "658ef26e7082d502dcded7ad",
    status: "paid",
    createdAt: "2023-12-29T16:23:10.655Z",
    updatedAt: "2023-12-29T16:23:24.692Z",
    orderItems: [
      {
        _id: "6589cf978f5edbad79b8a88a",
        productId: {
          _id: "6586bbf83b444db36d81cbb6",
          name: "Aspirin (Acetylsalicylic Acid)",
          quantity: 20,
          originalPrice: 23.33,
          salePrice: 25,
          category: "6586bb3d3b444db36d81cb94",
          brand: "6586ba9d3b444db36d81cb74",
          storeId: "6586b0284023b8cc6ed470fb",
          images: [
            "https://res.cloudinary.com/dr7eczdms/image/upload/v1703328759/xpc0zgjvgn0h4vt8rdba.jpg",
            "https://res.cloudinary.com/dr7eczdms/image/upload/v1703328759/zarzxvdbxpvbxlcv0lea.jpg",
          ],
          __v: 0,
        },
        quantity: 1,
        __v: 0,
      },
      // Add more items as needed
    ],
    totalPrice: 25,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Order Details
        </h1>
        <div className="bg-white shadow-2xl rounded-md p-6 max-w-2xl mx-auto">
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
          </div>
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          {order.orderItems.map((item) => (
            <div key={item._id} className="mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={item.productId.images[0]}
                  alt={item.productId.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.productId.name}
                  </h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <p>Original Price: ${item.productId.originalPrice}</p>
              <p>Sale Price: ${item.productId.salePrice}</p>
            </div>
          ))}
          <div className="border-t border-gray-300 pt-4 mt-4">
            <p className="text-lg font-semibold mt-2">
              Total Price: ${order.totalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
