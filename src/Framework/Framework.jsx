import React from 'react';
import "./Framework.css";
import svgImg from "../img/avataaars.svg"


export default function Framework() {
  return (
    <>
    
    <section className='vh-100 ' id='Framework'>
        <div className=' container pt-3 d-flex justify-content-center align-items-center'>
        <div>
        <img src={svgImg} className=" w-75 ms-5" alt="" /> 
        <h1 className='fw-bolder text-white text-center mt-5'>START FRAMEWORK</h1>
        <div class="d-flex my-3 text-white justify-content-center">
        <div  class="line me-3"></div>
        <i  class="fa-solid fa-star"></i>
        <div class="line ms-3"></div>
      </div>
      <p className='text-white text-center'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>

    </section>
    </>
  )
}
