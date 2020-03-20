import React from 'react';
import Logo from '../assets/img/logo-platzi-video-BW2.png';
import User from '../assets/img/user-icon.png';
import '../assets/styles/components/Header.css';

function Header() {
    return(
        <header className="header">
            <img className="header__img" src={Logo} alt="Platzi Video" />
                <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={User} alt=""/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;