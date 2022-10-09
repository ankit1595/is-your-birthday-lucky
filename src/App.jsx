import { useState } from "react";
import "./App.css";

import twitterLogo from "./images/brand-logos/logo-twitter.svg";
import githubLogo from "./images/brand-logos/logo-github.svg";
import linkedinLogo from "./images/brand-logos/logo-linkedin.svg";
import mailLogo from "./images/brand-logos/mail.svg";
import angelLogo from "./images/brand-logos/angel-icon.svg";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const [dob, setDob] = useState("");
  const [luckyNumber, setLuckyNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [output, setOutput] = useState("");

  function clearMessage() {
    setOutput("");
    setErrorMessage("");
  }

  function handleDobInput(e) {
    console.log(e.target.value);
    setDob(e.target.value);
    clearMessage();
  }
  function handleLuckyNumInput(e) {
    clearMessage();
    setLuckyNumber(e.target.value);
  }

  function checkBirthdayLucky() {
    clearMessage();
    console.log("dob, luckyNUmber: ", dob, luckyNumber);
    if (dob && luckyNumber > 0) {
      let sumOfDob = 0;
      dob.split("").forEach((num) => {
        if (!isNaN(Number(num))) {
          sumOfDob = sumOfDob + Number(num);
        }
      });
      console.log(sumOfDob);
      if (sumOfDob % luckyNumber === 0) {
        setOutput("Your Birthday is Lucky 🎊");
      } else {
        setOutput("Afsos! your birthday is NOT lucky 🎃");
      }
    } else {
      setErrorMessage("Invalid Input");
    }
  }

  function resetForm() {
    setDob("");
    setLuckyNumber("");
    clearMessage();
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
      <button
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          borderColor: "#dc3545",
        }}
        onClick={resetForm}>
        Reset
      </button>
      <div className="output" style={{ color: "red" }}>{errorMessage}</div>
      <div className="output" style={{ color: "green" }}>
        {output}
      </div>
      <p>*We are not storing your data</p>
      <footer className="footer">
        <div className="footer-header">
          © | 2022 |{" "}
          <a
            className="link"
            href="http://ankit-sharma15.netlify.app"
            target={"_blank"}>
            Ankit Sharma
          </a>{" "}
        </div>
        <ul className="list-non-bullet link-social">
          <li className="list-item-inline">
            <a
              className="link"
              href="https://twitter.com/ankit1595"
              target="_blank">
              <img src={twitterLogo} alt="twitter-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/ankit1595"
              target="_blank">
              <img src={githubLogo} alt="github-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/ankit1595"
              target="_blank">
              <img src={linkedinLogo} alt="linkedin-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="mailto:ankit.95sharma@gmail.com"
              target="_blank">
              <img src={mailLogo} alt="mail-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.angel.co/u/ankit1595"
              target="_blank">
              <img src={angelLogo} alt="angel-logo" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
