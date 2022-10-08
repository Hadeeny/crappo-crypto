import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector("#news"),
      { scale: 0.3, opacity: 0, duration: 3 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: el.querySelector("#news"),
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
    <div ref={ref} id="news" className="newsletter">
      <div>
        <h3>Start Mining Now</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum.
          <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
          saepe.
        </p>
      </div>
      <form>
        <input placeholder="enter message" />
        <a href="/" className="white-btn">
          Subscribe
        </a>
      </form>
    </div>
  );
};

export default Newsletter;
