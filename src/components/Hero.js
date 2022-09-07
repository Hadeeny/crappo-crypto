import React from "react";
import logo from "../../src/logo.svg";
import play from "../Crypto images/play.svg";
import hero from "../Crypto images/hero-img.png";
import Stats from "./Stats";
import WhyUs from "./WhyUs";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="header">
          <img alt="logo" src={logo} />
          <div className="header-right">
            <a href="#product">Products</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#login" className="login">
              Login
            </a>
            <button href="#Register" className="nav-cta">
              Register
            </button>
          </div>
        </div>
        <div className="section1">
          <div className="sec-con">
            <div className="deal">
              <span>70% save</span>
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
          <img src={hero} alt="hero" />
        </div>
        <Stats />
        <WhyUs />
      </div>
    </>
  );
};

export default Hero;
