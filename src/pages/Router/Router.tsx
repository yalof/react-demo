import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu'
import Information from "../Information";
import Posts from '../Posts';
import Authorization from "../Authentication/Authorization";
import Confirmation from "../Confirmation";
import RegistrationForm from "../Authentication/Registration";
import Content from "../Content/Content"



const Router = () => {
   // const isLoggedIn = false;
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
    <BrowserRouter>
    {isLoggedIn?(
        <Routes> 
        <Route path={'/'} element={<HeaderMenu/>}>
            <Route path={'cards-list'} element={<Posts />}/>
            <Route path={'cards-list/:id'} element={<Content/>}/>
            <Route path={'info'} element={<Information/>}/>
        </Route>
        </Routes>
     ) : ( 
     <Routes> 
         <Route  path={'/'} element={<Authorization/>}/>
         <Route  path={'confirm'} element={<Confirmation/>}/>
     </Routes>  
     )}
    </BrowserRouter>
);
};

export default Router