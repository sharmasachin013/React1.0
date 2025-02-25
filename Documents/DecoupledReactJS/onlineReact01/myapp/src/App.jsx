import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ShoppingCart items={["Samsung-Mobile", "Fast Track-Watch"]} />
      </div>
    </>
  );
}

export default App;
