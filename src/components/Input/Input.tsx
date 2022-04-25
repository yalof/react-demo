import React from 'react';
import './Input.css';

    

const Input = (props:any) => {
    return  <input   className={props.className} required= {props.required} type={props.type} onChange={props.onChange} />
    }



export default Input
