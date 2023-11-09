import React, { useState } from "react";
import { useParams } from "react-router-dom";

function SoleAdminViewOrderDetails() {
  const [orderStatus, setOrderStatus] = useState("Delivered");
  const { orderId } = useParams();
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      brand: "Brand A",
      seller: "Seller A",
      image: "/Gaviscon.png",
      quantity: 2,
      price: 25.0,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      brand: "Brand B",
      seller: "Seller B",
      image: "/Panadol.png",
      quantity: 1,
      price: 30.0,
    },
    // Add more products as needed
  ]);

  const subTotal = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  const loyaltyPointsDiscount = 5;
  const couponDiscount = 10;
  const taxes = 5;
  const total = subTotal - loyaltyPointsDiscount - couponDiscount + taxes;

  return (
    <div className="order-details bg-gray-100 p-4 rounded-lg shadow-md text-sm">
      <h2 className="text-base font-semibold mb-4">Order ID: {orderId}</h2>
      <div className="order-details-header flex justify-between items-center">
        <h2 className="text-base font-semibold">Order Details</h2>
        <div className="order-status-dropdown flex items-center space-x-4">
          <select
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
            className="border rounded-md px-3 py-2 bg-white text-gray-700"
          >
            <option value="Delivered">New</option>
            <option value="Processing">Pending</option>
            <option value="Shipped">Complete</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Update
          </button>
        </div>
      </div>
      <div className="order-details-info grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="order-info-box bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Placed On</h3>
          <p>September 17, 2023 10:00 AM</p>
        </div>
        <div className="order-info-box bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Payment Status</h3>
          <p className="text-green-600 font-semibold">Paid</p>
        </div>
        <div className="order-info-box bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Seller</h3>
          <p className="text-sm">Name: Seller A</p>
          <p className="text-sm">Address: Seller Address</p>
        </div>
      </div>
      <div className="order-products mt-4 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-white p-4 rounded-lg shadow-md flex space-x-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover"
            />
            <div className="product-details flex-1">
              <h3 className="text-base font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-sm">Brand: {product.brand}</p>
              <p className="text-sm">Seller: {product.seller}</p>
              <p className="text-sm">
                Quantity: {product.quantity} x ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary mt-4 p-4 bg-white rounded-lg shadow-md text-base">
        <div className="order-summary-box flex justify-between items-center border-b pb-2 mb-2">
          <h3 className=" font-semibold">Sub Total</h3>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <div className="order-summary-box flex justify-between items-center border-b pb-2 mb-2">
          <h3 className=" font-semibold">Loyalty Points Discount</h3>
          <p className="text-green-600">-${loyaltyPointsDiscount.toFixed(2)}</p>
        </div>
        <div className="order-summary-box flex justify-between items-center border-b pb-2 mb-2">
          <h3 className=" font-semibold">Coupon Discount</h3>
          <p className="text-green-600">-${couponDiscount.toFixed(2)}</p>
        </div>
        <div className="order-summary-box flex justify-between items-center border-b pb-2 mb-2">
          <h3 className=" font-semibold">Taxes</h3>
          <p>${taxes.toFixed(2)}</p>
        </div>
        <div className="order-summary-box flex justify-between items-center text-base font-bold">
          <h3>Total</h3>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default SoleAdminViewOrderDetails;
