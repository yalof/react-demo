import './HeaderMenu.css'
import BurgerMenu from "./BurgerMenu";
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Outlet} from 'react-router-dom';
import Toggle from '../Toggle';

const HeaderMenu = () => {
  return (
    <div> 
    <header id="outer-container">
      <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <div className='user'><FontAwesomeIcon icon={faUser}/> <p>Username</p></div> 
      <div className='toggleHeader'> <Toggle/></div>
      </div>
      
    </header>
    <Outlet/>
    </div>
  );
};

export default HeaderMenu




