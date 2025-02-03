import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export default function MainMenu() {
  const [mainMenu, setMainMenu] = useState([]); // State to hold the menu data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to hold error if any

  // Function to load menu data
  const loadMenu = async () => {
    try {
      const endPoint = "https://dev-backendnews.pantheonsite.io/api/menu/main";
      const response = await fetch(endPoint);

      if (response.status === 200) {
        const data = await response.json();
        setMainMenu(data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return mainMenu.map((item, index) =>
    item.sub_menu ? (
      <li key={index} className="nav-item dropdown">
        <Link
          to={item.url}
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="true"
        >
          {item.title}
        </Link>
        <div className="dropdown-menu rounded-0 m-0">
          {item.sub_menu.map((subItem, subIndex) => (
            <Link to={item.url} key={subIndex} className="dropdown-item">
              {subItem.title}
            </Link>
          ))}
        </div>
      </li>
    ) : (
      <li key={index} className="nav-item">
        <Link to={item.url} key={index} className="nav-link">
          {item.title}
        </Link>
      </li>
    )
  );
}
