import React, { useState } from "react";
import "./Authorization.css";
import Header from "./Header";
import LoginForm from "./Login";
import Input from "../../components/Input";
import RegistrationForm from "./Registration";
import Confirmation from "../Confirmation";
import Toggle from "../../components/Toggle";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const Authorization = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [tabName, setTabName] = useState("login");
  const [isConfirmed, setConfirmed] = useState(false);
  const onButtonClick = (name: string) => {
    setTabName(name);
  };
  const onClickRegister = () => {
    setConfirmed(true);
  };

  return (
    <div
      className={classNames(
        { ["auth-wrapper"]: isLightTheme },
        { ["auth-wrapper dark"]: !isLightTheme }
      )}
    >
      <Toggle />
      <Header onClick={onButtonClick} activeTab={tabName} />
      {tabName === "login" ? (
        <LoginForm onClick={onButtonClick} onConfirmClick={onClickRegister} />
      ) : (
        <RegistrationForm
          onClick={onButtonClick}
          onConfirmClick={onClickRegister}
        />
      )}
    </div>
  );
};

export default Authorization;
