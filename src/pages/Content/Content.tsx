import React from 'react';
import './Content.css';
import CardPost from '../../components/CardPost'; 
import './Content.css'


    const Content = (props: any) => {
        return (
          <div className="content">
            <h1 className="contentTitle">Content title</h1>
            <div className="cardPostContent">
            <CardPost
              image={props.cards[1].image}
              title={props.cards[1].title}
              text={props.cards[1].text}
              date={props.cards[1].date}
            /></div>
          </div>
        );
    };
      
export default Content;

