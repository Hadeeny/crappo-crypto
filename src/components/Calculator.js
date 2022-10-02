import React, { useState } from "react";

const Calculator = () => {
  const [hashRate, setHashRate] = useState("");
  const [unit, setUnit] = useState("");
  return (
    <div className="cal">
      <div className="calculator">
        <form className="cal-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter your hashrate here"
            value={hashRate}
            onChange={(e) => setHashRate(e.target.value)}
          />
          <select
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="th/s">TH/s</option>
            <option value="h/s">H/s</option>
            <option value="kh/s">KH/s</option>
            <option value="mh/s">MH/s</option>
            <option value="gh/s">GH/s</option>
          </select>
          <div href="/" className="cal-btn">
            Calculate
          </div>
        </form>
        <h2 style={{ textAlign: "left" }}>ESTIMATE 24 HOUR REVENUE</h2>
        <h2 style={{ textAlign: "left" }}>0.055 130 59 ETH ($1275)</h2>
        <h3>
          Revenue will change based on mining difficulty and Ethereum price.
        </h3>
      </div>
    </div>
  );
};

export default Calculator;
