import { useEffect, useRef } from "react";
import gsap from "gsap";

const Stair = ({ onComplete }) => {
  const parentRef = useRef(null);

  useEffect(() => {
    const stairs = parentRef.current.querySelectorAll(".stair");

    gsap.set(parentRef.current, { display: "block", y: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(parentRef.current, { display: "none" });
        onComplete?.(); // notify parent that animation finished
      },
    });

    // STAIR ENTER
    tl.from(stairs, {
      height: 0,
      duration: 0.6,
      stagger: { each: 0.1, from: "start" },
      ease: "power3.out",
    })
      .to(stairs, { delay: 0.2 })
      .to(stairs, {
        y: "-100%",
        duration: 0.6,
        stagger: { each: 0.1, from: "end" },
        ease: "power3.in",
      });
  }, [onComplete]);

  return (
    <div
      ref={parentRef}
      className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none"
    >
      <div className="flex h-full overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="stair w-1/2 bg-white h-screen"></div>
        ))}
      </div>
    </div>
  );
};

export default Stair;
