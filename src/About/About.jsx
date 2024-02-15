import React from 'react';
import "./About.css"

export default function About() {
  return (
    <>
    <section id='About' className='vh-100 d-flex justify-content-center align-items-center'>
      <div className="  text-white mt-5">
        <h1 className='fw-bolder text-center mt-5'>ABOUT COMPONENT</h1>
        <div class="d-flex my-3 justify-content-center">
        <div  class="line me-3"></div>
        <i  class="fa-solid fa-star"></i>
        <div class="line ms-3"></div>
      </div>
      <div className=' container'>
        <div className='row'>
        <div className=' col-md-6'>
          <p className="text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className=' col-md-6'>
          <p className="text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>
      </div>
  
    </section>
    </>
  )
}
