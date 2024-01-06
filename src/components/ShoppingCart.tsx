import React, { useEffect } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { AppThunkDispatch } from "../store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../app/features/cart/cart.thunk";
import {
  selectCartData,
  selectCartLoading,
  selectCartTotalPrice,
} from "../app/features/cart/cart.selector";
import { DotLoader } from "react-spinners";
import { selectToken, selectUser } from "../app/features/auth/auth.selector";

interface CartItem {
  imageSrc: string;
  productName: string;
  price: number;
  quantity: number;
}

interface SummaryProps {
  subtotal: number | never[];
  taxes: number | never[];
  total: number | never[];
}

const Summary: React.FC<SummaryProps> = ({ subtotal, taxes, total }) => {
  const loading = useSelector(selectCartLoading);
  const userToken = useSelector(selectToken);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      {loading ? (
        <div className="flex items-center justify-center">
          <DotLoader color="#000" loading={loading} size={50} />
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>${taxes}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total}</span>
          </div>
          <button className="bg-red-900 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-red-800 transition duration-300">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const cart = useSelector(selectCartData) || [];
  const totalPrice = useSelector(selectCartTotalPrice) || [];
  const loading = useSelector(selectCartLoading);
  const taxes = 1.05;

  console.log("cart data:", cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("About to dispatch getUserCategories");
        await dispatch(getUserCart())
          .then((result) => {
            console.log("user cart get: ", result);
            console.log("result.payload:", result.payload);
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } catch (error) {
        console.error(
          "An error occurred while fetching user categories: ",
          error
        );
      }
    };

    fetchData();
  }, [dispatch]);
  // Calculate total and other values here
  // const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // const taxes = 1.99; // Sample tax value
  // const total = subtotal + taxes;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-3">
              {loading ? (
                <DotLoader color="#000" loading={loading} size={50} /> // Use DotLoader as the loader
              ) : (
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
                    {cart.map((item) => (
                      <ShoppingCartItem
                        key={item.productId}
                        productName={item.productName}
                        price={item.salePrice}
                        quantity={item.quantity}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Summary section */}
          <div className="md:w-1/4">
            <Summary subtotal={totalPrice} taxes={0} total={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
