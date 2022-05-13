import React from 'react';
import './Button.css';


const Button = (props:any) => {
    return  <button type='submit' disabled={props.disabled} onClick={props.onClick} className={props.className}> {props.btnText} </button>
};



    export default Button