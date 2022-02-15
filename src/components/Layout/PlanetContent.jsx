import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import CtaNavLink from "../UI/CtaNavLink";
import PlanetImage from "./MainContainer/PlanetImage";
import PlanetInfo from "./MainContainer/PlanetInfo";
import classes from "./PlanetContent.module.css";
import PlanetSpec from "./SubContainer/PlanetSpec";
import PLANET_JSON from "../../assets/data";

const PlanetContent = () => {
  const { planetName, planetSpec } = useParams();

  const initialPlanetData = PLANET_JSON.find(
    (ele) => ele.name.toLowerCase() === planetName
  );

  const [planetData, setPlanetData] = useState(initialPlanetData);

  const findPlanetData = (planetName) => {
    return PLANET_JSON.find((ele) => ele.name.toLowerCase() === planetName);
  };

  useEffect(() => {
    setPlanetData(findPlanetData(planetName));
  }, [planetName]);

  let planetText;
  let wikiSource;

  switch (planetSpec) {
    case "overview":
      planetText = planetData.overview.content;
      wikiSource = planetData.overview.source;
      break;
    case "structure":
      planetText = planetData.structure.content;
      wikiSource = planetData.structure.source;
      break;
    case "geology":
      planetText = planetData.geology.content;
      wikiSource = planetData.geology.source;
      break;
    default:
      planetText = planetData.overview.content;
      wikiSource = planetData.overview.source;
  }

  return (
    <Fragment>
      {/* Mobile Design Nav Link */}
      <CtaNavLink planetName={planetName} />
      <div className={classes.container}>
        <div className={classes["main-container"]}>
          <PlanetImage imgUrl={planetData.images} planetSpec={planetSpec} />
          <PlanetInfo
            planetText={planetText}
            planetName={planetName}
            wikiSource={wikiSource}
          />
        </div>
        <div className={classes["sub-container"]}>
          <PlanetSpec
            specTitle={"rotation time"}
            specText={planetData.rotation}
          />
          <PlanetSpec
            specTitle={"reveloution time"}
            specText={planetData.revolution}
          />
          <PlanetSpec specTitle={"radius"} specText={planetData.radius} />
          <PlanetSpec
            specTitle={"average temp."}
            specText={planetData.temperature}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PlanetContent;
