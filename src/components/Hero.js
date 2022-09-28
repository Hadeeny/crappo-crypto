import React, { useState } from "react";
import logo from "../../src/logo.svg";
import play from "../Crypto images/play.svg";
import hero from "../Crypto images/hero-img.png";
import Stats from "./Stats";
import WhyUs from "./WhyUs";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="hero">
        <nav className="header">
          <ul className="menu">
            <li className="logo">
              <img alt="logo" src={logo} />
            </li>
            <li className={toggle ? "item active" : "item"}>
              <a href="#">Home</a>
            </li>
            <li className={toggle ? "item active" : "item"}>
              <a href="#">About</a>
            </li>
            <li className={toggle ? "item active" : "item"}>
              <a href="#">Services</a>
            </li>

            <li className={toggle ? "item active" : "item button"}>
              <a href="#">Login</a>
            </li>
            <li className={toggle ? "item active" : "item button secondary"}>
              <a href="#">Sign Up</a>
            </li>
            <li onClick={toggleMenu} className=" toggle ">
              <span className="bars"></span>
            </li>
          </ul>
        </nav>
        <div className="section1">
          <div className="sec-con">
            <div className="deal">
              <div className="save">70% save</div>
              <p>for the best black friday deals</p>
            </div>
            <div>
              <h1>Fastest & Secure Platform Io Invest In Cryto </h1>
              <p>
                buy and sell crytocurrencies by trusted 10M wallets, in over
                100M transactions{" "}
              </p>
            </div>
            <div className="btn-blue">
              Try for FREE
              <img alt="play" className="play-circle" src={play} />
            </div>
          </div>
          <img src={hero} className="hero-img" alt="hero" />
        </div>
        <Stats />
        <WhyUs />
      </div>
    </>
  );
};

export default Hero;
