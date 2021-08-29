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
      var [popupIndex, setPopupIndex] = useState(1); 

    const popupContent = {
        1: { 
            title: "Project for Educational Institute",
            content: "From concept to production, we offer new projects for your educational institutions. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },};
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
                            <button id="getintouch" className="btn-lg my-5 shadow-lg" onClick={() => { setPopupIndex(1) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Get in touch</button> 
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 my-auto padding_zero text-center" data-aos={"zoom-out"}>
                            <img className="pic floating" src="ROBOT.png"/>
                        </div>
                </div>
            </div>

            <div class="modal fade" id="readMoreModal" tabindex="-1" aria-labelledby="readMoreModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-body p-5">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}></a> 
                        <div className="about-title my-3">
                            {popupContent[popupIndex].title}
                        </div>
                        <div className="about-content">
                            {popupContent[popupIndex].content}
                        </div>
                    </div>
                    <div class="modal-footer border-white">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
