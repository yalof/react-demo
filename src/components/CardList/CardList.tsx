import React from "react";
import "../../pages/Posts/Posts.css";
import CardPost from "../../components/CardPost";
import { Card } from "../../common/types";

const CardList = ({ data }: any) => {
  const onCardClick = (id: any) => {
    window.location.href = `/cards-list/${id}`;
  };
  const cardsList = data.map((item: Card) => {
    return (
      <div key={item.id} onClick={() => onCardClick(item.id)}>
        <CardPost
          id={item.id}
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
          likeStatus={item.likeStatus}
          saved={item.saved}
        />
      </div>
    );
  });
  return <div className="postsWrapper">{cardsList}</div>;
};

export default CardList;
