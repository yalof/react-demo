import React, { Children } from "react";
import CardPost from "../CardPost";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedImg,
  setSelectedPost,
} from "../../redux/reducers/postsReducer";
import { PostsSelectors } from "../../redux/reducers/postsReducer";
import "./PopUp.css";
import "../../pages/Posts/Posts.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUp = ({ children }: any) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setSelectedImg(null));
  };
  return (
    <div className="popUpWrapper">
      <div className="popUpContent">
        <div className="closePopUp">
          <FontAwesomeIcon icon={faXmark} onClick={onClick} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
