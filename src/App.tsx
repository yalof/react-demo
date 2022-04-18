import React from 'react';
import './App.css';
import Posts from './components/CardPost';
import Regisrtation from './pages/Registration';
import Login from './pages/Login';
import Registration from './pages/Registration';
import CardPost from './components/CardPost';


function App() {
  return (
   <div className="Cards">
   <Posts cards={modelCard}/>
    </div>
   /* <div> 
      <Login />
    </div>*/
    /*<div> 
    <Registration />
  </div>*/
  );
}

const modelCard = [
  {
    id: 0,
    image: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
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
    image: null,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "2021-12-12",
    lesson_num: 0,
    title: "What is Lorem Ipsum?",
    author: 0,
  },
  {
    id: 3,
    image: "https://newizv.ru/attachments/8e05c19da9b8ed9a9e7efaf99351910f45083590/store/fill/1200/675/7ced8dd217215c1035856b7150915c2ed7b22a345aadd3ad3fe2698dda17/%D0%BF%D0%B0.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "2021-12-12",
    lesson_num: 0,
    title: "What is Lorem Ipsum?",
    author: 0,
  }
  ]
  

export default App;
