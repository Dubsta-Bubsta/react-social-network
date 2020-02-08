import React from 'react';
import logo from './logo.png';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={s.header}>
            <a href="/profile"><img src={logo} alt="logo"></img></a>
           
            <div className={s.loginBlock}>          
                {props.isAuth ? props.login : <NavLink to="/login" className={s.loginLink}>Login</NavLink> }
            </div>
        </header>
    );
}
export default Header;
