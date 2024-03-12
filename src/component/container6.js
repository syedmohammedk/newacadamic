import React from 'react'
import {Card} from 'react-bootstrap';
import recentimg1 from "../image/recent_img1.png";
import recentimg2 from "../image/recent_img2.png";
import recentimg3 from "../image/recent_img3.png";
function container6() {
  return (
    <div className='conatiner2 col-10 mx-auto  mt-5 pb-5'>
    <h3>RECENT<span className='mx-2'>BLOGS</span></h3>
     <div className='row mt-5'>
       <div className='col-lg-4 col-md-6  col-12'>
       <Card >
          <img className="d-block w-100 h-50"  src={recentimg1} alt="Second slide"  />
          <Card.Body className='bg-light'>
            <p style={{ fontSize:'1.3rem',fontFamily:'sans-serif',fontWeight:'700'}}>PHP Programming Blog</p>
          </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4 col-md-6 col-12 my-4 my-md-0'>
       <Card >
         <img className="d-block w-100 h-50"  src={recentimg2} alt="Second slide"  />
          <Card.Body className='bg-light'>
            <p style={{ fontSize:'1.3rem',fontFamily:'sans-serif',fontWeight:'700'}}>TypeScript & JavaScript Blog</p>
          </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4   col-12'>
       <Card >
      <img className="d-block w-100 h-50"  src={recentimg3} alt="Second slide"  />
          <Card.Body className='bg-light'>
            <p style={{ fontSize:'1.3rem',fontFamily:'sans-serif',fontWeight:'700'}}>Cloud Computing Blog</p>
          </Card.Body>
    </Card>
      </div>
     </div>
    </div>
  )
}

export default container6