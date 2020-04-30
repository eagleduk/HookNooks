import React, { useRef } from "react";

const useFullScreen = onCallback => {
  const element = useRef();

  const callback = value => {
    if (typeof onCallback !== "function") {
      return;
    }
    onCallback(value);
  };

  const fullImage = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      callback(true);
    }
  };

  const smallImage = () => {
    if (!document.fullscreen) return;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    callback(false);
  };

  return { element, fullImage, smallImage };
};

const HookFullScreen = () => {
  const ontooglefunction = value => {
    console.log(value ? "Full Screen" : "Small Screen");
  };
  const { element, fullImage, smallImage } = useFullScreen(ontooglefunction);
  return (
    <div ref={element}>
      <img
        src="https://i.gifer.com/fy2H.gif"
        alt="cat"
        style={{ width: 200, height: 300 }}
      />
      <br />
      <button onClick={fullImage}> Full Screen </button>
      <button onClick={smallImage}> Exit Full Screen </button>
    </div>
  );
};

export default HookFullScreen;
