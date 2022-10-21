import React, {useState} from 'react';
import './App.css';
import Ball from "./Ball/Ball";


function App() {
  const randomNumbers = () => {
    const massRandomNumbers: number[] = [];
    while (massRandomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 32) + 5;
      if (!massRandomNumbers.includes(randomNumber)){
        massRandomNumbers.push(randomNumber);
      }
    }
    massRandomNumbers.sort((a, b) => a - b);
    return massRandomNumbers;
  };


  const [numbers, setNumbers] = useState(randomNumbers());

  const updateRandomNumbers = () => {
    setNumbers(randomNumbers());
  };

  return (
    <div className="App">
      <button onClick={updateRandomNumbers}>New numbers</button>
      <div className="container">
      <Ball number={numbers[0]}/>
      <Ball number={numbers[1]}/>
      <Ball number={numbers[2]}/>
      <Ball number={numbers[3]}/>
      <Ball number={numbers[4]}/>
      </div>
    </div>
  );
}

export default App;
