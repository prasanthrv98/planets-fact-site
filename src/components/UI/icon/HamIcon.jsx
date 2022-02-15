import React from "react";
import classes from "./HamIcon.module.css";

const HamIcon = (props) => {
  return (
    <div className={classes["ham-icon__box"]} onClick={props.hamBtnClicked}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
        className={classes["ham-icon"]}
      >
        <g fill="#FFF">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </div>
  );
};

export default HamIcon;
