import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slidimg1 from "./image/bg7.jpg";
import slidimg2 from "./image/bg8.jpg";
import slidimg3 from "./image/bg9.jpg";
import './App.css';
function slider() {
  return (
<Carousel data-bs-theme="dark" className='cros'>
      <Carousel.Item>
        <img
          className="slidimg"
          src={slidimg1}
          alt="First slide"
        />
        <Carousel.Caption  className='carouseltext1'>
          <span className='h1 mb-4'>"LIVE ONLINE COURSE"</span>
          <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='btn btn-warning '>View Details</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slidimg"
          src={slidimg2}
          alt="Second slide"
        />
        <Carousel.Caption className='carouseltext2'>
          <h1 className='mb-4'>"START YOUR LEARNING WITH US"</h1>
          <span className='mb-5'>"TO GET FUTURE OPPORTUNITES."</span>
          <p className='mt-4'> Let's rule the world with advanced Coading Language</p>
          <button className='btn btn-primary'>View Details</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slidimg"
          src={slidimg3}
          alt="Third slide"
        />
        <Carousel.Caption className='carouseltext3'>
          <span className='h1'>BEST COACHING</span>
          <p className='fp'>JOIN US TO GET COMPLETE KNOWLEDGE IN COADING</p>
          <p className='mt-4'> Let's rule the world with advanced Coading Language</p>
          <button className='btn btn-success'>Apply Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default slider