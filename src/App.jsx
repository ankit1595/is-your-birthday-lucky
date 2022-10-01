import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [luckyNumber, setLuckyNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLucky, setIsLucky] = useState(false);

  function handleDobInput(e) {
    console.log(e.target.value);
    setDob(e.target.value);
    setErrorMessage("");
  }
  function handleLuckyNumInput(e) {
    setErrorMessage("");
    setLuckyNumber(e.target.value);
  }

  function checkBirthdayLucky() {
    setErrorMessage("");
    console.log("dob, luckyNUmber: ", dob, luckyNumber);
    if (dob && luckyNumber > 0) {
      let sumOfDob = 0;
      dob.split("").forEach((num) => {
        // console.log("num", parseInt(num));
        if (!isNaN(Number(num))) {
          sumOfDob = sumOfDob + Number(num);
        }
      });
      console.log(sumOfDob);
      if (sumOfDob % luckyNumber === 0) {
        setIsLucky(true);
      } else {
        setIsLucky(false);
      }
    } else {
      setErrorMessage("Invalid Input");
    }
  }

  function resetForm() {
    setDob("");
    setLuckyNumber("");
    setErrorMessage("");
  }
  return (
    <div className="App">
      <h1>Is your Birthday Lucky? 🤩</h1>
      <label htmlFor="dob">Date of Birth: </label>
      <input id="dob" type="date" value={dob} onChange={handleDobInput} />
      <label htmlFor="luckyNumber">Lucky Number: </label>
      <input
        id="luckyNumber"
        type="number"
        value={luckyNumber}
        onChange={handleLuckyNumInput}
      />
      <button onClick={checkBirthdayLucky}>Check</button>
      <button onClick={resetForm}>Reset</button>
      <div style={{ color: "red" }}>{errorMessage}</div>
      <div style={{ color: "green" }}>{isLucky?"Your Birthday is Lucky" : "Afsos! "}</div>
    </div>
  );
}

export default App;
