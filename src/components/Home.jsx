import React from 'react';
import Typewriter from 'typewriter-effect'; 



    // const [state] = useState({
    //     title : "",
    //     titleTwo : "",
    // });
    

export default function Home(){
    return (
        <div className="vh-100" id="home"> 
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="row w-75">
                    <div className="col-12 col-md-7 text-center text-md-start">
                        <h1 className="font-weight-bold"> Your right stop for </h1>
                            <h1  className="titleLarge" style={{ fontWeight: 'bolder'}}>Industrial Automation Solutions.</h1>
                            <h1  className="titleLarge" style={{ fontWeight: 'bolder'}}>Student Project</h1>
                            <button className="btn btn-dark my-4">Get in touch</button>
                        </div>
                        <div className="col-12 col-md-5 text-center mt-5"><img className="pic" src="frontpic.png"/></div>
                        <div className= "text">
                            <Typewriter className = ""
                            options = {{
                                autoStart: true,
                                loop : true,
                                delay: 40,
                                strings:[
                                    "Industrial Automation Solutions.",
                                    "Student Project",
                                    "King is great KittuDas"
                                ],
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    )

};
