import React from "react";
import { NavLink } from "react-router-dom";

const CtaBtn = (props) => {
  return (
    <NavLink
      activeClassName={props.activeClass}
      to={`/${props.planetName}/${props.linkName}`}
      className={props.className}
    >
      {props.children}
    </NavLink>
  );
};

export default CtaBtn;
