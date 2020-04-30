import React, { useEffect } from "react";

const useBeforeLeave = onBeforLeave => {
  if (typeof onBeforLeave !== "function") return;

  const leaveEvent = event => {
    const { clientY } = event;
    if (clientY <= 0) onBeforLeave();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", leaveEvent);
    // Component가 unmount 될때 실행된다.
    return () => {
      document.removeEventListener("mouseleave", leaveEvent);
    };
  }, []);
};

export default function LeaveDocument() {
  const beforeLeave = () => {
    console.log("Leave");
  };
  useBeforeLeave(beforeLeave);
  return <h4> Hello </h4>;
}
