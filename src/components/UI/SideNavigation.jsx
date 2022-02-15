import { NavLink } from "react-router-dom";
import ChevronIcon from "../UI/icon/ChevronIcon";
import classes from "./SideNavigation.module.css";

const SideNavigation = () => {
  return (
    <div className={classes["sidebar-nav"]}>
      <ul>
        <li>
          <div className={`${classes.label} bg-mercury`} />
          <NavLink to="/mercury/overview">mercury</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-venus`} />
          <NavLink to="/venus/overview">venus</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-earth`} />
          <NavLink to="/earth/overview">earth</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-mars`} />
          <NavLink to="/mars/overview">mars</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-jupiter`} />
          <NavLink to="/jupiter/overview">jupiter</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-saturn`} />
          <NavLink to="/saturn/overview">saturn</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-uranus `} />
          <NavLink to="/uranus/overview">uranus</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
        <li>
          <div className={`${classes.label} bg-neptune`} />
          <NavLink to="/neptune/overview">neptune</NavLink>
          <ChevronIcon className={classes["chevron-icon"]} />
        </li>
      </ul>
    </div>
  );
};

export default SideNavigation;
