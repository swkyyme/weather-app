import React from 'react';
import logo from '../icon/logo.png';

const Header = () => {
    return (
        <header>
            <img src={logo} className="header__logo" alt="logo" />
            <h1 className="header__title">Weather Channel</h1>
        </header>
    );
}

export default Header;