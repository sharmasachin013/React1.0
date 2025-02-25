class Student extends React.Component {
  render() {
    const { subjects, marks } = this.props;
    let total = 0;
    // marks.forEach((x) => {
    //   total += x;
    // });
    let arr = marks.map((m) => {
      total += m;
      return <li>{m}</li>;
    });
    return (
      <div>
        <h3>Student Details!</h3>
        <p>Name:{this.props.name}</p>
        <p>Age:{this.props.age}</p>
        <p>subjects</p>
        <ul>
          {subjects.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
        <p>Marks:</p>
        <ul>{arr}</ul>
        <p>Total:{total}</p>
        <p>
          Result: <b>{total >= 150 ? "Pass" : "Fail"}</b>
        </p>
      </div>
    );
  }
}
