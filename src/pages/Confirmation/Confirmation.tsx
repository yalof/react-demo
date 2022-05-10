import React, {FC} from 'react';
import './Confirmation.css';
import Button from '../../components/Button';
import '../../components/Button/Button.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Toggle from '../../components/Toggle'
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';


type ConfirmationProps = {
  onClick?: (name: string) => void;
  

}
const Confirmation: FC <ConfirmationProps> = ({
onClick,

}) => {
  const {theme, onChangeTheme = () => {}} = useThemeContext();
  const isLightTheme = theme ===Theme.Light;


  const location:any = useLocation()
  const navigate = useNavigate()
const onHomeClick = () => {
  localStorage.setItem('isLoggedIn', 'true')
  window.location.replace('/cards-list')
}

    return (
      <div className={classNames( {['registration-wrapper']:isLightTheme}, {['registration-wrapper dark'] : !isLightTheme})}>
          <Toggle/>
        <h1 className="registration-title">Registration Confirmation</h1>
        <div className="registration-text">
          <p>Please activate your account with the activation link in the
          email{''} <Button className='btnLink' btnText={location?.state?.email ?? ''} />  Please, check your email</p>
        </div>
        <Button className='btn-registration' btnText='Home' onClick={onHomeClick}/>
      
      </div>
    );
  };
  
export default Confirmation;