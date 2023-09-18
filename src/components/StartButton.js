import React, { useCallback, useState } from "react";
import "./StartButton.css";

const StartButton = ({ onClick, toggleSlider }) => {
  const [buttonText, setButtonText] = useState("Start");

  const onButtonClicked = useCallback(() => {
    if (buttonText === "Start") {
      setButtonText("Stop");
      onClick(); // Toggle audio
    } else {
      setButtonText("Start");
      onClick(); // Toggle audio
      toggleSlider(); // Toggle ImageSlider interval
    }
  }, [buttonText, onClick, toggleSlider]);

  return (
    <button className="startButton" onClick={onButtonClicked}>
      {buttonText}
    </button>
  );
};

export default StartButton;
