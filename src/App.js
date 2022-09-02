import React from "react";
import './index.css';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <h1>Quiz cards</h1>
      <h2>Click on a card to reveal the answer</h2>
    <div className="cards">  
      <Card frontSide="Messi or Ronaldo ?" backSide="Bruh... its not even a debate..." />
      <Card frontSide="Which is the best team in the world ?" backSide="FC Barcelona" />
      <Card frontSide="The best midfield trio oat ?" backSide="Iniesta Busquets Xavi" />
    </div>
    </div>
  );
}

export default App;
