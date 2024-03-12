import React from 'react'
import noimg from "../image/noimg.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import {FaFacebookSquare} from "react-icons/fa";
import {FaYoutubeSquare} from "react-icons/fa";
import {FaGooglePlusSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaPhoneAlt } from "react-icons/fa";
import {Card} from 'react-bootstrap';
function footer() {
  return (
      
  <section className='footerbg'>
  <div className='container col-12  footer'>
  <div className='row col-11 mx-auto py-5'>
  <div className='col-lg-3 col-md-6  col-12 text-light text-left sec1'>
  <h5>Rdegi</h5>
  <h6>Rdegi it is an educational institution with excellent teachers and classes are conducted in a way that is well understood by the students and It also creates a better future for all students.</h6>
  <ul>
    <li><a href='#' style={{fontSize:'34px',color:'#3B5998',}}><FaFacebookSquare /></a></li>
    <li><a href='#'  style={{fontSize:'34px',color:'#02B0E8',}}><FaTwitterSquare /></a></li>
    <li><a href='#'  style={{fontSize:'34px',color:'#05A7E3',}}><FaLinkedin /></a></li>
    <li><a href='#'  style={{fontSize:'34px',color:'#A11312',}}><FaGooglePlusSquare /></a></li>
    <li><a href='#'  style={{fontSize:'34px',color:'#C22E2A',}}><FaYoutubeSquare /></a></li>
  </ul>
  </div>
  <div className='col-lg-3 col-md-6  col-12  text-light text-left sec2'>
  <h5>Latest News</h5>
  <p className='borde'></p>
  <div className='row mx-auto'>
   <div clasName='col-2'>
     <img src={noimg} className="d-inline-block align-top" alt="logo"/>
   </div>
 <div clasName='col-7 '>
 <p className='px-2'><a href='#'>Sustainable Construction</a></p>
  <p  className='px-2'>Mar 08, 2015</p>
 </div>
  </div>
  <div className='row mx-auto mt-3'>
   <div clasName='col-2'>
     <img src={noimg} className="d-inline-block align-top" alt="logo"/>
   </div>
 <div clasName='col-7 '>
 <p className='px-2'><a href='#'>Sustainable Construction</a></p>
  <p  className='px-2'>Mar 08, 2015</p>
 </div>
  </div>
  <div className='row mx-auto mt-3'>
   <div clasName='col-2'>
     <img src={noimg} className="d-inline-block align-top" alt="logo"/>
   </div>
 <div clasName='col-7 '>
 <p className='px-2'><a href='#'>Sustainable Construction</a></p>
  <p  className='px-2'>Mar 08, 2015</p>
 </div>
  </div>
  <div className='row mx-auto mt-3'>
   <div clasName='col-2'>
     <img src={noimg} className="d-inline-block align-top" alt="logo"/>
   </div>
 <div clasName='col-7 '>
 <p className='px-2'><a href='#'>Sustainable Construction</a></p>
  <p  className='px-2'>Mar 08, 2015</p>
 </div>
  </div>
  </div>
  <div className='col-lg-3 col-md-6  col-12  text-white text-left'>
  <h5>Trending Courses</h5>
  <p className='borde'></p>
  <ul>
    <li><a href='#'>Php</a></li>
    <li><a href='#'>Python</a></li>
    <li><a href='#'>laravel</a></li>
    <li><a href='#'>Flutter</a></li>
    <li><a href='#'>Java</a></li>
    <li><a href='#'>Full Stack</a></li>
    <li><a href='#'>Digital Marketing</a></li>
    <li><a href='#'>Django</a></li>   
  </ul>
  </div>
  <div className='col-lg-3 col-md-6 col-12  text-white text-left'>
  <h5>Contact</h5>
  <p className='borde'></p>
  <ul>
    <li><FaPhoneAlt className='mr-2 mb-2' style={{fontSize:'24px'}}/>+91 7845298544</li>
    <li><MdMailOutline className='mr-2 mb-2' style={{fontSize:'24px'}}/>info@rdegi.com</li>
    <li><MdOutlineLocationOn className='mb-2' style={{fontSize:'24px'}} />No.3, Phase 3, SSN, SIPCOT Phase 1, Begapalli Road, Hosur - 635126</li>  
  </ul>
  </div>

  </div>
  </div>
  <Card.Body className='bg-black333 col-12 py-3'>
     <h6 className='text-center text-white'>Powered By Rdegi</h6>
     </Card.Body>
  </section>
  )
}

export default footer