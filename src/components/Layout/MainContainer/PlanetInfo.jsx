import CtaBtn from "../../cta/CtaBtn";
import sourceIcon from "../../../assets/images/icon-source.svg";
import classes from "./PlanetInfo.module.css";

const PlanetInfo = ({ planetText, planetName, wikiSource }) => {
  const ctaBtnClasses = `${classes.navBtn} heading-tertiary ${
    classes[`${planetName}`]
  }`;

  return (
    <div className={classes["planet-info"]}>
      <div className={classes["planet-info-details"]}>
        <h1 className="heading-primary">{planetName}</h1>
        <p className={classes["planet-info__text"]}>{planetText}</p>
        <div className={classes["planet-info__link"]}>
          <span>Source :</span>
          <span>
            <a href={wikiSource} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </span>
          <img src={sourceIcon} alt="sourceIcon" />
        </div>
      </div>

      <div className={classes["cta-action"]}>
        <CtaBtn
          activeClass={classes.active}
          planetName={planetName}
          linkName="overview"
          className={ctaBtnClasses}
        >
          <span>01</span> <span>overview</span>
        </CtaBtn>
        <CtaBtn
          activeClass={classes.active}
          planetName={planetName}
          linkName="structure"
          className={ctaBtnClasses}
        >
          <span>02</span> <span>internal</span> <span>structure</span>
        </CtaBtn>
        <CtaBtn
          planetName={planetName}
          linkName="geology"
          activeClass={classes.active}
          className={ctaBtnClasses}
        >
          <span>03</span> <span>surface</span> <span>geology</span>
        </CtaBtn>
      </div>
    </div>
  );
};

export default PlanetInfo;
