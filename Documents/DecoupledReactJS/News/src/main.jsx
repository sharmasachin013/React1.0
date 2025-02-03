import { createRoot } from "react-dom/client";
import "./css/style.css";
import Home from "./Components/Home.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./main.js";
import "./Components/lib/easing/easing.js";

createRoot(document.getElementById("root")).render(
  <div>
    <Home />
  </div>
);
