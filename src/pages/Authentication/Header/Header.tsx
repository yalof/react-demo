import React, { FC } from "react";
import Button from "../../../components/Button";
import classNames from "classnames";
import "./Header.css";

type HeaderProps = {
  onClick: (tabName: string) => void;
  activeTab: string;
};
const Header: FC<HeaderProps> = ({ onClick, activeTab }) => {
  const isLoginActive = activeTab === "login";
  return (
    <div>
      <div className="wrapperHeader">
        <Button
          className={classNames("btnHeader", { ["activeLink"]: isLoginActive })}
          onClick={() => onClick("login")}
          btnText="Login"
        />
        <p className="line"></p>
        <Button
          className={classNames("btnHeader", {
            ["activeLink"]: !isLoginActive,
          })}
          onClick={() => onClick("registration")}
          btnText="Registration"
        />
      </div>
    </div>
  );
};

export default Header;
