import React, { useRef, useState, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Calculator = () => {
  const [hashRate, setHashRate] = useState("");
  const [unit, setUnit] = useState("");
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".calculator"),
      { scale: 0.3, opacity: 0, duration: 3 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector(".calculator"),
          start: "top center",
          end: "bottom top",
          scrub: false,
          toggleActions: "play play reverse none",
          markers: false,
        },
      }
    );
  });

  return (
    <div className="cal" ref={ref}>
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
