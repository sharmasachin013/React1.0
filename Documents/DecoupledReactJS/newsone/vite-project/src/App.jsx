import React from "react";
import NavBar from "./components/nav/NavBar";
import "./assets/js/global.js";
import { Routes, Route } from "react-router-dom";

import "./assets/css/all.min.css";
import "./assets/css/style.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default App;
