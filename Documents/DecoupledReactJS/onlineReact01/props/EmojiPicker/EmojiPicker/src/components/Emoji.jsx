import React from "react";

function Emoji(props) {
  const { e1, e2, e3 } = props;
  const res = e1 == e2 && e2 == e3;
  console.log(res);
  return (
    <div>
      <span>{e1}</span>
      <span>{e2}</span>
      <span>{e3}</span>
      <p>{res ? "Emoji's are equal" : "Emoji's are not equal"}</p>
    </div>
  );
}

export default Emoji;
