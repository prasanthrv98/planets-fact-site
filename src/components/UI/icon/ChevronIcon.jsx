import React from "react";

const ChevronIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="8"
      className={props.className}
    >
      <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
    </svg>
  );
};

export default ChevronIcon;
