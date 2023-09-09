import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";
import EmptyWishlist from "./pages/EmptyWishlist";
import EmptyCart from "./pages/EmptyCart";
import EmptyDeal from "./pages/EmptyDeal";
import Deals from "./pages/Deals";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import LoyaltyPoints from "./pages/LoyaltyPoints";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RequestEmail from "./pages/request-email";
import ResetPassword from "./pages/reset-password";
import SuperAdminLogin from "./pages/SuperAdminLogin";
import MultiAdminLogin from "./pages/MultiAdminLogin";
import SoleAdminLogin from "./pages/SoleAdminLogin";
import { HttpService } from "./app/services/base.service";
import { useSelector } from "react-redux";
import { selectToken } from "./app/features/auth/auth.selector";
import { useEffect } from "react";

function App() {
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      HttpService.setToken(token);
    }
  }, [token]);

  const hideNavFooter = ["/superlogin", "/multilogin", "/solelogin"].includes(
    window.location.pathname
  );

  return (
    <BrowserRouter>
      <div>
        {!hideNavFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/emptyWishlist" element={<EmptyWishlist />} />
          <Route path="/emptyCart" element={<EmptyCart />} />
          <Route path="/emptyDeal" element={<EmptyDeal />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/request-email" element={<RequestEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/loyaltyPoints" element={<LoyaltyPoints />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/conditions" element={<Terms />} />
          <Route path="/superlogin" element={<SuperAdminLogin />} />
          <Route path="/multilogin" element={<MultiAdminLogin />} />
          <Route path="/solelogin" element={<SoleAdminLogin />} />
        </Routes>
        {!hideNavFooter && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
