import React from 'react';
import './CardPost.css';


const CardPost = (props: any) => {
    const img ="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
return (
    <div className='card-post'>
      <img src={props.image ? props.image : img} className="card-img"/>
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.text}</p>
      <p className="card-date">{props.date}</p>
  </div>
)
}


export default CardPost;