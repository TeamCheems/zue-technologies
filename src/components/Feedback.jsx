import React from "react";

export default function Feedback(){  

  return (
    <section  class="client" style = {{minHeignt: '200vh'}}>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <div className="text-center pt-5 h2" style={{ fontWeight: 'bolder'}}>Testimonials</div>
            <div data-aos="fade-up" data-aos-duration="2000">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="img-fluid  col-md-3">                    
                        <img className="img-fluid " src="img1.jpg"/>
                        </div>
                      <div className="about-content ">
                        <strong>Sanjeeva Reddy</strong> <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                      </div>
                  </div> 
                  <div className="col-md-5 m-3 bg-light rounded p-4">
                  <img className="img-fluid col-md-3" src="img1.jpg"/>
                      <div className="about-content">
                      <strong>Stephen Prabu</strong> <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                      </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                  <img className="img-fluid col-md-3" src="img1.jpg"/>
                      <div className="about-content">
                      <strong>Mrs & Mr.Ivan Nathan</strong> <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                      </div>
                  </div>
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                  <img className="img-fluid col-md-3" src="img1.jpg"/>
                      <div className="about-content">
                      <strong>Mr Praveen</strong> <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    );
  }



