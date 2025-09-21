import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // for navigation

  // handle button clicks
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1)); //  remove last character
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-card">
        <h2 className="calc-title">Calculator</h2>

        <input
          type="text"
          className="calc-display"
          value={input}
          readOnly
        />

        <div className="calc-buttons">
          {[
            "7","8","9","/","4","5","6","*","1","2","3","-",
            "0",".","=","+","C","⌫"  // ✅ Added Backspace
          ].map((btn) => (
            <button
              key={btn}
              className={`btn 
                ${btn === "C" ? "clear" : ""} 
                ${btn === "=" ? "equal" : ""} 
                ${btn === "⌫" ? "backspace" : ""}`
              }
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        <button className="btn back-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
