import React from "react";
import OwlCarousel from "react-owl-carousel";

function Featured({ featured }) {


  const options = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
     responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
  };

  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
        </div>
        <OwlCarousel className="news-carousel carousel-item-4 position-relative" { ...options }>
          {featured.map((element ,index) => (
            
              <div key={index}
                className="position-relative overflow-hidden"
                style={{ height: 300 }}
              >
                <img
                  className="img-fluid h-100"
                  src={element.imgUrl }
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      { element.category }
                    </a>
                    <a className="text-white" href="">
                      <small>Jan 01, 2045</small>
                    </a>
                  </div>
                  <a
                    className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                    href=""
                  >
                    { element.title } 
                  </a>
                </div>
              </div>
  
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Featured;
