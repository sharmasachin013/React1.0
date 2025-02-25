import { useState } from "react";
import Student from "./Student";

function App() {
  return (
    <>
      <h3>Student Details!</h3>
      <Student
        name="Ravi"
        age={25}
        subjects={["phy", "chem", "maths"]}
        marks={[50, 60, 70]}
      />
    </>
  );
}

export default App;
