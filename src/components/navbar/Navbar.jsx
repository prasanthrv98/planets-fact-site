import React from "react";
import classes from "./Navbar.module.css";
import "../../index.css";
import NavItems from "./NavItems";
import HamIcon from "../UI/icon/HamIcon";

const Navbar = (props) => {
  return (
    <header>
      <nav className={classes["header__nav"]}>
        <h2 className={`${classes.logo} heading-secondary`}>The Planets</h2>
        <NavItems />
        <HamIcon hamBtnClicked={props.hamBtnClicked} />
      </nav>
    </header>
  );
};

export default Navbar;
