import React from "react";

export const Point = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
    </svg>
  );
};
