import React from "react";
import Home from "../../pages/Home.jsx";
import Category from "../../pages/Category.jsx";

function NavBar() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </div>
  );
}

export default NavBar;
