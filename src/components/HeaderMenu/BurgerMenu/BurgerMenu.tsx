import React from "react";
import { elastic as HeaderMenu } from "react-burger-menu";
import "./BurgerMenu.css";
import {NavLink} from 'react-router-dom'


export default (props: any) => {
  const onOutClick = () => {
    localStorage.setItem('isLoggedIn', '');
    window.location.replace('/') 
  }
  
  return (
    <HeaderMenu>
      <NavLink className="menu-item" to="info">
        Information
      </NavLink>
      <NavLink className="menu-item" to="cards-list">
        My posts
      </NavLink>
      <NavLink className="menu-item" to="#">
        Add posts
      </NavLink>
      <NavLink className="menu-item" to='' onClick={onOutClick}>
        Log out
      </NavLink>
    </HeaderMenu>
  );
};