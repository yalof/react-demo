import React from 'react';
import './Registration.css';

const Registration = (props: any) => {
    return (
      <div className="registration-wrapper">
        <h1 className="registration-title">Registration Confirmation</h1>
        <div className="registration-text">
          <p>Please activate your account with the activation link in the
          email <a href='mailto:test@gmail.com'>test@gmail.com</a>  Please, check your email</p>
        </div>
          <button className='btn-registration'>Home</button>
      </div>
    );
  };
  
export default Registration;