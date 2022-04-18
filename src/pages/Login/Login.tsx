import React from 'react';
import './Login.css';

const Login = (props: any) => {
    return <div className='login-wrapper'>
<div className="login-title">
    <h1 className="login-title_Login">Login</h1>
    <h1>|</h1>
    <h1 className="login-title_Registration">Registration</h1>
</div>
<form className="login-form">
    <div className="login-form-email">
        <p>Email</p>
        <input type='email' />
    </div>
    <div className="login-form-password">
        <p>Password</p>
        <input type='password' />
    </div>
    <div className="login-form-button">
        <button className="btn-login">Login</button>
    </div>
</form>
<div className="login-forgot">
    <p className="login-forgot-text">Forgot your password?</p>
    <a href="#reset" className="login-reset">Reset password</a>
</div>
           </div>
}

export default Login