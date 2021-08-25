import React from "react";
import Grid from '@material-ui/core/Grid';

export default function About() {
  return (
    <section id="about">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="row w-75">
        <div className="text-center pt-5 h2" style={{ fontWeight: 'bolder'}}>About Us</div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 padding_zero">
          
            <div className="col justify-content-center my-3">
            <Grid
            container
            direction="row"
            >
                    <div className="col-12 col-md-6 m-3 bg-light rounded p-4">
                        <div className="about-content">
                        We are a group of engineering enthusiasts, featuring an exclusive range of utility projects for all 
                        industrial automation purposes for handling different processes and machinery in the industry. 
                        </div>
                        <div className="my-4">
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6 m-3 bg-light rounded p-4">
                        
                        <div className="about-content">
                        Since the advent in 2019, we are committed to developing, building, and maintaining quality 
                        automation systems that help you reach your goals.
                        </div>
                        <div className="my-4">
          
                        </div>
                    </div>
                    </Grid>
                    <div className="row">
                   
                    <div className="col-12 col-md-6 m-3 bg-light rounded p-4">
                        <div className="about-content">
                        Today’s ever-changing technology offers new and innovative ways to approach automation and control issues. 
                        To take advantage of these new technologies, you need a partner who understands how to apply them to your 
                        needs.
                        </div>
                        <div className="my-4">
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6 m-3 bg-light rounded p-4">
                        <div className="about-content">
                        No matter how unique your production needs, we are committed to the development of 
                        control systems that will reduce your cost of doing business. 
                        </div>
                        <div className="my-4">
                            
                        </div>
                    </div>
                    </div>
                    </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 padding_zero">
            <img className="picture " src="./favicon.ico" />
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <div className="row w-75">
          
                   
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                className="pic"
                alt="hero"
                src="./favicon.ico" 
                />
                </div>
              </div>
            </div>
          </div> */}
    </section>
  );
}
