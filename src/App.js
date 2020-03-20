import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Search from './Components/Search';
import Categories from './Components/Categories';
import Carousel from './Components/Carousel';
import CarouselItem from './Components/CarouselItem';
import Footer from './Components/Footer';

import './assets/styles/App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Search />
      {/* {videos.mylist.length > 0 && */}
        <Categories>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      {/* } */}
      <Categories>
        <Carousel>
          {/* {videos.trends.map(item => */}
            <CarouselItem />
          {/* )} */}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;
