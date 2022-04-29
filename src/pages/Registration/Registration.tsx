import React from 'react';
import './Registration.css';
import '../Login/Login.css';
import '../../components/Button/Button.css';
import Button from '../../components/Button';
import Input from '../../components/Input';



const Registration = (props: any) => {
    return <div className='login-wrapper'>
<div className="login-title">
    <Button className='login-title_Login' btnText='Login' />
    <p className="line"></p>
    <Button className='login-title_Registration' btnText='Registration'/>
</div>
<form className="login-form">
<div className="login-form-naim">
        <p>User name</p>
        <Input type='text' />
    </div>
    <div className="login-form-email">
        <p>Email</p>
        <Input type='email' />
    </div>
    <div className="login-form-password">
        <p>Password</p>
        <Input type='password' />
    </div>
    <div className="login-form-password-confirm">
        <p>Confirm Password</p>
        <Input type='password' />
    </div>
    <div className="login-form-button">
        <Button className='btnLogin' btnText='Login' />
    </div>
</form>
<div className="login-forgot">
    <p className="login-forgot-text">If you have account you can</p>
    <a href="#login" className="login-reset">Login</a>
</div>
           </div>
}

export default Registration;