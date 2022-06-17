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
  loadMyPosts,
} from "../../redux/reducers/postsReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faThumbsDown,
  faThumbsUp,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import Input from "../../components/Input";
import PopUp from "../../components/PopUp";

const Posts = ({ isPersonal }: any) => {
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
    PostsSelectors.getCards(state, activeTab, isPersonal)
  );

  const totalCount = useSelector(PostsSelectors.getAllTotalCount);

  const onBtnClick = (btn: any) => {
    dispatch(setPostsTabs(btn));
  };

  const allPostsLoading = useSelector(PostsSelectors.getAllPostsLoading);

  const [search, setSearch] = useState();
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState("date");

  useEffect(() => {
    const offset = (page - 1) * limit;
    dispatch(
      isPersonal
        ? loadMyPosts({ search, limit, offset })
        : loadData({ search, limit, offset, ordering })
    );
  }, [search, limit, page, ordering, isPersonal]);

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

  const onSelectChange = (event: any) => {
    setOrdering(event.target.value);
    setPage(1);
  };
  return (
    <div
      className={classNames(
        { ["postsContainer"]: isLightTheme },
        { ["postsContainer dark"]: !isLightTheme }
      )}
    >
      <div className="postsTitle">{isPersonal ? "My Posts" : "All posts"}</div>
      <div className="inputSearch">
        <Input placeholder="Search..." value={search} onChange={onSearch} />
      </div>

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
      {!isPersonal && (
        <div className="sortPosts">
          <label>
            {" "}
            Sort:
            <select name="" onChange={onSelectChange}>
              <option value="date"> Date </option>
              <option value="title">Title</option>
              <option value="text">Text</option>
              <option value="lesson_num">Lesson</option>
            </select>
          </label>
        </div>
      )}
      {allPostsLoading ? (
        <Lottie options={defaultOptions} height={300} width={300} />
      ) : (
        <>
          <CardList data={cardsList} />
          <div className="paginationWrapper">
            <div className="paginationContent">
              {page !== 1 && (
                <div onClick={onClickPrev}>
                  <FontAwesomeIcon
                    id="arrowPagination"
                    icon={faArrowAltCircleLeft}
                  />{" "}
                </div>
              )}
              <Input
                className="inputPaginationPosts"
                type={"number"}
                value={limit}
                onChange={onLimitChange}
              />
              {pagesCount !== page && (
                <div onClick={onClickNext}>
                  {" "}
                  <FontAwesomeIcon
                    id="arrowPagination"
                    icon={faArrowAltCircleRight}
                  />{" "}
                </div>
              )}
            </div>
            <div className="numberPagePosts">{page} page </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
