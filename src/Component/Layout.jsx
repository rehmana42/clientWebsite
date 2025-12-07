import React, { useState, useEffect } from "react";
import Stair from "./Stair";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [showOutlet, setShowOutlet] = useState(true);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Trigger Stair animation on route change
    setShowOutlet(false); // hide the page first
    setPlayAnimation(true);
  }, [location]);

  const handleAnimationComplete = () => {
    setShowOutlet(true); // show the page after animation
    setPlayAnimation(false); // stop rendering Stair
  };

  return (
    <>
      {playAnimation && <Stair key={location.pathname} onComplete={handleAnimationComplete} />}
      {showOutlet && <Outlet />}
    </>
  );
};

export default Layout;
