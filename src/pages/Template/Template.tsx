import React from "react";
import Button from "../../components/Button";
import "./Template.css";

const Template = (props: any) => {
  return (
    <div className="templateWrapper dark">
      <h1 className="templateTitle">Template title</h1>
      <p> Template body </p>
      <Button className="btnTemplate" btnText="Change theme" />
    </div>
  );
};

export default Template;
