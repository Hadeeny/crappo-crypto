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
        <nav>
          <div className="logo">
            <img alt="logo" src={logo} />
          </div>
          <div className={`nav-links ${!toggle && "nav-active"}`}>
            <ul className="pri-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="sec-links">
              <li className="login">
                <a href="#">Login</a>
              </li>
              <span className="v-bar"></span>
              <li className="reg">
                <a href="#">Register</a>
              </li>
            </ul>
          </div>

          <div
            onClick={toggleMenu}
            className={toggle ? "burger" : "burger toggle"}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
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
