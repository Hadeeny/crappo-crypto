import React, { useState, useEffect, useRef } from "react";
import logo from "../../src/logo.svg";
import play from "../Crypto images/play.svg";
import hero from "../Crypto images/hero-img.png";
import Stats from "./Stats";
import WhyUs from "./WhyUs";
import { gsap, Power3 } from "gsap";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const buttonBlue = useRef();
  const fastest = useRef();
  const heroAnime = useRef();
  useEffect(() => {
    gsap.fromTo(
      fastest.current,
      { y: 200, ease: Power3.easeOut, opacity: 0 },
      { y: 0, ease: Power3.easeOut, opacity: 1, delay: 0.3, duration: 2 }
    );
    gsap.fromTo(
      [heroAnime.current, "#percent", buttonBlue.current],
      { scale: 0.4, ease: Power3.easeOut, opacity: 0, duration: 2 },
      {
        scale: 1,
        ease: Power3.easeOut,
        opacity: 1,
        delay: 0.3,
        duration: 2,
      }
    );
  }, []);
  return (
    <>
      <div className="hero">
        <nav>
          <div className="logo">
            <img alt="logo" src={logo} />
          </div>
          <div className={`nav-links ${toggle && "nav-active"}`}>
            <ul className="pri-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <ul className="sec-links">
              <li className="login">
                <a href="/">Login</a>
              </li>
              <span className="v-bar"></span>
              <li className="reg">
                <a href="/">Register</a>
              </li>
            </ul>
          </div>

          <div onClick={toggleMenu} className={`burger ${toggle && "active"}`}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <div className="section1">
          <div className="sec-con">
            <div className="deal">
              <div id="percent" className="save">
                70% save
              </div>
              <p>for the best black friday deals</p>
            </div>
            <div ref={fastest}>
              <h1>Fastest & Secure Platform Io Invest In Cryto </h1>
              <p className="texter">
                buy and sell crytocurrencies by trusted 10M wallets, in over
                100M transactions{" "}
              </p>
            </div>
            <div ref={buttonBlue} className="btn-blue">
              Try for FREE
              <img alt="play" className="play-circle" src={play} />
            </div>
          </div>
          <img ref={heroAnime} src={hero} className="hero-img" alt="hero" />
        </div>
        <Stats />
        <WhyUs />
      </div>
    </>
  );
};

export default Hero;
