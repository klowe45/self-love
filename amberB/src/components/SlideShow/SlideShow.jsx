import { useEffect, useState } from "react";
import "./SlideShow.css";

function SlideShow({ images, interval = 100000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt="" className="slideshow__image" />
    </div>
  );
}

export default SlideShow;
