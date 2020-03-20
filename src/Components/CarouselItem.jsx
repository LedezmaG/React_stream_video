import React from 'react';
import play_icon from '../assets/img/play-icon.png';
import plus_icon from '../assets/img/plus-icon.png';
import propTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.css';
import Carousel from './Carousel';


function Carouselitem() {
    return(
        <div class="carousel-item">
            <img class="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
            <div class="carousel-item__details">
                <div>
                    <img class="carousel-item__details--img" src={play_icon} alt="Play Icon" /> 
                    <img class="carousel-item__details--img" src={plus_icon} alt="Plus Icon" /> 
                </div>
                <p class="carousel-item__details--title">Título descriptivo</p>
                <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
        </div>
    );
}

// VALIDACIONES CON PROPTYPES
/* Carouselitem.propTypes = {
    cover: propTypes.string,
    year: propTypes.number
} */

export default Carouselitem