import React, { useState } from 'react';
import './Login.css';
import Button from '../../components/Button';
import Input from '../../components/Input';



/*class Login extends React.Component {
    constructor(props:any) {
super(props) {
    this.state = {
        activity: false
    };
    this.onClick = this.onClick.bind (this);

}
const onClick = () => {
    this.setState(state => ({
        activity: !state.activity
    }));
}
render() {
    if(this.state.activity){
        return(
  
        )
    }else {
        return (

        )
    }
}


    }
}*/

const Login = (props: any) => {
    return <div className='login-wrapper'>
<div className="login-title">
    <Button className={'login-title_Login active'} btnText='Login' />
    <p className="line"></p>
    <Button className={'login-title_Login'} btnText='Registration'/>
</div>
<form className="login-form">
    <div className="login-form-email">
        <p>Email</p>
        <Input type='email' />
    </div>
    <div className="login-form-password">
        <p>Password</p>
        <Input type='password' />
    </div>
   
        <Button className='btnLogin' btnText='Login' />
   
</form>
<div className="login-forgot">
    <p className="login-forgot-text">Forgot your password?</p>
    <a href="#reset" className="login-reset">Reset password</a>
</div>
           </div>
}

export default Login 
