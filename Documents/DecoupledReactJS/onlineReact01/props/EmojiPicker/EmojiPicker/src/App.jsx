import { useState } from "react";
import Emoji from "./components/Emoji";
import "./App.css";

function App() {
  return (
    <>
      <h1>Emoji Picker!</h1>
      <Emoji e1="😊" e2="😊" e3="😊" />
      <Emoji e1="😊" e2="😒" e3="😂" />
      <Emoji e1="😊" e2="😁" e3="😉" />
    </>
  );
}

export default App;
