import React from 'react'
import {FaSearch} from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import {Button, } from 'react-bootstrap';
function container1() {
  return (
    <div className='conatiner1 col-10 mx-auto animate fadeInUp one'>
    <h1 className='mainh1 my-4'>Training & Development in Software Technologies</h1>
    <p className='mainp my-5'>Let's We Starts Your Career & Goals</p>
    <button className="btn1 mx-3">Search Course <FaSearch className='mb-1'/></button>
    <Button className="btn2 mx-3" variant="primary">Book free demo class <MdOutlineSubscriptions className='mb-1 sub'/></Button>{' '}
  </div>
  )
}

export default container1