import React from "react";
import "./assets/js/global.js";
import Header from "./components/Header/Header";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar.jsx";
import SingleNews from "./pages/SingleNews.jsx";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/singlenews" element={<SingleNews />}></Route>
      </Routes>
    </>
  );
}

export default App;
