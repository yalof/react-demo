import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setSelectedImg } from "../../redux/reducers/postsReducer";
import "./PopUp.css";
import "../../pages/Posts/Posts.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const PopUp = ({ isVisible, children }: any) => {
  const dispatch = useDispatch();
  const onClosePopUpClick = () => {
    dispatch(setSelectedImg(null));
  };

  console.log(isVisible);

  return (
    <div className={classNames("popUpContent", { ["visible"]: isVisible })}>
      <div className="closePopUp">
        <FontAwesomeIcon icon={faXmark} onClick={onClosePopUpClick} />
      </div>
      {children}
    </div>
  );
};

export default PopUp;
