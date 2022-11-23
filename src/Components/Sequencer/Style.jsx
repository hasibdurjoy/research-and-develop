import React from "react";
import { useVideoConfig } from "remotion";

const Bio = ({ name, hometown, major, nextSteps }) => {
  const { width, height } = useVideoConfig();
  const bioContainerWidth = width / 2;

  const BioContainerStyle = {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height,
    width: bioContainerWidth,
    color: "white",
  };

  return (
    <section className="bio" style={BioContainerStyle}>
      <h1>{name}</h1>
      <h2>{hometown}</h2>
      <p>{major}</p>
      <p>{nextSteps}</p>
    </section>
  );
};

export default () => (
  <Bio name="name" hometown="hometown" major="major" nextSteps="nextSteps" />
);
