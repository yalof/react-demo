import React from 'react';
import './CardPost.css';


const CardPost = (props: any) => {
    const img ="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
return (
    <div className='card-post'>
      <img src={props.image ? props.image : img} className="card-img"/>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.text}</p>
      <p className="card-date">{props.date}</p>
  </div>
)
}
const Posts = (props: any) => {
const cardPosts = props.cards.map((item:any) => {
return (
<CardPost className="posts-wrapper"
image={item.image}
title={item.title}
text={item.text}
date={item.date}
/>
)}
)
return <div className="posts-wrapper">{cardPosts}</div>
}


export default Posts;