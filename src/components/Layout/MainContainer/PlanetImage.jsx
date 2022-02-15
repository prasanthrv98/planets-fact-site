import React from "react";
import classes from "./PlanetImage.module.css";

const PlanetImage = ({ planetSpec, imgUrl }) => {
  let imgSource;
  let imgSourceGeology;
  switch (planetSpec) {
    case "overview":
      imgSource = imgUrl.planet;
      break;
    case "structure":
      imgSource = imgUrl.internal;
      break;
    case "geology":
      imgSource = imgUrl.planet;
      imgSourceGeology = imgUrl.geology;
      break;
    default:
      imgSource = imgUrl.planet;
  }

  const imgPlanet = require(`../../../${imgSource}`);
  let imgGeology;

  if (planetSpec === "geology")
    imgGeology = require(`../../../${imgSourceGeology}`);

  return (
    <div className={classes["img-box"]}>
      <img
        src={imgPlanet.default}
        alt="planet"
        className={classes["img-planet"]}
      />
      {imgSourceGeology && (
        <img
          src={imgGeology.default}
          alt=""
          className={classes["img-geology"]}
        />
      )}
    </div>
  );
};

export default PlanetImage;
