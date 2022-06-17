import React, { useState } from "react";
import "./Authorization.css";
import Header from "./Header";
import LoginForm from "./Login";
import RegistrationForm from "./Registration";
import Toggle from "../../components/Toggle";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Lottie from "react-lottie";
import animationData from "../../lotties/wine-glass-filling-white.json";
import { AuthSelector } from "../../redux/reducers/authReducer";
import { useSelector } from "react-redux";
import "react-notifications/lib/notifications.css";

const Authorization = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const isLoginUserLoading = useSelector(AuthSelector.getloginUserLoading);

  const [tabName, setTabName] = useState("login");

  const onButtonClick = (name: string) => {
    setTabName(name);
  };

  return (
    <div
      className={classNames(
        { ["auth-wrapper"]: isLightTheme },
        { ["auth-wrapper dark"]: !isLightTheme }
      )}
    >
      {isLoginUserLoading ? (
        <Lottie options={defaultOptions} height={300} width={300} />
      ) : (
        <>
          <Toggle />
          <Header onClick={onButtonClick} activeTab={tabName} />
          {tabName === "login" ? (
            <LoginForm onClick={onButtonClick} />
          ) : (
            <RegistrationForm onClick={onButtonClick} />
          )}
        </>
      )}
    </div>
  );
};

export default Authorization;
