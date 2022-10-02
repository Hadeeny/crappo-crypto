import React, { useRef, useEffect } from "react";
import why from "../Crypto images/why-img.png";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const WhyUs = () => {
  const blue = useRef();
  const img = useRef();

  // useEffect(() => {
  //   gsap.to("#whyus", {
  //     x: 200,
  //     ease: Power3.easeOut,
  //     scrollTrigger: {
  //       trigger: "#whyus",
  //       start: "top center",
  //       end: "top 100px",
  //       scrub: false,
  //       toggleActions: "restart none none none",
  //       // markers: true,
  //       // id: "scrub",d
  //     },
  //   });
  // });

  useEffect(() => {
    const anim = gsap.fromTo(
      "#whyus",
      { y: 100, ease: Power3.easeOut, duration: 2, opacity: 0 },
      { y: 0, ease: Power3.easeOut, delay: 0.3, duration: 2, opacity: 1 }
    );

    const hero = gsap.fromTo(
      ["#img"],
      { scale: 0.4, ease: Power3.easeOut, opacity: 0, duration: 2 },
      {
        scale: 1,
        ease: Power3.easeOut,
        opacity: 1,
        delay: 0.3,
        duration: 2,
      }
    );

    ScrollTrigger.create({
      trigger: "#whyus",
      scrub: false,
      toggleActions: "restart none reverse pause",
      start: "top 350px",
      end: "top 100px",
      markers: true,
      animation: anim,
    });
  });

  return (
    <>
      <div className="why-us">
        <img ref={img} id="img" alt="why-us" src={why} />
        <div id="whyus" ref={blue} className="why-con">
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
        style={{
          textAlign: "center",
          // lineHeight: "2.8em",
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
