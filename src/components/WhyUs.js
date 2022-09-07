import React from "react";
import why from "../Crypto images/why-img.png";

const WhyUs = () => {
  return (
    <>
      <div className="why-us">
        <img alt="why us" src={why} />
        <div className="why-con">
          <h2>Why you should choose CHAPPO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, praesentium.
          </p>
          <button>learn more</button>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          lineHeight: "2.8em",
          marginTop: "3em",
          paddingBottom: "20em",
        }}
      >
        <h2>How much you can earn with us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
          similique temporibus dignissimos tempore odio?
        </p>
      </div>
    </>
  );
};

export default WhyUs;
