import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import SingleProduct from './single_product';
import SendEmail from './send_email';
import UserLogin from './user_login';
import UserRegister from './user_register';
import SellerSendEmail from './seller_send_email';
import SellerLogin from './seller_login';
import SellerRegister from './seller_register';
import Seller from './seller';
import SellerDashboard from './seller_dashboard';
import SellerAddProduct from './seller_add_product';
import SellerViewProduct from './seller_view_product';
import SellerSingleProduct from './seller_single_product';
import Admin from './admin';
import SellerEditProduct from './seller_edit_product';
import Products from './products';

import { Provider } from 'react-redux';
import store from './store/store';
import UserChangePassword from './user_change_password';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/seller' Component={Seller}/>
      <Route path='/admin' Component={Admin}/>
      <Route path='/send-email' Component={SendEmail}/>
      <Route path='/seller-send-email' Component={SellerSendEmail}/>
      <Route path='/product' Component={SingleProduct}/>
      <Route path='/products' Component={Products}/>
      <Route path='/user-login' Component={UserLogin}/>
      <Route path='/change-password' Component={UserChangePassword}/>
      <Route path='/seller-login' Component={SellerLogin}/>
      <Route path='/user-register' Component={UserRegister}/>
      <Route path='/seller-register' Component={SellerRegister}/>
      <Route path='/seller/dashboard' Component={SellerDashboard}/>
      <Route path='/seller/add-product' Component={SellerAddProduct}/>
      <Route path='/seller/view-product' Component={SellerViewProduct}/>
      <Route path='/seller/product' Component={SellerSingleProduct}/>
      <Route path='/seller/edit-product' Component={SellerEditProduct}/>
    </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

