import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import ProductDetail from "./Components/Shop/ProductDetail";
import Cart from "./Components/Shop/Cart";
import Checkout from "./Components/Shop/Checkout";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/SignUp";
import Search from "./Components/Home/Search";
import ScrollTop from "./layouts/ScrollTop";
import PrivateRoute from "./Components/routes/PrivateRoute"; 

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
