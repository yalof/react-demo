import React from "react";
import { elastic as HeaderMenu } from "react-burger-menu";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/authReducer";

export default (props: any) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(logout({}));
  };

  return (
    <HeaderMenu>
      <NavLink className="menu-item" to="info">
        Information
      </NavLink>
      <NavLink className="menu-item" to="cards-list">
        All posts
      </NavLink>
      <NavLink className="menu-item" to="my-cards-list">
        My posts
      </NavLink>
      <NavLink className="menu-item" to="add_post">
        Add posts
      </NavLink>
      <NavLink className="menu-item" to="auth" onClick={removeItem}>
        Log out
      </NavLink>
    </HeaderMenu>
  );
};
