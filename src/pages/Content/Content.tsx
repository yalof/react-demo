import React, { useEffect } from "react";
import "./Content.css";
import CardPost from "../../components/CardPost";
import "./Content.css";
import { useParams } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { PostsSelectors, loadPost } from "../../redux/reducers/postsReducer";
import Lottie from "react-lottie";
import animationData from "../../lotties/wine-glass-filling-white.json";

const Content = () => {
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
  const { id: cardId } = useParams();
  const dispatch = useDispatch();
  const singlePostLoading = useSelector(PostsSelectors.getSinglePostLoading);
  useEffect(() => {
    if (cardId) {
      dispatch(loadPost(cardId));
    }
  }, [cardId]);
  const cardData = useSelector(PostsSelectors.getSelectedPost);

  return (
    <div
      className={classNames(
        { ["contentContainer"]: isLightTheme },
        { ["contentContainer dark"]: !isLightTheme }
      )}
    >
      <div className="contentTitle">Content title</div>
      <div className="cardPostContent">
        {singlePostLoading ? (
          <Lottie options={defaultOptions} height={300} width={300} />
        ) : (
          cardData && (
            <CardPost
              id={cardData.id}
              image={cardData.image}
              title={cardData.title}
              text={cardData.text}
              date={cardData.date}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Content;
