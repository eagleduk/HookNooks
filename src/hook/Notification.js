import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if (window.Notification.permission !== "granted") {
      window.Notification.requestPermission().then(permission => {
        if (permission === "granted") new window.Notification(title, options);
        else return;
      });
    } else {
      new window.Notification(title, options);
    }
  };

  return fireNoti;
};

const Notification = () => {
  const onNoti = useNotification("Notification Title", {
    body: "I Test Notification"
  });
  return <button onClick={onNoti}> Noti </button>;
};

export default Notification;
