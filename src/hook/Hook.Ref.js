import React, { useRef, useEffect } from "react";

const useClick = onClick => {
  if (typeof onClick !== "function") return;
  // 태그의 reference 값을 가져온다.
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // component가 unmount 될때 실행된다.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function HookRef() {
  const event = () => console.log("Hello Event");
  const click = useClick(event);
  return (
    <>
      <h4 ref={click}>click me</h4>
    </>
  );
}
