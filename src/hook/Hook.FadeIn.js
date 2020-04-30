import React, { useRef, useEffect } from "react";

const useFadeIn = (duration = 1, delay = 4) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default function HookFadeIn() {
  const h4El = useFadeIn(3, 0);
  const pEl = useFadeIn(5, 3);
  return (
    <>
      <h4 {...h4El}> Hello </h4>
      <p {...pEl}> Hi </p>
    </>
  );
}
