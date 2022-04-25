import React, {FC, useEffect, useState} from 'react';
import '../Login/Login.css';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

type RegistrationFormProps = {
    onClick: (name: string) => void;
    onConfirmClick: () => void;
    
}

const RegistrationForm: FC<RegistrationFormProps> = ({
    onClick,
    onConfirmClick,
 
}) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [emailError, setEmailError] = useState ('');
    const [passError, setPassError] = useState ('');
    const [formValid, setFormValid] = useState (false);
    const [passConfirm, setPassConfirm] = useState ('');
    const [passErrorConfirm, setPassErrorConfirm] = useState ('');
    
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
        setPass(event.target.value);
        const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!result.test((event.target.value))) {
           setPassError ('Пароль должен содержать 8 значений с символом, прописными и строчными буквами и цифрой')
        }
         else {
           setPassError ('')
        }
    }

    const passValidConfirm = (event:any) => {
        event.preventDefault();
        setPassConfirm(event.target.value);
if (setPass(event.target.value) != setPassConfirm(event.target.value)){
    setPassErrorConfirm('Пароли не совпадают')
} else {
    setPassErrorConfirm('')
}
    }
    

    return (<div className='login-wrapper'>
<form className="login-form">
    <div>
        <p>User name</p>
        <Input type='text' required='required'/>
    </div>
    <div>
        <p>Email</p>
        <Input type='email' required='required' value={email} onChange={emailValid} />
        {emailError && <div className='err'>{emailError}</div>}
    </div>
    <div>
        <p>Password</p>
        <Input type='password' required='required' value={pass} onChange={passValid}/>
        {passError && <div className='err'>{passError}</div>}
    </div>
    <div >
        <p>Confirm Password</p>
        <Input type='password' required='required'value={passConfirm} onChange={passValidConfirm}/>
        {passErrorConfirm && <div className='err'>{passErrorConfirm}</div>}
    </div>
    <div >
        <Button disabled={!formValid} className='btnLoginConfirm' btnText='Login' onClick={onConfirmClick}/>
    </div>
</form>
<div className="login-forgot">
    <p className="login-forgot-text">If you have account you can</p>
    <a href="#login" className="login-reset" onClick={() => onClick('login')}>Login</a>
</div>
           </div>
           )
}

export default RegistrationForm;