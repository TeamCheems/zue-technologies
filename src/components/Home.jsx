import React from 'react';
import Typewriter from 'typewriter-effect'; 

export default function Home(){
    return (
        <div className="vh-100" id="home"> 
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="row w-75">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 padding_zero">
                        <h1 className="font-weight-bold" style={{fontSize:40}}> Your Right Stop to </h1>
                            <h1  className="title-Large" style={{ fontWeight: 'bolder', fontSize:45}}>
                            <Typewriter className = ""
                            options = {{
                            autoStart: true,
                            loop : true,
                            delay: 150,
                            strings:[
                                "Industrial Automation Solutions.",
                                "Students Project Work Guidance.",
                                "Develop Your Great Ideas."
                            ],
                        }}/>
                            </h1>
                            <button className="btn-lg my-5 shadow-lg">Get in touch</button>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 padding_zero">
                        <img className="pic " src="frontpic.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
