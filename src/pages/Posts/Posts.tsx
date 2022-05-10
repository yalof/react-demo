import React, {FC} from 'react';
import '../../components/CardPost/CardPost.css';
import './Posts.css';
import CardPost from '../../components/CardPost'; 
import { useParams, Link, NavLink} from "react-router-dom";
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';
import {useState, useEffect} from 'react'


const CardList = (props: any) => {

    const cardsList = props.data.map((item: any) => {
      return (
        <>
        { 
        // Как теперь убрать стили для ссылки-карточки? Карточки некрасиво отрисовываются 
          <Link style={{ textDecoration: 'none' }} key={item.id} to={`/cards-list/${item.id}`}>
        <CardPost
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
        />
        </Link>

        }
       </>
      );
    });
    return <div className='postsWrapper'>{cardsList}</div>;
  };
  
const Posts = () => {
  const {theme, onChangeTheme = () => {}} = useThemeContext();
  const isLightTheme = theme ===Theme.Light;
    const modelCard = [
        {
          id: 0,
          image: "https://wallpapers.com/images/high/stitch-artwork-with-duckling-aunpelc7wsf56x74.jpg",
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
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmB_84BeMHm-xxiLGyPza_graZHtNqF75zuA&usqp=CAU',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
          date: "2021-12-12",
          lesson_num: 0,
          title: "What is Lorem Ipsum?",
          author: 0,
        },
        {
          id: 3,
          image: "https://kartinkin.net/uploads/posts/2022-02/thumbs/1645355981_50-kartinkin-net-p-prikolnie-multyashnie-kartinki-51.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
          date: "2021-12-12",
          lesson_num: 0,
          title: "What is Lorem Ipsum?",
          author: 0,
        }
        ]

return (
  
 <div className={classNames( {['postsContainer']:isLightTheme}, {['postsContainer dark'] : !isLightTheme})}>
  
 <div className='postsTitle'>My posts</div>
    <CardList data={modelCard}/>
    </div>
)
}
export default Posts;