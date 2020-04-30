import React, { useState, useEffect } from "react";

const useNetwork = onChange => {
  const [network, setNetwork] = useState(navigator.onLine);

  const handle = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    // set을 해주지 않으면 return값이 변경되지 않는다.
    setNetwork(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handle);
    window.addEventListener("offline", handle);
    return () => {
      window.removeEventListener("online", handle);
      window.removeEventListener("offline", handle);
    };
  }, []);

  return network;
};

const HookNetwork = () => {
  const change = value => {
    console.log(`Line is ${value}`);
  };
  const network = useNetwork(change);
  return <h4> {network ? "online" : "offline"} </h4>;
};

export default HookNetwork;
