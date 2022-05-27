import React, { FC } from "react";
import "../../pages/Posts/Posts.css";
import CardPost from "../../components/CardPost";
import { Link, NavLink } from "react-router-dom";
import { Card } from "../../common/types";
import { useDispatch, useSelector } from "react-redux";
import {
  PostsSelectors,
  setSelectedImg,
  setSelectedPost,
} from "../../redux/reducers/postsReducer";
import PopUp from "../PopUp";

const CardList = ({ data }: any) => {
  const cardsList = data.map((item: Card) => {
    return (
      // <Link className="linkCards" key={item.id} to={`/cards-list/${item.id}`}>
      <CardPost
        id={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
        date={item.date}
        likeStatus={item.likeStatus}
        saved={item.saved}
      />
      // </Link>
    );
  });
  return <div className="postsWrapper">{cardsList}</div>;
};

export default CardList;
