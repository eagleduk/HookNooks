import React, { useState } from "react";

const tabContent = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2"
  }
];

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    content: allTabs[currentIndex],
    setCurrentIndex: setCurrentIndex
  };
};

export default function HookTab() {
  const { content, setCurrentIndex } = useTab(0, tabContent);
  return (
    <>
      {tabContent.map((content, index) => (
        <button key={index} onClick={() => setCurrentIndex(index)}>
          {content.tab}
        </button>
      ))}
      <h2> {content.content} </h2>
    </>
  );
}
