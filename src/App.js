import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SignUpPage from "./pages/SignUpPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
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
import { useLayoutEffect } from "react";
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
import SoleChainSidebar from "./pages/SoleChainSidebar";
import SoleChainDashboard from "./pages/SoleChainDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SuperAdminSidebar from "./pages/SuperAdminSidebar";
import ManageStores from "./pages/ManageStores";
import AddStore from "./pages/AddStore";
import AddBrandForm from "./pages/AddBrandForm";
import ManageBrands from "./pages/ManageBrands";
import AddCatalogForm from "./pages/AddCatalogForm";
import ManageCatalog from "./pages/ManageCatalog";
import SoleAdminManageCatalogue from "./pages/SoleAdminManageCatalogue";
import SoleAdminManageCategories from "./pages/SoleAdminManageCategories";
import SoleAdminManageBrands from "./pages/SoleAdminManageBrands";
import SoleAdminUser from "./pages/SoleAdminUsers";
import SoleAdminManageOrders from "./pages/SoleAdminManageOrders";
import SoleAdminViewOrderDetails from "./pages/SoleAdminViewOrderDetails";
import AddBannerForm from "./pages/AddBannerForm";
import SoleChainManageBanner from "./pages/SoleChainManageBanner";
import SoleChainAddBanner from "./pages/SoleChainAddBanner";
import SoleAdminManageProducts from "./pages/SoleAdminManageProducts";
import UserLogin from "./pages/UserLogin";
import CategoryProducts from "./pages/CategoryProducts";
import BrandProducts from "./pages/BrandProducts";
import ProtectedRoute from "./app/routes/ProtectedRoute";
import OrderListing from "./pages/OrderListing";
import ManageOrders from "./pages/ManageOrders";
import ManageOrderDetails from "./pages/ManageOrderDetails";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import PaymentFailurePage from "./pages/PaymentFailurePage";

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
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <Wishlist />
              </Layout>
            </ProtectedRoute>
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
            // <ProtectedRoute allowedRoles={["user"]}>
            <Layout>
              <Shop />
            </Layout>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/category/products/:categoryId"
          element={
            <Layout>
              <CategoryProducts />
            </Layout>
          }
        />
        <Route
          path="/brand/products/:brandId"
          element={
            <Layout>
              <BrandProducts />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <Cart />
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        /> */}
        <Route path="/login" element={<UserLogin />} />
        <Route
          path="/signUp"
          element={
            // <Layout>
            <SignUpPage />
            // </Layout>
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
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/editprofile"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <EditProfile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <Orders />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-listing"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <ManageOrders />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-listing/order-details/:orderid"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Layout>
                <ManageOrderDetails />
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/orderDetails"
          element={
            <Layout>
              <OrderDetails />
            </Layout>
          }
        /> */}
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
        <Route path="/success" element={<PaymentSuccessPage />} />
        <Route path="/failed" element={<PaymentFailurePage />} />
        {/* Routes Without Layout */}
        <Route path="/superlogin" element={<SuperAdminLogin />} />
        <Route path="/superlogin-forgotpassword" element={<RequestEmail />} />
        <Route path="/multilogin" element={<MultiAdminLogin />} />
        <Route path="/multilogin-forgotpassword" element={<RequestEmail />} />
        <Route path="/solelogin" element={<SoleAdminLogin />} />
        <Route path="/solelogin-forgotpassword" element={<RequestEmail />} />

        {/* Admin Dashboard Routes*/}
        <Route
          path="/multi-admin/*"
          element={
            <ProtectedRoute allowedRoles={["multi-admin"]}>
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/outlets" element={<ManageOutlets />} />
                    <Route
                      path="/create-outlet"
                      element={<CreateOutletForm />}
                    />
                    {/* <Route
                      path="/edit-outlet/:outletId"
                      element={<EditOutletForm />}
                    /> */}
                    <Route path="/products" element={<ManageInventory />} />
                    {/* <Route
                      path="/create-product"
                      element={<AddProductForm />}
                    /> */}
                    <Route path="/create-brand" element={<AddBrandForm />} />
                    <Route
                      path="/create-category"
                      element={<AddCategoryForm />}
                    />
                    <Route
                      path="/billing-and-inventory"
                      element={<BillingAndInventoryForm />}
                    />
                    <Route path="/catalogue" element={<ManageCatalog />} />
                    <Route
                      path="/create-catalogue"
                      element={<AddCatalogForm />}
                    />
                    <Route
                      path="/add-to-inventory-1"
                      element={<AddToInventoryForm />}
                    />
                    <Route
                      path="/add-to-inventory-2"
                      element={<InventoryBilling />}
                    />
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
                    <Route path="/add-banner" element={<AddBannerForm />} />
                    <Route path="/brands" element={<ManageBrands />} />
                    <Route
                      path="/view-orderdetails/:orderId"
                      element={<ViewOrderDetails />}
                    />
                    <Route path="/chat" element={<Chat />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sole-admin/*"
          element={
            <ProtectedRoute allowedRoles={["sole-admin"]}>
              <div className="flex">
                <SoleChainSidebar />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<SoleChainDashboard />} />
                    <Route
                      path="/catalogue"
                      element={<SoleAdminManageCatalogue />}
                    />
                    <Route path="/brands" element={<SoleAdminManageBrands />} />
                    <Route
                      path="/categories"
                      element={<SoleAdminManageCategories />}
                    />
                    <Route
                      path="/products"
                      element={<SoleAdminManageProducts />}
                    />
                    <Route path="/users" element={<SoleAdminUser />} />
                    <Route path="/orders" element={<SoleAdminManageOrders />} />
                    <Route
                      path="/categories"
                      element={<SoleAdminManageCategories />}
                    />
                    <Route path="/users" element={<SoleAdminUser />} />
                    <Route path="/orders" element={<SoleAdminManageOrders />} />
                    <Route
                      path="/banners"
                      element={<SoleChainManageBanner />}
                    />
                    <Route
                      path="/add-banner"
                      element={<SoleChainAddBanner />}
                    />
                    <Route
                      path="/view-orderdetails/:orderId"
                      element={<SoleAdminViewOrderDetails />}
                    />
                    <Route
                      path="/view-account/:userId"
                      element={<UserDetails />}
                    />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/super-admin/*"
          element={
            <ProtectedRoute allowedRoles={["super-admin"]}>
              <div className="flex">
                <SuperAdminSidebar />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<SuperAdminDashboard />} />
                    <Route path="/stores" element={<ManageStores />} />
                    <Route path="/add-store" element={<AddStore />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
