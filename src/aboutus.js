import React from 'react'
import './App.css';
import Header from './component/header';
import Header1 from './component/header1';
import Footer from './component/footer';
import aboutimg from "./image/aboutus.webp";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
function aboutus() {
  return (
    <div className="App">
    <Header></Header>
    <Header1></Header1>
    <section className='container-fluid'>
    <div>
    <img
          className="w-100"
          src={aboutimg}
          alt="First slide"
        />
    </div>
    </section>
    <section className='container-fluid mb-5'>
    <div className='conatiner2 col-11 mx-auto'>
    <h3>ABOUT<span className='mx-2'>RDEGI</span></h3>
    <p>Rdegi is an advanced educational platform for updating students with big dreams. Rdegi aims to provide online coaching for programming languages and digital marketing courses at a pocket-friendly cost. Our teaching professionals are excited to share all their knowledge with the upcoming intelligent generation.</p>
<p>We have significant goodwill among a lot of academics. Rdegi is glad to say that many students from our academy placed in top IT companies for the past years. Here you are at the right platform to start your career. Let's learn together! Achieve together!</p>
    
    </div>
    </section>
<section className='container-fluid row col-11 mx-auto mt-5'>
  <div className='col-12 col-lg-8 conatiner2 text-left'>
    <h3>OUR<span className='mx-2 '>MISSION</span></h3>
    <p>We are on the floor to create successful students in advanced latest technologies. We aim to discover new things in this digitalized world.
    </p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.6475971064!2d78.59488087459017!3d9.539313680793107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b010734f49b4193%3A0x8dcf8db32866e5c3!2sRDEGI%20%7C%20Best%20WebDevelopment%20Company%20%7C%20App%20Development%20%7C%20Software%20Development!5e0!3m2!1sta!2sin!4v1696417551798!5m2!1sta!2sin" width="100%" height="150" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <h4>Rdegi LAYOUT</h4>
    <p>12/336-AD51, Bagathsingh Road, Kamaraj Nagar, Paramakudi, Tamilnadu-623707.</p>
  </div>
 <div className='col-12 col-lg-4 form mb-5 card'>
 <form className='mx-4'>
  <h4 className='text-white float-left mt-4 mb-2'>Get a Registration!</h4>
  <div className="form-group mt-3 ">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
  </div>
  <div class="form-group">
    <input type="text" className="form-control " id="exampleInputPassword1" placeholder="Email"/>
  </div>
  <div class="form-group">
    <input type="text" className="form-control " id="exampleInputPassword1" placeholder="PhoneNo"/>
  </div>
  <select className="form-control form-control ">
  <option>Select Your Course</option>
  <option>php</option>
  <option>Django</option>
  <option>Python</option>
  <option>Full Satck</option>
  </select> 
  <button type="submit" className="btn btn-primary float-left mt-4 mb-5">Send</button>
</form>
</div>
 </section>
    <Footer></Footer>
     </div>
  )
}

export default aboutus