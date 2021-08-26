import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import Home from "./components/Index/Home";
import Shop from "./components/Index/Shop";
import Category from "./components/Categories/Category";
import Detail_product from "./components/Products/Detail_product";
import Cart from "./components/Index/Cart";
import Checkout from "./components/Index/Checkout";
import Home_admin from "./components/Admin/Home";
import Category_admin from "./components/Admin/Category_admin";
import Product_admin from "./components/Admin/Product_admin";
import Accounts from "./components/Admin/Account";
import ReactDOM from "react-dom";
import Baocao from "./Baocao";
import Login from "./Login";
import firebase from "firebase";
import Order from "./components/Admin/Order";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/tat-ca-san-pham" component={Shop} />
          <Route path="/loai-san-pham/:id?" component={Category} />
          <Route path="/san-pham/:id" component={Detail_product} />
          <Route path="/gio-hang" component={Cart} />
          <Route path="/thanh-toan" component={Checkout} />
          <Route path="/baocao" component={Baocao} />
          <Route path="/dang-nhap" exact component={Login} />
          <Route path="/admin/" exact render={() => {
            return sessionStorage.uid ? <Home_admin /> : <Redirect to='/dang-nhap' />
          }} />
          <Route path="/admin/loai-san-pham" render={() => {
            return sessionStorage.uid ? <Category_admin /> : <Redirect to='/dang-nhap' />
          }} />
          <Route path="/admin/san-pham" render={() => {
            return sessionStorage.uid ? <Product_admin /> : <Redirect to='/dang-nhap' />
          }} />
          <Route path="/admin/don-hang" render={() => {
            return sessionStorage.uid ? <Order /> : <Redirect to='/dang-nhap' />
          }} />
          <Route path="/admin/tai-khoan" render={() => {
            return sessionStorage.uid ? <Accounts /> : <Redirect to='/dang-nhap' />
          }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
