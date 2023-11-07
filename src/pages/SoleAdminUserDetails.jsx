import { FaArrowLeft, FaEdit, FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SoleAdminUserDetails = () => {

    // Sample order history data
  const orderHistory = [
    {
      id: 1,
      price: '$50.00',
      purchasedOn: 'Date 1',
      status: 'Delivered',
    },
    {
      id: 2,
      price: '$30.00',
      purchasedOn: 'Date 2',
      status: 'In Progress',
    },
    {
        id: 3,
        price: '$30.00',
        purchasedOn: 'Date 2',
        status: 'In Progress',
      },
      {
        id: 4,
        price: '$30.00',
        purchasedOn: 'Date 2',
        status: 'In Progress',
      },
      {
        id: 5,
        price: '$30.00',
        purchasedOn: 'Date 2',
        status: 'In Progress',
      },
    // Add more order history items as needed
  ];
  const abandonedOrders = [
    {
      id: 1,
      productName: 'Product A',
      brand: 'Brand X',
      seller: 'Seller Y',
      price: '$20.00',
      quantity: 2,
    },
    {
      id: 2,
      productName: 'Product B',
      brand: 'Brand Z',
      seller: 'Seller W',
      price: '$25.00',
      quantity: 3,
    },
    // Add more abandoned orders as needed
  ];
  return (
    <div className="flex bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Left Side - User Details */}
      <div className="bg-white rounded-lg p-4 shadow-md w-1/3">
        {/* Back Button */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <Link to="/multi-admin/users">
          <button className="text-indigo-600 hover:underline focus:outline-none flex items-center">
            <FaArrowLeft className="mr-1" /> Back
          </button>
          </Link>
        </div>

        {/* User Profile */}
        <div className="flex items-center justify-center flex-col"> {/* Use flex container */}
  {/* User's Profile Image */}
  <div className="rounded-full w-32 h-32 bg-gray-300 flex items-center justify-center">
    {/* User's Profile Image */}
    <img
      src="/download.png" // Add the path to the user's profile image
      alt="User Profile"
      className="w-28 h-28 rounded-full object-cover"
    />
  </div>
  <div className="text-base font-semibold mt-2 text-indigo-700 text-center">Amanda Harris</div> {/* Center text */}
  <div className="text-gray-600 text-sm text-center mb-2">Total Orders: (32)</div> {/* Center text */}
  <div className="text-gray-600 text-sm text-center">Last Active: 13/09/2023 1:25pm</div> {/* Center text */}
</div>

        {/* Messages */}
        <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
          <h3 className="text-base font-semibold mb-2">Messages</h3>
          {/* Messages Content */}
        </div>

        {/* Membership and Loyalty */}
        <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
          <h3 className="text-base font-semibold mb-2">Membership and Loyalty</h3>
          {/* Membership and Loyalty Content */}
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-lg p-4 mt-4 shadow-md relative">
          <h3 className="text-base font-semibold mb-2">Personal Details</h3>
          {/* Personal Details Content */}
          <button className="absolute text-sm top-2 right-2 text-indigo-600 hover:underline">
            Edit <FaEdit className="inline-block ml-1 -mt-1" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-4 mt-4 shadow-md relative">
          <h3 className="text-base font-semibold mb-2">Contact Information</h3>
          {/* Contact Information Content */}
          <button className="absolute top-2 right-2 text-sm text-indigo-600 hover:underline">
            Edit <FaEdit className="inline-block ml-1 -mt-1" />
          </button>
        </div>
      </div>

     {/* Right Side - Order History and Abandoned Orders */}
     <div className="flex flex-col flex-grow ml-4">
        {/* Order History */}
        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
          <h2 className="text-base text-indigo-600 font-semibold mb-4">Order History</h2>
          {/* Order History Table */}
          <table className="min-w-full divide-y divide-gray-200 mt-8 text-sm">
            {/* Table Headers */}
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Purchased On</th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.price}</td>
                  <td className="px-4 py-2">{order.purchasedOn}</td>
                  <td className="px-4 py-2">{order.status}</td>
                  <td className="px-4 py-2">
                    <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none flex items-center text-sm">
                      <FaEye className="mr-1" /> View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Abandoned Orders */}
        <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-base text-indigo-600 font-semibold mb-4">Abandoned Orders</h2>
        {abandonedOrders.length === 0 ? ( // Check if there are no abandoned orders
            <div className="flex flex-col items-center justify-center">
            <img
                src="/Empty Wishlist.png" // Add the path to your no products image
                alt="No Products"
                className="w-32 h-32 mb-4"
            />
            <p className="text-gray-600">No Product has been added to cart.</p>
            </div>
        ) : (
            <div className="mb-4">
            {/* Abandoned Orders Items */}
            {abandonedOrders.map((product, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    {/* Product Image */}
                    <div className="w-12 h-12 bg-gray-200 rounded-md">
                    <img src="/Panadol.png" alt="text" />
                    </div>
                    <div className="ml-4">
                    <div className="text-lg font-semibold">{product.name}</div>
                    <div className="text-gray-600 text-sm">Brand: {product.brand}</div>
                    <div className="text-gray-600 text-sm">Seller: {product.seller}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm font-semibold">{product.price}</div>
                    <div className="text-gray-600 text-sm">Quantity: {product.quantity}</div>
                </div>
                </div>
                
            ))}
             {/* Total */}
             <div className="text-right text-sm font-semibold">
                Total: $40.00 {/* Calculate the total dynamically */}
            </div>
            </div>
        )}

           
        </div>
      </div>
    </div>
  );
};

export default SoleAdminUserDetails;
