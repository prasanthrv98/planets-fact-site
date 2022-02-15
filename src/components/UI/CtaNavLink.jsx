import CtaBtn from "../cta/CtaBtn";
import classes from "./CtaNavLink.module.css";

const CtaNavLink = (props) => {
  const ctaBtnClasses = `${classes["cta-link"]} ${
    classes[`${props.planetName}`]
  } heading-tertiary `;

  return (
    <div className={classes["cta-nav-link"]}>
      <CtaBtn
        activeClass={classes.active}
        planetName={props.planetName}
        linkName="overview"
        className={ctaBtnClasses}
      >
        overview
      </CtaBtn>
      <CtaBtn
        activeClass={classes.active}
        planetName={props.planetName}
        linkName="structure"
        className={ctaBtnClasses}
      >
        internal
      </CtaBtn>
      <CtaBtn
        activeClass={classes.active}
        planetName={props.planetName}
        linkName="geology"
        className={ctaBtnClasses}
      >
        surface
      </CtaBtn>
    </div>
  );
};

export default CtaNavLink;
