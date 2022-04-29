import React from 'react';
import './Confirmation.css';
import Button from '../../components/Button';

const Confirmation = (props: any) => {
    return (
      <div className="registration-wrapper">
        <h1 className="registration-title">Registration Confirmation</h1>
        <div className="registration-text">
          <p>Please activate your account with the activation link in the
          email <a href='mailto:test@gmail.com'>test@gmail.com</a>  Please, check your email</p>
        </div>
        <Button className='btn-registration' btnText='Home' />
      
      </div>
    );
  };
  
export default Confirmation;