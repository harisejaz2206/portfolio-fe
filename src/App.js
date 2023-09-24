import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AddProductForm from "./pages/AddProductForm";
import BillingAndInventoryForm from "./pages/BillingAndInventory";
import Catalog from "./pages/Catalog";
import CreateOutletForm from "./pages/CreateOutletForm";
import Dashboard from "./pages/Dashboard";
import EditOutletForm from "./pages/EditOutletForm";
import ManageInventory from "./pages/ManageInventory";
import ManageOutlets from "./pages/ManageOutlets";
import Sidebar from "./pages/Sidebar";
import Layout from "./pages/Layout";
import { HttpService } from "./app/services/base.service";
import { useSelector } from "react-redux";
import { selectToken } from "./app/features/auth/auth.selector";
import { useEffect, useLayoutEffect } from "react";
import AddToInventoryForm from "./pages/AddToInventory";
import InventoryBilling from "./pages/InventoryBilling";
import ProductDetails from "./pages/ProductDetails";
import ManageCategories from "./pages/ManageCategories";
import User from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import ViewOrders from "./pages/ViewOrders";
import ViewOrderDetails from "./pages/ViewOrderDetails";
import Chat from "./pages/Chat";
import BannerManagement from "./pages/BannerManagement";
import AddCategoryForm from "./pages/AddCategoryForm";
import AddBrandForm from "./pages/AddBrandForm";
import ManageBrands from "./pages/ManageBrands";

function App() {
  const token = useSelector(selectToken);

  useLayoutEffect(() => {
    if (token) {
      HttpService.setToken(token);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that should have the layout */}

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Layout>
              <Wishlist />
            </Layout>
          }
        />
        <Route
          path="/emptyWishlist"
          element={
            <Layout>
              <EmptyWishlist />
            </Layout>
          }
        />
        <Route
          path="/emptyCart"
          element={
            <Layout>
              <EmptyCart />
            </Layout>
          }
        />
        <Route
          path="/emptyDeal"
          element={
            <Layout>
              <EmptyDeal />
            </Layout>
          }
        />
        <Route
          path="/deals"
          element={
            <Layout>
              <Deals />
            </Layout>
          }
        />
        <Route
          path="/brands"
          element={
            <Layout>
              <Brands />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/signUp"
          element={
            <Layout>
              <SignUpPage />
            </Layout>
          }
        />
        <Route
          path="/request-email"
          element={
            <Layout>
              <RequestEmail />
            </Layout>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Layout>
              <ResetPassword />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/editProfile"
          element={
            <Layout>
              <EditProfile />
            </Layout>
          }
        />
        <Route
          path="/loyaltyPoints"
          element={
            <Layout>
              <LoyaltyPoints />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route
          path="/orderDetails"
          element={
            <Layout>
              <OrderDetails />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/conditions"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
        {/* Routes Without Layout */}
        <Route path="/superlogin" element={<SuperAdminLogin />} />
        <Route path="/multilogin" element={<MultiAdminLogin />} />
        <Route path="/solelogin" element={<SoleAdminLogin />} />

        {/* Admin Dashboard Routes*/}
        <Route
          path="/admin/*"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/outlets" element={<ManageOutlets />} />
                  <Route path="/create-outlet" element={<CreateOutletForm />} />
                  <Route
                    path="/edit-outlet/:outletId"
                    element={<EditOutletForm />}
                  />
                  <Route path="/products" element={<ManageInventory />} />
                  <Route path="/create-product" element={<AddProductForm />} />
                  <Route path="/create-brand" element={<AddBrandForm />} />
                  <Route
                    path="/create-category"
                    element={<AddCategoryForm />}
                  />
                  {/*<Route path="/billing-and-inventory" element={<BillingAndInventoryForm />} />*/}
                  {/*<Route path="/catalogue" element={<Catalog />} /> */}
                  {/*<Route path="/add-to-inventory-1" element={<AddToInventoryForm/>} /> */}
                  {/*<Route path="/add-to-inventory-2" element={<InventoryBilling/>} /> */}
                  <Route
                    path="/view-product/:productId"
                    element={<ProductDetails />}
                  />
                  <Route path="/categories" element={<ManageCategories />} />
                  <Route path="/users" element={<User />} />
                  <Route
                    path="/view-account/:userId"
                    element={<UserDetails />}
                  />
                  <Route path="/orders" element={<ViewOrders />} />
                  <Route path="/banners" element={<BannerManagement />} />
                  <Route path="/brands" element={<ManageBrands />} />
                  <Route
                    path="/view-orderdetails/:orderId"
                    element={<ViewOrderDetails />}
                  />
                  <Route path="/chat" element={<Chat />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
