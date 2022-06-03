import React, {FC} from 'react';
import './CardPost.css';
import classNames from 'classnames';


type CardPostProps = {
  id?: string
  image?: string
  title: string
  text: string
  date: string
  
  }
const CardPost: FC <CardPostProps> =  ({id, image, title, text, date}) => {
  
    const img ="https://s1.best-wallpaper.net/wallpaper/m/1907/Bridge-train-mountains-vector-art-picture_m.jpg";
return (

  <div className='card-post' key={id}>
      <img src={image ? image : img} className="card-img" alt=''/>
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
      <p className="card-date">{date}</p>
  </div>
)
}

export default CardPost;