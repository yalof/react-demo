import React, { FC } from "react";
import "../../components/CardPost/CardPost.css";
import "./Posts.css";
import CardPost from "../../components/CardPost";
import { useParams, Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import {
  PostsSelectors,
  setPostsTabs,
  setSelectedImg,
} from "../../redux/reducers/postsReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadData } from "../../redux/reducers/postsReducer";
import PopUp from "../../components/PopUp";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFloppyDisk,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

const Posts = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const activeTab = useSelector(PostsSelectors.getPostsTabs);
  const cardsList = useSelector((state) =>
    PostsSelectors.getCards(state, activeTab)
  );
  const onBtnClick = (btn: any) => {
    dispatch(setPostsTabs(btn));
  };
  useEffect(() => {
    dispatch(loadData(modelCard));
  }, []);
  const selectedImg = useSelector(PostsSelectors.getSelectedImg);

  const modelCard = [
    {
      id: 0,
      image: "https://demotivation.ru/wp-content/uploads/2020/12/000000.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 1,
      image: null,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmB_84BeMHm-xxiLGyPza_graZHtNqF75zuA&usqp=CAU",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
    {
      id: 3,
      image: "https://slovnet.ru/wp-content/uploads/2018/11/3-38.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      date: "2021-12-12",
      lesson_num: 0,
      title: "What is Lorem Ipsum?",
      author: 0,
    },
  ];
  //const selectedCard = useSelector(PostsSelectors.getSelectedPost);

  //const [popUpActive, setPopUpActive] = useState(false);

  return (
    <div
      className={classNames(
        { ["postsContainer"]: isLightTheme },
        { ["postsContainer dark"]: !isLightTheme }
      )}
    >
      <div className="postsTitle">My posts</div>
      <div className="btnPosts">
        <Button
          className={classNames("btnPostsSave", {
            ["active"]: activeTab === "savePosts",
          })}
          onClick={() => onBtnClick("savePosts")}
          btnText={<FontAwesomeIcon icon={faFloppyDisk} />}
        />
        <Button
          className={classNames("btnPostsLike", {
            ["active"]: activeTab === "likePosts",
          })}
          onClick={() => onBtnClick("likePosts")}
          btnText={<FontAwesomeIcon icon={faThumbsUp} />}
        />
        <Button
          className={classNames("btnPostsDislike", {
            ["active"]: activeTab === "dislikePosts",
          })}
          onClick={() => onBtnClick("dislikePosts")}
          btnText={<FontAwesomeIcon icon={faThumbsDown} />}
        />
        <Button
          className={classNames("btnPostsAll", {
            ["active"]: activeTab === "allPosts",
          })}
          onClick={() => onBtnClick("allPosts")}
          btnText="All"
        />
      </div>
      <CardList data={cardsList} />
      <PopUp>{selectedImg && <img src={selectedImg} alt="" />}</PopUp>
    </div>
  );
};
export default Posts;
