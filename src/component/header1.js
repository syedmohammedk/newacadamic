import React from 'react'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import logo from "../image/rdegi1.jpg";
import { Link } from "react-router-dom";
function header1() {
  return (
    <div className='header1 mt-3 mt-lg-0 sticky-top'>
    <Navbar bg="white" expand="lg" className='text-white   py-0'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-lg-5">
        <Navbar.Brand href="#home">
        <img
            src={logo}width={200}height={87}
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        </Nav>
        <Form inline>
        <Nav className="mr-auto mr-lg-5 header1">
          <Link to="/"className='padd font2 mx-2'><li className='active'>Home</li></Link>
          <Link to="/course"className='text-dark font2 mx-2'><li className=' '>Job Orinted Courses</li></Link>
          <Link to="/Aboutus"className='text-dark font2 mx-2'><li>About us</li></Link>
          <Link href="#link"className='text-dark font2 mx-2'><li>Contact us</li></Link>
        </Nav>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default header1