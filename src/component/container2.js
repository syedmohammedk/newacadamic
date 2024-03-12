import React from 'react'
import {Button, } from 'react-bootstrap';
import {FaSearch} from "react-icons/fa";
import {FaBullhorn} from "react-icons/fa";
import {FaLaravel} from "react-icons/fa";
import {FaMobile} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {FaBrain} from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaExternalLinkAlt} from "react-icons/fa";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {Card} from 'react-bootstrap';
function container2() {
  return (
    <div className='conatiner2 col-10 mx-auto mt-5'>
    <h3>TOP<span className='mx-2'>COURSES</span></h3>
  <div className='card-body bg-light'>
  <div className="row">
  <div  className="col-md-6 col-lg-3 col-12 mt-4">
  <Card >
  <CardHeader className='gradient-section1'>
    <div className='row'>
      <div className='col-4 my-1'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaSearch className='mb-1'/>
      </div>
      <div className='col-8'>
        <h3 style={{ fontSize:'1.5rem',fontFamily:'sans-serif',fontWeight:'700'}}>PHP</h3>
        <h5 style={{ fontSize:'0.9rem',fontFamily:'sans-serif',fontWeight:'600'}}>Fullstack Developement</h5>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
  </div>
    <div  className="col-md-6 col-lg-3 col-12 mt-4">
    <Card >
  <CardHeader className='gradient-section2'>
    <div className='row'>
      <div className='col-4 my-auto'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaBullhorn className='mb-1'/>
      </div>
      <div className='col-8'>
        <h3 className='mt-3' style={{ fontSize:'1.2rem',fontFamily:'sans-serif',fontWeight:'600'}}>Digital Marketing</h3>
        <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}></p>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
      </div>
      <div  className="col-md-6 col-lg-3 col-12 mt-4">
    <Card >
  <CardHeader className='gradient-section1'>
    <div className='row'>
      <div className='col-4 my-auto'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaLaravel className='mb-1'/>
      </div>
      <div className='col-8'>
          <h3 className='mt-3' style={{ fontSize:'1.3rem',fontFamily:'sans-serif',fontWeight:'700'}}>Laravel Developement</h3>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
      </div>
  <div  className="col-md-6 col-lg-3 col-12 mt-4">
    <Card >
  <CardHeader className='gradient-section2'>
    <div className='row'>
      <div className='col-4 my-auto'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaMobile className='mb-1'/>
      </div>
      <div className='col-8'>
          <h3 style={{ fontSize:'1.4rem',fontFamily:'sans-serif',fontWeight:'700'}}>Flutter</h3>
      <h5 style={{ fontSize:'0.8rem',fontFamily:'sans-serif',fontWeight:'600'}}>Mobile App Developement</h5>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
      </div>
  </div>
  <div className="row mt-4">
  <div  className="col-md-6 col-lg-3 col-12 mt-4">
  <Card >
  <CardHeader className='gradient-section3'>
    <div className='row'>
      <div className='col-4 'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaPython className=''/>
      </div>
      <div className='col-8'>
      <h3 style={{ fontSize:'1.2rem',fontFamily:'sans-serif',fontWeight:'700'}}>Python& Django</h3>
      <h5 style={{ fontSize:'0.8rem',fontFamily:'sans-serif',fontWeight:'600'}}>Application Developement</h5>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
  </div>
    <div  className="col-md-6 col-lg-3 col-12 mt-4">
    <Card >
  <CardHeader className='gradient-section4'>
    <div className='row'>
      <div className='col-4 my-auto'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaBrain className='mb-1'/>
      </div>
      <div className='col-8'>
          <h3 className="mt-4" style={{ fontSize:'1.5rem',fontFamily:'sans-serif',fontWeight:'700'}}>WordPress</h3>
      {/* <h5 style={{ fontSize:'0.9rem',fontFamily:'sans-serif',fontWeight:'600'}}>Fullstack Developement</h5> */}
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
      </div>
      <div  className="col-md-6 col-lg-3 col-12 mt-4">
    <Card >
  <CardHeader className='gradient-section4'>
    <div className='row'>
      <div className='col-4 my-auto'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaLaptopCode className='mb-1'/>
      </div>
      <div className='col-8'>
          <h3 style={{ fontSize:'1.5rem',fontFamily:'sans-serif',fontWeight:'700'}}>Fullstack</h3>
      <h5 style={{ fontSize:'0.9rem',fontFamily:'sans-serif',fontWeight:'600'}}>(Mean Stack,Mern Stack)</h5>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
      </div>
  <div  className="col-md-6 col-lg-3 col-12 mt-4">
    <Card >
  <CardHeader className='gradient-section2'>
    <div className='row'>
      <div className='col-4 my-auto'style={{ fontSize:'3rem',color:'#666666' }}>
        <FaJava className='mb-1'/>
      </div>
      <div className='col-8'>
          <h3 className='mt-4' style={{ fontSize:'1.5rem',fontFamily:'sans-serif',fontWeight:'700'}}>Java</h3>
      <h5 style={{ fontSize:'0.9rem',fontFamily:'sans-serif',fontWeight:'600'}}></h5>
      </div>
    </div>
    </CardHeader>
        <Card.Body>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Price:15,000</p>
          <p style={{ fontSize:'1rem',fontFamily:'sans-serif',fontWeight:'500'}}>Duration:2 Month</p>
        </Card.Body>
        <Button className="mx-3 mb-3" variant="outline-primary"><FaExternalLinkAlt className='mb-1 mx-2'/>View More</Button>
  </Card>
      </div>
  </div>
  </div>
  </div>
  )
}

export default container2