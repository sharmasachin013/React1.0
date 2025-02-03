import React from 'react';

const RightSlider = ({ mainSliderRight }) => {


  
  return (
    <div className="row mx-0">
      {mainSliderRight.map((item, index) => (
        <div className='col-md-6 px-0' key={ index}>
          <div className='position-relative overflow-hidden'  style={{ height: '250px' }}>
            <img
              className="img-fluid w-100 h-100"
              src={item.imgUrl}
              alt={item.title}
              style={{ objectFit: 'cover' }}
            />
            <div className="overlay">
              <div className="mb-2">
                 <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                  href="#"
                >   {item.category}</a>
                <a className="text-white" href="#">
                  <small>Jan 01, 2045</small>
                </a>
                 <a
                className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                href="#"
              >
                {item.title}
              </a>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSlider;
