import React from "react"
import Input from "../Input"
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';


const Toggle = () => {

    const {theme, onChangeTheme = () => {}} = useThemeContext();
    const isLightTheme = theme === Theme.Light;
    const onClickThemeDark = () => {
        onChangeTheme(Theme.Dark)
    }
    /*const onClickThemeLight = () => {
        onChangeTheme(Theme.Light)
    }*/
 return (
<label className="switch">
  <Input type="checkbox"  className='themeBtn'/>
  <span className="toggle round" onClick= {onClickThemeDark} ></span>
</label>
 )   
 }

export default Toggle
