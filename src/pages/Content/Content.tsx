import React from "react";
import "./Content.css";
import CardPost from "../../components/CardPost";
import "./Content.css";
import { useParams } from "react-router-dom";
//import {useState, useEffect} from 'react';
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const Content = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

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
      image: undefined,
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

  const { id } = useParams();

  const newItem = modelCard.find((post: any) => post.id == id);

  return (
    <div
      className={classNames(
        { ["contentContainer"]: isLightTheme },
        { ["contentContainer dark"]: !isLightTheme }
      )}
    >
      <div className="contentTitle">Content title</div>
      <div className="cardPostContent">
        {newItem && (
          <CardPost
            key={id}
            image={newItem.image}
            title={newItem.title}
            text={newItem.text}
            date={newItem.date}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
