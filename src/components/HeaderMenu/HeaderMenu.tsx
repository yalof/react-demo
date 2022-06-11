import "./HeaderMenu.css";
import BurgerMenu from "./BurgerMenu";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import Toggle from "../Toggle";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";

const HeaderMenu = () => {
  const userNameHeader = useSelector(AuthSelector.getUserNameHeader);
  return (
    <div>
      <header id="outer-container">
        <BurgerMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <div className="user">
            <FontAwesomeIcon icon={faUser} /> <p>Username {userNameHeader} </p>
          </div>
          <div className="toggleHeader">
            {" "}
            <Toggle />
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default HeaderMenu;
