import React, { useState } from "react";
import ImageSlider from "./components/ImageSlider";
import AudioPlayer from "./components/AudioPlayer";
import StartButton from "./components/StartButton";
import "./App.css";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSliderPlaying, setIsSliderPlaying] = useState(false); // State to control the ImageSlider interval

  const toggleAudio = () => {
    const audio = document.getElementById("music");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Callback function to toggle the ImageSlider interval
  const toggleSliderInterval = () => {
    setIsSliderPlaying(!isSliderPlaying);
  };

  return (
    <div className="container">
      <div className="title">Happy Birthday Ori</div>
      <ImageSlider isPlaying={isPlaying} />
      <AudioPlayer />
      <StartButton onClick={toggleAudio} toggleSlider={toggleSliderInterval} />
    </div>
  );
};

export default App;
