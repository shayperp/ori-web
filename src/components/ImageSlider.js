import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ isPlaying }) => {
  const images = [
    "http://localhost:3000/image0.png",
    "http://localhost:3000/image1.jpg",
    "http://localhost:3000/image2.jpg",
    "http://localhost:3000/image3.jpg",
    "http://localhost:3000/image4.jpg",
    "http://localhost:3000/image5.jpg",
    "http://localhost:3000/image6.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      if (!initialImageDisplayed) {
        // If initial image has not been displayed yet, skip it
        setCurrentImage(1); // Start from the second image (index 1)
        setInitialImageDisplayed(true);
      }

      interval = setInterval(() => {
        setCurrentImage((prevImage) => {
          if (prevImage + 1 === images.length) {
            // If the current image is the last one, skip "image0"
            return 1; // Start from the second image (index 1)
          } else {
            return (prevImage + 1) % images.length;
          }
        });
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, images.length, initialImageDisplayed]);

  return (
    <div className="slider">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
};

export default ImageSlider;
