import { useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState('');
  async function getAdvice() {
    if (count >= 10) {
      setCount(10);
      alert('You have exceeded the limit of advices');
      return false;
    } else {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setCount(count+1);
      setAdvice(response.data.slip.advice);
    }
  }
  return <div>
    <h1>Advice App</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <h2>{advice}</h2>
    <h3>{`You have read ${count} pieces of advice today!`}</h3>
    <h4>Note: You can only read 10 advice per day</h4>
  </div>
}