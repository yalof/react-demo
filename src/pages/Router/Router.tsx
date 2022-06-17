import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu";
import Information from "../Information";
import Posts from "../Posts";
import Authorization from "../Authentication/Authorization";
import Confirmation from "../Confirmation";
import Content from "../Content/Content";
import { AuthSelector } from "../../redux/reducers/authReducer";
import { useSelector } from "react-redux";

const Router = () => {
  //const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderMenu />}>
            <Route path={"cards-list"} element={<Posts />} />
            <Route path={"cards-list/:id"} element={<Content />} />
            <Route path={"info"} element={<Information />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"auth"} element={<Authorization />} />
          <Route path={"confirm"} element={<Confirmation />} />
          <Route path="*" element={<Navigate to="auth" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
