import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MainSlider = ({ carouselItems }) => {
 

   



  
  const options = {
  autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    center: true,
};




  
  return (
<>

<OwlCarousel className="owl-carousel main-carousel owl-loaded owl-drag" {...options}>
                      {carouselItems.data.maincarousel.map((element, index) => (
        <div key={index} className="position-relative overflow-hidden" style={{ height: '500px' }}>
          <img className="img-fluid h-100" src={element.largeImg} style={{ objectFit: 'cover' }} alt={element.title} />
          <div className="overlay">
            <div className="mb-2">
              <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="#">
                {element.category}
              </a>
              <a className="text-white" href="#">Jan 01, 2045</a>
            </div>
            <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="#">
              {element.title}
            </a>
          </div>
        </div>
      ))}
                  </OwlCarousel>
      
     
</>
)
};

export default MainSlider;
