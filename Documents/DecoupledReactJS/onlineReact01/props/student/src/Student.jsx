import { Reat } from "react";

function Student(props) {
  const { subjects, marks } = props;
  let total = 0;

  let arr = marks.map((m) => {
    total += m;
    return <li>{m}</li>;
  });
  // marks.forEach((element) => {
  //   total += element;
  // });

  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>subjects:</p>
      <ul>
        {subjects.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
      <p>Marks:</p>
      <ul>
        {marks.map((m) => (
          <li>{m}</li>
        ))}
        {/* {arr} */}
      </ul>
      <p>Total:{total}</p>
      <p>
        Result: <b>{total >= 150 ? "Pass" : "Fail"}</b>
      </p>
    </div>
  );
}

export default Student;
