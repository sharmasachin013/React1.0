import React from "react";
import foods from "./foods";
import { choice, remove } from "./helper";

function Fruits() {
  let fruit = choice(foods);
  let remaining = remove(foods, fruit);

  return (
    <div>
      <p>Total fruits: {foods.length}</p>
      <p>Total fruits: {foods.join()}</p>
      <p>Chosen fruit: {fruit}</p>
      <p>Remaining fruits:{remaining.length}</p>
      <p>They are:{remaining.join()}</p>
    </div>
  );
}

export default Fruits;
