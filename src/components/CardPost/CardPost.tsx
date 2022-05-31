import React, { FC, useState } from "react";
import "./CardPost.css";
import "../../pages/Posts/Posts.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFloppyDisk,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  PostsSelectors,
  setSelectedImg,
} from "../../redux/reducers/postsReducer";
import { setLikePost, setSavePost } from "../../redux/reducers/postsReducer";
import { Card as CardType } from "../../common/types";
import PopUp from "../PopUp";
import Button from "../../components/Button";

type CardPostProps = {
  id?: string;
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: (event: any) => void;
  likeStatus?: string | null;
  saved?: boolean;
  // data: CardType;
};

const CardPost: FC<CardPostProps> = ({
  image,
  title,
  text,
  date,
  id,
  likeStatus,
  saved,
  onClick,
}) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  //const { id, image, title, text, date, likeStatus, saved } = data;

  const dispatch = useDispatch();

  const selectedImg = useSelector(PostsSelectors.getSelectedImg);

  const [isVisible, setVisible] = useState(false);
  const onEyeClick = (item: any) => {
    dispatch(setSelectedImg(item.image));
    setVisible(!isVisible);
  };

  const img = "https://slovnet.ru/wp-content/uploads/2018/11/21-42.jpg";

  const handleButtonClick = (action: string) => {
    if (action == "like" || action == "dislike") {
      dispatch(
        setLikePost({ id, action: likeStatus === action ? null : action })
      );
    } else if (action == "save" || action === "unset") {
      dispatch(setSavePost({ id, action }));
    }
  };

  return (
    <div
      className={classNames(
        { ["card-post"]: isLightTheme },
        { ["card-post dark"]: !isLightTheme }
      )}
    >
      <img src={image ? image : img} className="card-img" alt="" />
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
      <div className="iconsFooter">
        <p className="card-date">{date}</p>

        <div className="btnsCardFooter">
          <Button
            className={classNames("btnLike", {
              ["activeBtn"]: likeStatus === "like",
            })}
            onClick={() => handleButtonClick("like")}
            btnText={<FontAwesomeIcon icon={faThumbsUp} />}
          />
          <Button
            className={classNames("btnDislike", {
              ["activeBtn"]: likeStatus === "dislike",
            })}
            onClick={() => handleButtonClick("dislike")}
            btnText={<FontAwesomeIcon icon={faThumbsDown} />}
          />
          <Button
            className={classNames("btnSave", { ["activeBtn"]: saved })}
            onClick={() => handleButtonClick(saved ? "unset" : "save")}
            btnText={<FontAwesomeIcon icon={faFloppyDisk} />}
          />
          <Button
            className="btnEye"
            btnText={
              <FontAwesomeIcon icon={faEye} onClick={() => onEyeClick(img)} />
            }
          />
        </div>
      </div>
      <PopUp isVisible={isVisible}>
        {selectedImg && <img src={selectedImg} alt="image" />}
      </PopUp>
    </div>
  );
};

export default CardPost;
