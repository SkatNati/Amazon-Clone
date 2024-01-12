import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/digital/video/merch/2019/Other/RB-1208/RB-1208_DeviceLinking_WatchAnywhere_1920x883.jpg' alt='' />
            <div className='home__row'>
              <Product 
              id="12321341"
              title='The lean startup'
              price={29.99}
              image="https://m.media-amazon.com/images/I/61BFOf9Ap-L._SY342_.jpg"
              rating={5} />
              <Product 
              id="49538094"
              title='220-240 Volt/ 50-60 Hz,Kenwood KM262 Prospero Stand Mixer, OVERSEAS USE ONLY...'
              price={159.99}
              image="https://m.media-amazon.com/images/I/41RLUn+Jo1L._AC_.jpg"
              rating={4} />
            </div>
            <div className='home__row'>
            <Product 
              id="4903850"
              title='SAMSUNG 24-inch Curved LED FHD 1080p Gaming Monitor... '
              price={48.99}
              image="https://m.media-amazon.com/images/I/71fA65L6W7L._AC_SX679_.jpg"
              rating={4} />
              <Product 
              id="23445930"
              title='Echo Show 10 (3rd Gen) | Charcoal with Echo Sub'
              price={379.98}
              image="https://m.media-amazon.com/images/I/81ynP6XeSPL._AC_SX679_.jpg"
              rating={5} />
              <Product 
              id="3254354345"
              title='elago Tablet Wall Mount Compatible with New iPad Mini...'
              price={159.99}
              image="https://m.media-amazon.com/images/I/71phv0BTPZL._AC_SX679_.jpg"
              rating={4} />
            </div>
            <div className='home__row'>
            <Product 
              id="989953265"
              title='SAMSUNG 49” Odyssey G9 Gaming Monitor, 1000R Curved Screen, QLED, Dual QHD Display, 240Hz, NVIDIA G-SYNC and FreeSync Premium Pro, LC49G95TSSNXZA, Black'
              price={449.99}
              image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SX679_.jpg"
              rating={4} />
            </div>
        </div>
    </div>
  )
}

export default Home