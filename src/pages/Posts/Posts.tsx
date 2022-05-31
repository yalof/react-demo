import React from "react";
import "../../components/CardPost/CardPost.css";
import "./Posts.css";
import Lottie from "react-lottie";
import animationData from "../../lotties/wine-glass-filling-white.json";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useEffect } from "react";
import CardList from "../../components/CardList";
import {
  PostsSelectors,
  setPostsTabs,
} from "../../redux/reducers/postsReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadData } from "../../redux/reducers/postsReducer";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

const Posts = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useDispatch();
  const activeTab = useSelector(PostsSelectors.getPostsTabs);
  const cardsList = useSelector((state) =>
    PostsSelectors.getCards(state, activeTab)
  );

  const onBtnClick = (btn: any) => {
    dispatch(setPostsTabs(btn));
  };
  useEffect(() => {
    dispatch(loadData());
  }, []);

  const allPostsLoading = useSelector(PostsSelectors.getAllPostsLoading);

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

      {allPostsLoading ? (
        <Lottie options={defaultOptions} height={300} width={300} />
      ) : (
        <CardList data={cardsList} />
      )}
    </div>
  );
};

export default Posts;
