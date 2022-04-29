import React, {FC, useEffect, useState } from 'react';
import './Login.css';
import Button from '../../../components/Button';
import Input from '../../../components/Input';



type LoginFormProps = {
    onClick: (name: string) => void;
    onConfirmClick: () => void;
    
}

const LoginForm: FC<LoginFormProps> = ({
    onClick,
    onConfirmClick,
 
}) => {
const [email, setEmail] = useState ('');
const [pass, setPass] = useState (Number);
const [emailError, setEmailError] = useState ('');
const [passError, setPassError] = useState ('');
const [formValid, setFormValid] = useState (false);

useEffect(()=> {
if (emailError || passError) {
    setFormValid(false)
} else {
    setFormValid (true)
}

}, [emailError, passError])

const emailValid = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value)
    if (
    !String(event.target.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ){
     setEmailError('Некорректный email')
    } else {
        setEmailError ('')
    }
};

const passValid = (event: any) => {
    event.preventDefault ();
    setPass(event.target.value)
    const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!result.test((event.target.value))) {
       setPassError ('Пароль должен содержать 8 значений с символом, прописными и строчными буквами и цифрой')
    }
     else {
       setPassError ('')
    }
}



return ( 
  
    <form className="login-form">
    <div className="login-form-email">
        <p>Email</p>
        <Input  type='email' required='required' value={email} onChange={emailValid} />
        {emailError && <div className='err'>{emailError}</div>}
    </div>
    <div className="login-form-password">
        <p>Password</p>
        <Input type='password' required='required' value={pass} onChange={passValid} />
        {passError && <div className='err'>{passError}</div>}
    </div>
   
        <Button disabled={!formValid} className='btnLoginConfirm' btnText='Login' onClick={() => {}}  />

        <div className="login-forgot">
    <p className="login-forgot-text">Forgot your password?</p>
    <a href="#reset" className="login-reset">Reset password</a>
</div>
   
</form>
)
}

export default LoginForm

