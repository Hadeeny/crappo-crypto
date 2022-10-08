import React, { useRef, useEffect } from "react";
import why from "../Crypto images/why-img.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const WhyUs = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector("#img"),
      { scale: 0.3, opacity: 0, duration: 3 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector("#img"),
          start: "top center",
          end: "bottom top",
          scrub: false,
          toggleActions: "play play reverse none",
          markers: false,
        },
      }
    );
  });

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".why-con"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector(".why-con"),
          start: "top center",
          end: "bottom top",
          scrub: false,
          toggleActions: "play play reverse none",
        },
      }
    );
  });

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector("#earn"),
      { y: 200, opacity: 0, duration: 3 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector("#earn"),
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
    <>
      <div ref={ref} className="why-us">
        <img id="img" alt="why-us" src={why} />
        <div className="why-con">
          <h2>Why you should choose CHAPPO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, praesentium.
          </p>
          <a href="/" className="blue-btn">
            learn more
          </a>
        </div>
      </div>
      <div
        id="earn"
        style={{
          textAlign: "center",
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
