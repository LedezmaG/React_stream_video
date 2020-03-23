import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo-platzi-video-BW2.png';
import User from '../assets/img/user-icon.png';
import '../assets/styles/components/Header.css';

function Header() {
    return(
        <header className="header">
            <Link to="/">
                <img className="header__img" src={Logo} alt="Platzi Video" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={User} alt=""/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">Cuenta</Link>
                    </li>
                    <li>
                        <Link to="/Login">iniciar Sesión</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;