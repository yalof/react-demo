import React from "react";
import IconsSVG from "./Icons.svg";

function Icons({ className }: any) {
  return (
    <svg className={className}>
      <use xlinkHref={IconsSVG} />
    </svg>
  );
}

export default Icons;
