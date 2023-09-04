import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Wishlist from "./components/pages/Wishlist";
import EmptyWishlist from "./components/pages/EmptyWishlist";
import EmptyCart from "./components/pages/EmptyCart";
import EmptyDeal from "./components/pages/EmptyDeal";
import Deals from "./components/pages/Deals";
import Brands from "./components/pages/Brands";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import Footer from "./components/Footer";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";
import LoyaltyPoints from "./components/pages/LoyaltyPoints";
import Orders from "./components/pages/Orders";
import OrderDetails from "./components/pages/OrderDetails";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import RequestEmail from "./components/pages/request-email";
import ResetPassword from "./components/pages/reset-password";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
