import React, {FC} from 'react';
import '../../pages/Posts/Posts.css';
import CardPost from '../../components/CardPost'; 
import {Link, NavLink} from "react-router-dom";

const CardList = (props: any) => {

    const cardsList = props.data.map((item: any) => {
      return (
        <>
        { 
        // Как теперь убрать стили для ссылки-карточки? Карточки некрасиво отрисовываются 
          <NavLink className='linkCards' key={item.id} to={`/cards-list/${item.id}`}>
        <CardPost
          image={item.image}
          title={item.title}
          text={item.text}
          date={item.date}
        />
        </NavLink>

        }
       </>
      );
    });
    return <div className='postsWrapper'>{cardsList}</div>;
  };
  



export default CardList