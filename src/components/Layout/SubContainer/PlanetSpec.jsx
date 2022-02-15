import React from "react";
import classes from "./PlanetSpec.module.css";

const PlanetSpec = ({ specTitle, specText }) => {
  return (
    <div className={classes.card}>
      <h4 className={`${classes["planet-spec__title"]} heading-fourth`}>
        {specTitle}
      </h4>
      <div className={`${classes["planet-spec__text"]} heading-secondary`}>
        {specText}
      </div>
    </div>
  );
};

export default PlanetSpec;
