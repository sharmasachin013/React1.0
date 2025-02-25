class App extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Ravi"
          age={15}
          subjects={["phy", "chem", "maths"]}
          marks={[50, 60, 70]}
        />
      </div>
    );
  }
}

let myDiv = document.querySelector("#root");
ReactDOM.render(<App />, myDiv);
