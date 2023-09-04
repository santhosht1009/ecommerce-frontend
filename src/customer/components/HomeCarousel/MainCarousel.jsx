import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const items = mainCarouselData.map((item)=><img className='curser-pointer -z-10' role='presentation' src={item.image}  ></img>)
const MainCarousel = () => (
    <AliceCarousel
      
        items={items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite
    />
);

export default MainCarousel;