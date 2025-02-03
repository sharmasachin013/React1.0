import React from "react";
import "./assets/js/global.js";
import Header from "./components/Header/Header";
import NavBar from "./components/nav/NavBar";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category.jsx";
import Home from "./pages/Home.jsx";
import SingleNews from "./pages/SingleNews.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
