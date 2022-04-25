import './HeaderMenu.css'
import BurgerMenu from "./BurgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMenu = () => {
  return (
    <header id="outer-container">
      <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <FontAwesomeIcon icon="fa-regular fa-user"/> <p>Username</p> 
      </div>
    </header>
  );
};

export default HeaderMenu




