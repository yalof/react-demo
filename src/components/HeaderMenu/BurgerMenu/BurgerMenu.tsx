import React from "react";
import { elastic as HeaderMenu } from "react-burger-menu";
import "./BurgerMenu.css";

export default (props: any) => {
  return (
    <HeaderMenu>
      <a className="menu-item" href="/all posts">
        All posts
      </a>
      <a className="menu-item" href="/my posts">
        My posts
      </a>
      <a className="menu-item" href="/add posts">
        Add posts
      </a>
      <a className="menu-item" href="/log out">
        Log out
      </a>
    </HeaderMenu>
  );
};