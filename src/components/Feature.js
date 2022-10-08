import React, { useRef, useEffect } from "react";
import feature1 from "../Crypto images/feature-1-img.png";
import feature2 from "../Crypto images/feature-2-img.png";
import feature3 from "../Crypto images/feature-3-img.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".grow"),
      { scale: 0.3, opacity: 0, duration: 3 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector(".grow"),
          start: "center center",
          end: "bottom top",
          scrub: false,
          toggleActions: "play play reverse none",
          markers: false,
        },
      }
    );
  });

  return (
    <section ref={ref} className="feature">
      <h2 className="grow">
        Market Sentiments, Portfolio, And Run The
        <br /> Infrastructure Of Your Choice
      </h2>
      <div className="row">
        <div className="first">
          <h3>Inverst Smart</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="/" className="blue-btn">
            learn more
          </a>
        </div>
        <img id="img1" alt="feature1" src={feature1} />
      </div>
      <div className="row">
        <img alt="feature2" id="img2" className="img2" src={feature2} />
        <div className="second">
          <h3>Detailed Statistics</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="/" className="blue-btn">
            learn more
          </a>
        </div>
      </div>
      <div className="row">
        <div className="third">
          <h3>Grow Your Profit And Track Your Investments</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="/" className="blue-btn">
            learn more
          </a>
        </div>
        <img alt="feature3" id="img3" className="img2" src={feature3} />
      </div>
    </section>
  );
};

export default Feature;
