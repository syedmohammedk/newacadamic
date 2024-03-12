import React from 'react'
import {FaDesktop} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {FaMoneyBill} from "react-icons/fa";
import contimg from "../image/ab1.jpg";
function container4() {
  return (
    <div className='conatiner col-12 bg-light mt-5'>
    <div className='row'>
      <div className='col-lg-6 col-12'style={{background:'#1F386B'}}>
        <h2 className='text-light text-left ml-3 mt-5'>OUR MISSION</h2>
        <div className='row col-12'>
        <div className='col-lg-3 col-12 mt-5'>
        <span className='bor'>
        <FaDesktop className='logo1'style={{fontSize:'40px'}}/>
        </span>
        </div>
        <div className='col-lg-9 col-12 text-light text-justify    mt-5 mt-lg-0'>
  <h5 style={{fontSize:'20px'}}>Advanced lab facilitiess</h5>
  <p style={{fontSize:'17px'}}>We facilitate modernly updated computers with a speed wifi connection for efficient learning of students. Computers are modernizing with IT equipment like software, hardware, and networking as per the requirements. We provide good infrastructure for students with modern amenities.</p>
        </div>
        </div>
        <div className='row col-12'>
       <div className='col-lg-3 col-12 mt-5'>
        <span className='bor'>
        <FaUserAlt className='logo1'style={{fontSize:'40px'}}/>
        </span>
        </div>
        <div className='col-lg-9 col-12 text-light text-justify    mt-5 mt-lg-0'>
  <h5 style={{fontSize:'20px'}}>Well experienced faculties</h5>
  <p style={{fontSize:'17px'}}>Our faculties have good enough experience in teaching advanced courses for students. Our faculties give special care to each student, and faculties use advanced technologies to teach students. Our professionals make them available for students to clear their doubts on time.</p>
        </div>
        </div>
        <div className='row col-12 mb-4'>
       <div className='col-lg-3 col-12 mt-5'>
        <span className='bor'>
         <FaMoneyBill className='logo1'style={{fontSize:'40px'}}/>
        </span>
        </div>
        <div className='col-lg-9 col-12 text-light text-justify    mt-5 mt-lg-0'>
  <h5 style={{fontSize:'20px'}}>Low Cost Services</h5>
  <p style={{fontSize:'17px'}}>We aim to provide advanced courses to all at an affordable cost. Candidates can find a great environment to learn here at a better fee than everywhere. Join us to enjoy your learning.</p>
        </div>
        </div>      
      </div>
      <div className='col-lg-6 col-12 px-0 d-none d-lg-block '>
        <img src={contimg} className="d-block w-100 h-100" alt="logo"/>
      </div>
    </div>
  </div>
  )
}

export default container4