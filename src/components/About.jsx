import React from "react";


export default function About() {
  return (
    <section id="about">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
          <div className="text-center pt-5 h2" style={{ fontWeight: 'bolder'}}>About Us</div>
            <div className="col-12 col-lg-5 p-0 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="2000">
              <img className="picture" src="./favicon.ico" />
            </div>
            <div className="col-12 col-lg-7 p-0" data-aos="fade-up" data-aos-duration="2000">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                        <strong>About</strong> <br></br>
                        We are a group of engineering enthusiasts, featuring an exclusive range of utility projects for all 
                        industrial automation purposes for handling different processes and machinery in the industry. 
                      </div>
                  </div> 
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                      <strong>Early Stages</strong> <br></br>
                        Since the advent in 2019, we are committed to developing, building, and maintaining quality automation systems that help you reach your goals.
                      </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                      <strong>Our Growth</strong> <br></br>
                        Today’s ever-changing technology offers new and innovative ways to approach automation and control issues. To take advantage of these new technologies, you need a partner who understands how to apply them to your needs.
                      </div>
                  </div>
                  <div className="col-12 col-md-5 m-3 bg-light rounded p-4">
                      <div className="about-content">
                      <strong>Now in 2021</strong> <br></br>
                      No matter how unique your production needs, we are committed to the development of control systems that will reduce your cost of doing business.
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
