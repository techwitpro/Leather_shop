import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";  // Correct the import path
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <Routes>
      {/* MainLayout wraps all routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />  {/* Default route */}
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
