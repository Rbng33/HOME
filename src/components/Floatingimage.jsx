import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo1.svg"

function FloatingImage() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFloating((prevIsFloating) => !prevIsFloating);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <img
      src={logo}
      alt="Floating Image"
      className={`transition-transform  duration-1000 h-1/2 w-1/2 hover:scale-105 duration-300" ${
        isFloating ? "translate-y-3" : ""
      }`}
    />
  );
}

export default FloatingImage;