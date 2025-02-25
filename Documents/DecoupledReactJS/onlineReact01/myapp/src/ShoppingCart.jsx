import React, { useState, useEffect } from "react";

const ShoppingCart = ({ items }) => {
  const [cartItems, setCartItems] = useState(items);
  const [total, setTotal] = useState(items.length);

  useEffect(() => {
    console.log("Hello");
    const timer = setTimeout(() => {
      setCartItems((prevItems) => [...prevItems, "MacBook Air Laptop"]);
      setTotal((prevTotal) => prevTotal + 1);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div>
      <h2>Your Cart Details</h2>
      <h3>Product Details: {cartItems.join(", ")}</h3>
      <h3>Product Counting: {total}</h3>
    </div>
  );
};

export default ShoppingCart;
