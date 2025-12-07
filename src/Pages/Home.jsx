import React, { useRef } from "react";
import TopBar from "../Component/TopBar";
import { useGSAP } from "@gsap/react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Home = () => {
  const containerRef = useRef(null);
  const textWrapperRef = useRef(null);
  const imageWrapperRef=useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    /** ---------------- INTRO TEXT ANIMATION ---------------- */
    // const split = new SplitText("#intro-text", {
    //   type: "chars,words,lines",
    // });

    // gsap.from(split.chars, {
    //   y: 200,
    //   autoAlpha: 0,
    //   stagger: 0.05,
    //   duration: 1.5,
    //   ease: "power3.out",
    // });

    // gsap.to("#intro", {
    //   opacity: 0,
    //   scale: 4,
    //   rotateX: 25,
    //   duration: 1.2,
    //   delay: 1.4,
    //   ease: "power3.inOut",
    //   onComplete: () => gsap.set("#intro", { display: "none" }),
    // });

    /** ---------------- INFINITE MARQUEE TEXT ---------------- */
    gsap.to(textWrapperRef.current, {
      xPercent: -100,
      repeat: -1,
      yoyo:true,
      duration: 12,
      ease: "linear",
    });


    //--------------shile effect ---------------
  const wrapper = imageWrapperRef.current;
const shine = wrapper.querySelector(".shine-layer");

const shineMove = (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  gsap.to(shine, {
    opacity: 1,
    x: x,
    y: y,
    duration: 0.25,
    ease: "power2.out",
  });
};

const shineLeave = () => {
  gsap.to(shine, {
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
};

wrapper.addEventListener("mousemove", shineMove);
wrapper.addEventListener("mouseleave", shineLeave);

    /** ---------------- PARALLAX / TILT EFFECT ---------------- */
    const container = containerRef.current;

    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(container, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 200,
        transformOrigin: "center",
        duration: 0.4,
      });
    };

    container.addEventListener("mousemove", handleMouse);

    return () => container.removeEventListener("mousemove", handleMouse);
  });

  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      
      {/* INTRO SCREEN */}
      {/* <div id="intro" className="absolute inset-0 bg-black flex items-center justify-center z-50">
        <h1
          id="intro-text"
          className="text-white text-5xl sm:text-7xl font-montserrat font-bold"
        >
          M.K. ENGINEERING
        </h1>
      </div> */}



      {/* MAIN CONTENT */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* BACKGROUND MOVING TEXT */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
          <div
            ref={textWrapperRef}
            className="flex sm:whitespace-nowrap opacity-30 text-gray-500"
          >
            {/* Copy 1 */}
            <h1 className="text-6xl   sm:text-[120px] font-bold mr-10">
              MK ENGINEERING • INDUSTRIAL MACHINERY IMPORT • AUTOMATION SOLUTIONS • HIGH-QUALITY INDUSTRIAL PRODUCTS •
            </h1>

            {/* Copy 2 – required for smooth loop */}
            <h1 className="text-6xl   sm:text-[120px] font-bold mr-10">
              MK ENGINEERING • INDUSTRIAL MACHINERY IMPORT • AUTOMATION SOLUTIONS • HIGH-QUALITY INDUSTRIAL PRODUCTS •
            </h1>
          </div>
        </div>

        {/* FRONT IMAGE */}
        <div ref={imageWrapperRef} className="relative z-10  flex h-full items-center justify-center">
          <img src={assets.product2} className="w-[430px]" />
              {/* Shine Layer */}
    <div className="shine-layer absolute inset-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
