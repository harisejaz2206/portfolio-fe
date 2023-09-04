import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const Summary = ({ subtotal, taxes, total }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>$0.00</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
      <button className="bg-red-900 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
    </div>
  );
};

const ShoppingCart = () => {
  const cartItems = [
    {
      imageSrc: '/Aspirin.png',
      productName: 'Aspirin',
      price: 19.99,
      quantity: 1,
    },
    {
        imageSrc: '/Aspirin.png',
        productName: 'Aspirin',
        price: 19.99,
        quantity: 2,
    },
    {
        imageSrc: '/Aspirin.png',
        productName: 'Aspirin',
        price: 19.99,
        quantity: 4,
    },
    {
        imageSrc: '/Aspirin.png',
        productName: 'Aspirin',
        price: 19.99,
        quantity: 1,
    },
  ];

  // Calculate total and other values here
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = 1.99; // Sample tax value
  const total = subtotal + taxes;

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
         <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <h1 className="text-2xl font-semibold">{cartItems.length} Items</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Shopping cart items */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <ShoppingCartItem
                      key={index}
                      imageSrc={item.imageSrc}
                      productName={item.productName}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary section */}
          <div className="md:w-1/4">
            <Summary subtotal={subtotal} taxes={taxes} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
