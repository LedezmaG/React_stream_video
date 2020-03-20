import React from 'react';
import Carousel from './Carousel';
import '../assets/styles/components/Categories.css';

const Categories = ({children}) => {
    return(
        <div className="categories">
            <h3 class="categories__title">Mi lista</h3>
            {children}
        </div>
    );
}

export default Categories