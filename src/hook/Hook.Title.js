import React, { useState, useEffect } from "react";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default function HookTitle() {
  const titleUpdate = useTitle("Loading....");
  setTimeout(() => titleUpdate("Home"), 5000);
  return <>Title Update</>;
}
