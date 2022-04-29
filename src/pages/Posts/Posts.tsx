import React from 'react';
import '../../components/CardPost/CardPost.css';
import './Posts.css';
import CardPost from '../../components/CardPost'; 


type PropsPosts = {
cards : Card[]

}

type Card = {
id: string
image: string
title: string
text: string
date: string

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