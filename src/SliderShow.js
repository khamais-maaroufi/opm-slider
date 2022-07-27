import "./SliderShow.css";
import React from "react";
import { useState } from "react";

const SliderShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  //   console.log(slides);
  const handelPrev = () => {
    let isLast = currentIndex === 0;
    if (isLast) {
      setCurrentIndex(4);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handelNext = () => {
    let isLast = currentIndex === 4;
    if (isLast) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100px",
  };
  return (
    <div className="Slide-container">
      <div class="arrows prev" onClick={handelPrev}></div>
      <div class="arrows next" onClick={handelNext}></div>
      <div style={slideStyle}></div>
    </div>
  );
};

export default SliderShow;
