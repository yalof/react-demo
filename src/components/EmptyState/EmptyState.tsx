import React from "react";
import "./EmptyState.css";
import Icons from "../../Icons";

const EmptyState = () => {
  return (
    <div className="emptyWrapper">
      <div className="emptyTitle">Your page is empty </div>
      <p className="emptyDescription"> </p>
    </div>
  );
};
export default EmptyState;
//<Icons size="32px" className="svgEmpty" />
