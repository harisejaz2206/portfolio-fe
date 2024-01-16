import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppThunkDispatch } from "../store/rootReducer";
import { getOrderDetails } from "../app/features/order/order.thunk";
import { selectOrdersDetailsData, selectOrdersLoading } from "../app/features/order/order.selectors";

const OrderDetails: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { orderid } = useParams();
  const orderDetails = useSelector(selectOrdersDetailsData);
  const isLoading = useSelector(selectOrdersLoading);

  console.log("order details", orderDetails, isLoading);


  useEffect(() => {
    console.log("orderid", orderid)
    dispatch(getOrderDetails(orderid!)).then((result) => {
      console.log("inside!!!")
      console.log("result: ", result)
    }
    );
  }, []);

  if (isLoading || !orderDetails) return <p>loading...</p>
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Order Details
        </h1>
        <div className="bg-white shadow-2xl rounded-md p-6 max-w-2xl mx-auto mb-4">
          <div className="flex justify-between items-center mb-4">
            <span
              className={`text-lg font-semibold ${orderDetails!.status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {orderDetails!.status}
            </span>
            <span className="text-gray-500">
              {new Date(orderDetails!.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">Order ID: {orderDetails!._id}</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          {orderDetails!.orderItems.map((item) => (
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
              <p>Sale Price: ${item.productId.salePrice}</p>
            </div>
          ))}
          <div className="border-t border-gray-300 pt-4 mt-4">
            <p className="text-lg font-semibold mt-2">
              Total Price: ${orderDetails!.totalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
