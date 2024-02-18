import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./single_product";
import SendEmail from "./send_email";
import UserLogin from "./user_login";
import UserRegister from "./user_register";
import SellerSendEmail from "./seller_send_email";
import SellerLogin from "./seller_login";
import SellerRegister from "./seller_register";
import Seller from "./seller";
import SellerDashboard from "./seller_dashboard";
import SellerAddProduct from "./seller_add_product";
import SellerViewProduct from "./seller_view_product";
import ProductsByCategory from "./products_by_category";
import SellerSingleProduct from "./seller_single_product";
import Admin from "./admin";
import SellerEditProduct from "./seller_edit_product";
import Products from "./products";
import { Provider } from "react-redux";
import store from "./store/store";
import UserChangePassword from "./user_change_password";
import Checkout from "./checkout";
import UserProfile from "./user_profile";
import Service from "./service";
import FilteredProducts from "./filtered_products";
import OrderConfirmation from "./order_confirmation";
import PaymentCancellation from "./payment_cancellation";
import UserProtected from "./user_protected";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UserProtected Component={App} />} />
          <Route path="/service" Component={Service} />
          <Route path="/seller" Component={Seller} />
          <Route path="/admin" Component={Admin} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/user-profile" Component={UserProfile} />
          <Route path="/order-confirmation" Component={OrderConfirmation} />
          <Route path="/payment-cancellation" Component={PaymentCancellation} />
          <Route path="/send-email" Component={SendEmail} />
          <Route path="/seller-send-email" Component={SellerSendEmail} />
          <Route path="/product/:id" Component={SingleProduct} />
          <Route path="/products" Component={Products} />
          <Route path="/search" Component={FilteredProducts} />
          <Route path="/products/:category" Component={ProductsByCategory} />
          <Route path="/user-login" Component={UserLogin} />
          <Route path="/change-password" Component={UserChangePassword} />
          <Route path="/seller-login" Component={SellerLogin} />
          <Route path="/user-register" Component={UserRegister} />
          <Route path="/seller-register" Component={SellerRegister} />
          <Route path="/seller/dashboard" Component={SellerDashboard} />
          <Route path="/seller/add-product" Component={SellerAddProduct} />
          <Route path="/seller/view-product" Component={SellerViewProduct} />
          <Route path="/seller/product" Component={SellerSingleProduct} />
          <Route
            path="/seller/edit-product/:productId"
            Component={SellerEditProduct}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
