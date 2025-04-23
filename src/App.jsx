import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import ProductDetail from "./Components/Shop/ProductDetail"; 
import Cart from "./Components/Shop/Cart"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetail />} /> 
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
