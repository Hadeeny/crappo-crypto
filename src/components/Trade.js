import React, { useEffect, useRef } from "react";
import Calculator from "./Calculator";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Trade = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector(".trades"),
      { scale: 0.3, opacity: 0, duration: 3 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector(".trades"),
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
    <section ref={ref} className="trade">
      <Calculator />
      <h2 className="trades">
        Trade Securely And Market The High Growth Cryptocurrencies.
      </h2>
    </section>
  );
};

export default Trade;
