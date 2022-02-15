import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavItems.module.css";

const NavItems = () => {
  const [planetBg, setPlanetBg] = useState("bg-mercury");

  const navClickHandler = (event) => {
    const planetName = event.target.textContent.toLowerCase();
    const planetBgClass = `bg-${planetName}`;
    setPlanetBg(planetBgClass);
  };

  return (
    <ul className={classes["header__main-nav"]}>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/mercury/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          Mercury
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />

        <Link
          to="/venus/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          venus
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/earth/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          earth
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/mars/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          mars
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/jupiter/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          jupiter
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/saturn/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          saturn
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/uranus/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          uranus
        </Link>
      </li>
      <li>
        <div className={`${classes["link-hover"]} ${planetBg}`} />
        <Link
          to="/neptune/overview"
          className={`${classes["header__nav-link"]} heading-fourth`}
          onClick={navClickHandler}
        >
          neptune
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
