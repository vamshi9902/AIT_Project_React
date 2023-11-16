import React from 'react';
import gImg1 from '../Assets/images/gallery-01.jpg';
import gImg2 from '../Assets/images/gallery-02.jpg';
import gImg3 from '../Assets/images/gallery-03.jpg';
import gImg4 from '../Assets/images/gallery-04.jpg';
import gImg5 from '../Assets/images/gallery-05.jpg';
import gImg6 from '../Assets/images/gallery-06.jpg';
import gImg7 from '../Assets/images/gallery-07.jpg';
import gImg8 from '../Assets/images/gallery-08.jpg';

const Gallery = () => {
  return (
    <div className="container my-5">
      <button className='btn btn-warning rounded-5 mb-2 px-4 py-0' id='btn-font'>Gallery</button>
      <h1>Visit our customers tour gallery</h1>
      <div className="gallery-container mt-5">
        <div className="grid-item">
          <img src={gImg1} alt="gImg" />
        </div>
        <div className="grid-item">
          <img src={gImg2} alt="gImg" />
        </div>
        <div className="grid-item">
          <img src={gImg3} alt="gImg" />
        </div>
        <div className="grid-item">
          <img src={gImg4} alt="gImg" />
        </div>
        <div className="grid-item">
          <img src={gImg5} alt="gImg" />
        </div>
        <div className="grid-item">
          <img src={gImg6} alt="gImg" className='gImg6' />
        </div>
        <div className="grid-item">
          <img src={gImg7} alt="gImg" />
        </div>
        <div className="grid-item">
          <img src={gImg8} alt="gImg" className='gImg8' />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
