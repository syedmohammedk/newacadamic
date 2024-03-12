import React from 'react'
import {FaPhoneAlt } from "react-icons/fa";
import {FaCalendarDay } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
function header() {
  return (
    <div className='darkred header'>
  <div className='row container col-12 '>
 <div className='col-lg-9 col-md-7 col-12'>
<div className='row '>
<ul>
        <li href="#home" className='text-white font1'><FaPhoneAlt className='mb-1'/>+91 7845298544</li>
        <li href="#home"className='text-white font1'><FaCalendarDay className='mb-2'/>Mon-Fri 8:00 to 2:00</li>
        <li href="#link"className='text-white font1'><MdMailOutline className='mb-1'/>info@rdegi.com</li>
</ul>
</div>
 </div>
 <div className='col-lg-3 col-md-5 col-12 '>
 <div className='row'>
  <ul className='mx-auto mx-md-0'>
        <li href="#home"className='text-white font1'><span className='brd px-2'>FAQ</span></li>
        <li href="#link"className='text-white font1 '><span className='brd px-2'>Help Desk </span></li>
        <li href="#link"className='text-white font1 '><span>Support</span></li>
  </ul>
</div>
 </div>
  </div>
  </div>
  )
}

export default header