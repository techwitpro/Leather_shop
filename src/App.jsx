import React from "react";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts/MainLayout";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
export default App;
