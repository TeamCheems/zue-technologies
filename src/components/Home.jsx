import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect'; 
import Aos from 'aos';
import { useState } from 'react'; 

export default function Home(){
    var AOS = require('aos');
    useEffect(() => {
        AOS.init({
        });
      }, []);
    return (
        <div className="vh-100" id="home"> 
            <div className="hero d-flex justify-content-center align-items-center">
                <div className="row w-75">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-md-5 padding_zero d-flex justify-content-center flex-column">
                    <div data-aos="fade-zoom-in" data-aos-duration="2000">
                        <h1 className="font-weight-bold" style={{fontSize:40}}> Your Right Stop for </h1>
                            <h1  className="title-Large" style={{ fontWeight: 'bolder', fontSize:45}}>
                            <Typewriter className = ""
                            options = {{
                            autoStart: true,
                            loop : true,
                            delay: 150,
                            strings:[
                                "Industrial Automation Solutions.",
                                "Students Project Work Guidance.",
                                "Developing Your Ideas."
                            ],
                        }}/>
                            </h1>
                            <button id="getintouch" className="btn-lg my-5 shadow-lg">Get in touch</button> 
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 my-auto padding_zero text-center" data-aos={"zoom-out"}>
                            <img className="pic floating" src="ROBOT.png"/>
                        </div>
                </div>
            </div>
        </div>
    )
};
