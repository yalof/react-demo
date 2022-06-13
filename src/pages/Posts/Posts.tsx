import React, { useState } from "react";
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
  loadData,
} from "../../redux/reducers/postsReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import Input from "../../components/Input";
import "../../components/Input.css";

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
  const totalCount = useSelector(PostsSelectors.getAllTotalCount);

  const onBtnClick = (btn: any) => {
    dispatch(setPostsTabs(btn));
  };

  const allPostsLoading = useSelector(PostsSelectors.getAllPostsLoading);

  const [search, setSearch] = useState();
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const offset = (page - 1) * limit;
    dispatch(loadData({ search, limit, offset }));
  }, [search, limit, page]);

  const onSearch = (event: any) => {
    setSearch(event.target.value);
    setPage(1);
  };
  const onLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPage(1);
  };

  const onClickPrev = () => {
    setPage(page - 1);
  };
  const onClickNext = () => {
    setPage(page + 1);
  };

  const pagesCount = Math.ceil(totalCount / limit);
  return (
    <div
      className={classNames(
        { ["postsContainer"]: isLightTheme },
        { ["postsContainer dark"]: !isLightTheme }
      )}
    >
      <Input value={search} onChange={onSearch} />
      <div className="postsTitle">All posts</div>
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
        <>
          <CardList data={cardsList} />
          <div className="paginationWrapper">
            {page !== 1 && <div onClick={onClickPrev}>Previous </div>}
            <Input type={"number"} value={limit} onChange={onLimitChange} />
            {pagesCount !== page && <div onClick={onClickNext}> Next </div>}
            {page}
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
