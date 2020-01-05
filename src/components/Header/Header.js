import React from 'react';
import logo from './logo.png';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className= {s.header}>
            <a href = "/profile"><img src={logo} alt = "logo"></img></a>
        </header>
    );
}
export default Header;
