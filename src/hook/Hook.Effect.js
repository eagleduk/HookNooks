import React, { useState, useEffect } from "react";

export default function HookEffect() {
  const [effectNumber, setEffectNumber] = useState(0);
  const [notEffectNumber, setNotEffectNumber] = useState(0);

  useEffect(
    () => {
      console.log("Effect");
    },
    // effect 값이 변경될때만 실행한다.
    [effectNumber]
  );

  return (
    <>
      <button onClick={() => setEffectNumber(effectNumber + 1)}>
        Use Effect {effectNumber}
      </button>
      <button onClick={() => setNotEffectNumber(notEffectNumber + 1)}>
        Use Not Effect {notEffectNumber}{" "}
      </button>
    </>
  );
}
