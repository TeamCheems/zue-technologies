import React from 'react';
import Typewriter from 'typewriter-effect'; 

export default function Home(){
    return (
        <div className="vh-100" id="home"> 
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="row w-75">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 padding_zero">
                        <h1 className="font-weight-bold" style={{fontSize:40}}> Your Right Stop For </h1>
                            <h1  className="title-Large" style={{ fontWeight: 'bolder', fontSize:50}}>
                            <Typewriter className = ""
                            options = {{
                                autoStart: true,
                                loop : true,
                                delay: 100,
                                strings:[
                                    "Industrial Automation Solutions.",
                                    "Students Project Work Guidance.",
                                    "Develope Your Great Ideas."
                                ],
                            }}/>
                            </h1>
                            <button className="btn-lg btn-dark my-5">Get in touch</button>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 padding_zero"><img className="pic" src="frontpic.png"/></div>
                        <div className= "text">
                    </div>
                </div>
            </div>
        </div>
    )

};
