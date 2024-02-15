import React from 'react';
import "./Portfolio.css";
import img1 from "../img/poert1.png";
import img2 from "../img/port2.png";
import img3 from "../img/port3.png"


export default function Portfolio() {

  return (
    <>
    <section id='Portfolio' >
      <div className="container">
    <h1 className='fw-bolder text-center mt-5 position-relative top-50 '>PORTFOLIO COMPONENT</h1>
        <div class="d-flex my-3 justify-content-center">
        <div  class="line me-3"></div>
        <i  class="fa-solid fa-star"></i>
        <div class="line ms-3"></div>
      </div>
      <div className="row g-5">
        <div className="col-md-4 position-relative">
          <img src={img1} alt="" className=' img-item img-fluid rounded-3 ' />
          <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i class="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative">
        <img src={img2} alt="" className=' img-fluid img-item rounded-3' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i class="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 position-relative">
        <img src={img3} alt="" className=' img-fluid img-item rounded-3' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i class="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 mb-4 position-relative">
        <img src={img1} alt="" className=' img-fluid img-item rounded-3' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i class="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 mb-4 position-relative">
        <img src={img2} alt="" className=' img-fluid img-item rounded-3' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i class="fa-solid fa-plus display-1  fw-bolder"></i>
          </div>
        </div>
        <div className="col-md-4 mb-4 position-relative">
        <img src={img3} alt="" className=' img-fluid img-item rounded-3' />
        <div className='hover-img rounded-3 mx-4 d-flex justify-content-center align-items-center'>
          <i class="fa-solid fa-plus display-1 fw-bolder"></i>
          </div>
        </div>
      </div>
      </div>

      <div className='d-none justify-content-center align-items-center full-img'>
      <img src={img3} alt="" className=' w-50 rounded-3' />
      </div>
    </section>
    </>
    
  )
}
