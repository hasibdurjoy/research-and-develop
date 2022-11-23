import React from "react";
import { videoSrc } from "./Data";

const NewSequencer = () => {
  let totalDuration = 0;
  videoSrc.map((video) => {
    totalDuration = totalDuration + parseFloat(video.duration);
  });
  return <div>{totalDuration}</div>;
};

export default NewSequencer;
