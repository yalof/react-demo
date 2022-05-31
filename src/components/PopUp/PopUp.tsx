import React, { Children } from "react";
import { useDispatch } from "react-redux";
import { setSelectedImg } from "../../redux/reducers/postsReducer";
import "./PopUp.css";
import "../../pages/Posts/Posts.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

// Клик на глазик может еще нужно прокинуть в Cardlist? Но и так попап не срабатывает
const PopUp = ({ isVisible, children }: any) => {
  const dispatch = useDispatch();
  const onClosePopUpClick = () => {
    dispatch(setSelectedImg(null));
  };

  return (
    <div className={classNames("popUpWrapper", { ["visible"]: isVisible })}>
      <div className="popUpContent">
        <div className="closePopUp">
          <FontAwesomeIcon icon={faXmark} onClick={onClosePopUpClick} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
