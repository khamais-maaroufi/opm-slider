import "./App.css";
import SliderShow from "./SliderShow";
import React from "react";

function App() {
  const Slides = [
    {
      url: "https://rare-gallery.com/thumbs/546616-Saitama-One.png",
      title: "Saitama1",
    },
    {
      url: "https://rare-gallery.com/thumbs/504490-Saitama-One.png",
      title: "Saitama2",
    },
    {
      url: "https://rare-gallery.com/thumbs/3001355-2649x1406-one-punch-man-saitama-one-punch-man.jpg",
      title: "Saitama3",
    },
    {
      url: "https://rare-gallery.com/thumbs/504316-Saitama-One.jpg",
      title: "Saitama4",
    },
    {
      url: "https://rare-gallery.com/thumbs/3002019-1920x1080-one-punch-man-saitama-one-punch-man.jpg",
      title: "Saitama5",
    },
  ];
  return (
    <div className="App">
      <SliderShow slides={Slides} />
    </div>
  );
}

export default App;
