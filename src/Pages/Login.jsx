import React from 'react';
import { Link } from 'react-router-dom';
import google_icon from '../assets/img/google-icon.png';
import twitter_icon from '../assets/img/twitter-icon.png';
import '../assets/styles/components/Login.css';

function Login() {

    return(
        <section className="login">
            <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="Correo"/>
                <input className="input" type="password" placeholder="Contraseña"/>
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                <label>
                    <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
                </label>
                <Link to="/Login">Olvidé mi contraseña</Link>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={google_icon} /> Inicia sesión con Google</div>
                <div><img src={twitter_icon} /> Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta <Link to="/Singin">Regístrate</Link></p>
            </section>
        </section>
    );

}

export default Login