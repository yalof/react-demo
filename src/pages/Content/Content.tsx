import React from 'react';
import './Content.css';
import CardPost from '../../components/CardPost'; 
import Posts from '../Posts';

    const Content = (props: any) => {
        return (
          <div className="content">
            <h1 className="contentTitle">Content title</h1>
            <CardPost
              image={props.cards[1].image}
              title={props.cards[1].title}
              text={props.cards[1].text}
              date={props.cards[1].date}
            />
          </div>
        );
    };
      
export default Content;

