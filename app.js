import { React} from 'react'
import { useState } from 'react';
import './App.css';

function App() {
  const [coin, setCoin] = useState("ASIM")
  return (
    <div>
      <h3>İsminiz : {coin}</h3>
      <button onClick={()=>{setCoin("ÖZENİR")}}>TIKLA</button>
    </div>
  );
}

export default App;
