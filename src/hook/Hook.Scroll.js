import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
};

const HookScroll = () => {
  const { x, y } = useScroll();
  return (
    <h4
      style={{ left: 500, position: "fixed", color: y > 100 ? "red" : "blue" }}
    >
      Hello
    </h4>
  );
};

export default HookScroll;
