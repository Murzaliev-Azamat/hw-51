import React, {useState} from 'react';
import './App.css';
import Ball from "./Ball/Ball";


function App() {
  const [number, setNumber] = useState([

    ]);
  const changeNumber = () => {
    console.log("clicked")
  }
  return (
    <div className="">
      <button onClick={changeNumber}>New numbers</button>
      <Ball number={Math.floor(Math.random() * 32) + 5}/>
    </div>
  );
}

export default App;
