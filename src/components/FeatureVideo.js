import video1 from "../img/video.mp4";
import video2 from "../img/video.webm";
import React from "react";

const FeatureVideo = () => {
  return (
    <video className="bg-video__content" autoPlay muted loop>
      <source src={video1} type="video/mp4" />
      <source src={video2} type="video/webm" />
      Your browser is not supported!
    </video>
  );
};

export default FeatureVideo;
