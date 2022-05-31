import React from "react";
import Input from "../Input";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const Toggle = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const onClickTheme = () => {
    onChangeTheme(theme === "light" ? Theme.Dark : Theme.Light);
  };
  return (
    <label className="switch">
      <Input type="checkbox" className="themeBtn" />
      <span className="toggle round" onClick={onClickTheme}></span>
    </label>
  );
};

export default Toggle;
