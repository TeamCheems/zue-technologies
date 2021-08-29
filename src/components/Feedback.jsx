import { useState } from 'react';
import React from "react";
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// const Feedback = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

export default function Feedback(){  
return (
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })} */}
 
    
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <div className="text-center pt-5 h2" style={{ fontWeight: 'bolder'}}>Testimonials</div>
            <div className="col-12 col-lg-5 p-0 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="2000">
              <img className="picture" src="./frontpic.png" />
            </div>
            <div className="col-12 col-lg-7 p-0" data-aos="fade-up" data-aos-duration="2000">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                        <strong>Sanjeeva Reddy</strong> <br></br>
                        We were one among the fir effort to give us a quality time. Our house is well constructed and fulfills our requirements in terms of both space and cost as well. We are extremely happy with our new spacious house at Arputhalaya. We sincerely feel that it would be prudent to buy a house at Arputhalaya, since with the escalating land prices owning an independent villa in Chennai would be very difficult in future.
                      </div>
                  </div> 
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                      <strong>Stephen Prabu</strong> <br></br>
                      The houses in Arputhalaya are constructed in a well designed plan with all high quality modern facilities with an elegant look. All this are with in the budget and it is moneys worth. The project is actually  located in the midst of major educational institutions,residential townships and high-end gated communities. Prefer a home in Arputhalaya for a happy and peaceful living.
                      </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                      <strong>Mrs & Mr.Ivan Nathan</strong> <br></br>
                      We wanted a duplex villa and Arputhalaya helped us fulfill our dreams. We are very happy with the elevation anedule and we are very glad that we decided to invest in a house in Arputhalaya.
                      </div>
                  </div>
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                      <strong>Mr Praveen</strong> <br></br>
                      
                         The examining or considering again of something in order to decide iflaya helped us fulfill our dreams. We are v changes are necessary.
                        
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
   );
  }



