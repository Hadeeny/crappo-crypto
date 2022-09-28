import React from "react";
import feature1 from "../Crypto images/feature-1-img.png";
import feature2 from "../Crypto images/feature-2-img.png";
import feature3 from "../Crypto images/feature-3-img.png";

const Feature = () => {
  return (
    <section className="feature">
      <h2>
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
          <a href="#" className="blue-btn">
            learn more
          </a>
        </div>
        <img alt="feature1" src={feature1} />
      </div>
      <div className="row">
        <img alt="feature2" className="img2" src={feature2} />
        <div className="second">
          <h3>Detailed Statistics</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </p>
          <a href="#" className="blue-btn">
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
          <a href="#" className="blue-btn">
            learn more
          </a>
        </div>
        <img alt="feature3" className="img2" src={feature3} />
      </div>
    </section>
  );
};

export default Feature;
