import React from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default function Confirm() {
  const onConfirm = () => console.log("Deleting World...");
  const onCancel = () => console.log("Cancel...");
  const onClick = useConfirm("Are you sure?", onConfirm, onCancel);
  return <button onClick={onClick}>Delete the World.</button>;
}
