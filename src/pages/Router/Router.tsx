import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu";
import Information from "../Information";
import Posts from "../Posts";
import Authorization from "../Authentication/Authorization";
import Confirmation from "../Confirmation";
import Content from "../Content/Content";
import {
  AuthSelector,
  getUserNameInfo,
} from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import EmptyState from "../../components/EmptyState";
import AddPost from "../AddPost";

const Router = () => {
  //const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserNameInfo(""));
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderMenu />}>
            <Route path={"cards-list"} element={<Posts isPersonal={false} />} />
            <Route path={"cards-list/:id"} element={<Content />} />
            <Route path={"my-cards-list"} element={<Posts isPersonal />} />
            <Route path={"my-cards-list/:id"} element={<Content />} />
            <Route path={"info"} element={<Information />} />
            <Route path={"empty"} element={<EmptyState />}></Route>
            <Route path={"add-post"} element={<AddPost />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/cards-list" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"auth"} element={<Authorization />} />
          <Route path={"/activate/:uuid/:token"} element={<Confirmation />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
