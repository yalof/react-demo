import React, {FC} from 'react';
import './App.css';
import Posts from './pages/Posts';
import Confirmation from './pages/Confirmation';
import CardPost from './components/CardPost';
import Content from './pages/Content/Content';
import Template from './pages/Template';
import HeaderMenu from './components/HeaderMenu/';
import Authorization from './pages/Authentication';
import Information from './pages/Information';
import {ThemeModeProvider} from './context/ThemeModeProvider';
import {Theme} from './context/themeModeContext';
import {useState} from 'react';
import Router from './pages/Router';
import classNames from 'classnames';


function App() {
const [theme, setTheme] = useState <Theme> (Theme.Light)
const isLightTheme = theme ===Theme.Light;
const onChangeTheme = (value: Theme) => {
setTheme(value);
}

  return (
<ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
 <div className='App'>
<Router/>
</div>
</ThemeModeProvider>
  );
}

export default App;
