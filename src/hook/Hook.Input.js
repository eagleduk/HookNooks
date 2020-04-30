import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    let willUpdate = true;
    const {
      target: { value }
    } = event;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default function HookInput() {
  const validator = value => !value.includes("@");
  const name = useInput("Mr.", validator);

  return (
    <>
      <input placeholder="Name" {...name} />
    </>
  );
}
