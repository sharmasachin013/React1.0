import React from "react";
// import OwlCarousel from 'react-owl-carousel';

function BreakingNews() {
  const options = {
    autoplay: true,
    smartSpeed: 2000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i className="fa fa-angle-left" aria-hidden="true"></i>',
      '<i className="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  };
  return (
    <div className="container-fluid bg-dark py-3 mb-3">
      <div className="container">
        <div className="row align-items-center bg-dark">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div
                className="bg-primary text-dark text-center font-weight-medium py-2"
                style={{ width: 170 }}
              >
                Breaking News
              </div>
              <OwlCarousel
                className="owl-carousel tranding-carousel"
                {...options}
              >
                <div
                  className="position-relative d-inline-flex align-items-center ml-3"
                  style={{ width: "calc(100% - 170px)", paddingRight: 90 }}
                >
                  <div className="text-truncate">
                    <a
                      className="text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget
                      ante tincidunt, sed faucibus nisl sodales
                    </a>
                  </div>
                  <div className="text-truncate">
                    <a
                      className="text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget
                      ante tincidunt, sed faucibus nisl sodales
                    </a>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakingNews;
