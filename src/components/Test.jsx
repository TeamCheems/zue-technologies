import { useState } from 'react';

export default function Test() {
    var [popIndex, setPopIndex] = useState(1); 

    const popContent = {
        1: { 
            title: "Project for Educational Institute",
            image: "img1.jpg",
            content: "From concept to production, we offer new projects for your educational institutions. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        2: { 
            title: "Project Guidance for Students",
            image: "img1.jpg",
            content: "Design and integrate your projects with our guidance. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        3: { 
            title: "Project for Public User",
            image: "img1.jpg",
            content: "We are committed to developing projects that will meet and exceed your expectations. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        }, 
        4: { 
            title: "Industrial Automation ",
            image: "img1.jpg",
            content: "We building and maintaining quality automation systems that helps you reach your goals. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        5: { 
            title: "Special Purpose Machine",
            image: "img1.jpg",
            content: "We can design and build automated control systems that will increase safety, quality, productivity, and efficiency Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        6: { 
            title: "Residential Automation",
            image: "img1.jpg",
            content: "Automate your entire facility and integrate it with new or existing equipment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
    } ;

    return (
        <div className="m-5" id="gallery"> 
            <div className="container">
            <div data-aos="fade-in" data-aos-duration="2000">
                    <div className="text-center pt-5 h2 " style={{ fontWeight: 'bolder'}}>Gallery</div>
                    <div className="text-center pt-3 pb-3 h6" style={{ fontWeight: '500'}}>
                    Our projects and work, we have been worked so far.
                    </div>

                    <div class="container-fluid" data-aos="fade-up" data-aos-duration="2000">
                        <div class="px-lg-0">
                            <div class="row">
                            {/* <!-- Gallery item --> */}
                            <div class=" col-lg-4 col-md-6 mb-4">
                                <div class="bg-light rounded shadow-lg">
                                
                                    <img src="img1.jpg" alt="" class="img-fluid card-img-top"/>
                                <div class="p-4">
                                    <h5> <a href="#" class="text-dark" onClick={() => { setPopIndex(1) }} data-bs-toggle="modal" data-bs-target="#testModal">Red paint cup</a></h5>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    
                                </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}

                            {/* <!-- Gallery item --> */}
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-light rounded shadow-lg"><img src="img1.jpg" alt="" class="img-fluid card-img-top"/>
                                <div class="p-4">
                                    <h5> <a href="#" class="text-dark" onClick={() => { setPopIndex(2) }} data-bs-toggle="modal" data-bs-target="#testModal">Blorange</a></h5>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    
                                </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}

                            {/* <!-- Gallery item --> */}
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-light rounded shadow-lg"><img src="img1.jpg" alt="" class="img-fluid card-img-top"/>
                                <div class="p-4">
                                    <h5> <a href="#" class="text-dark" onClick={() => { setPopIndex(3) }} data-bs-toggle="modal" data-bs-target="#testModal">And She Realized</a></h5>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    
                                </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}

                            {/* <!-- Gallery item --> */}
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-light rounded shadow-lg"><img src="img1.jpg" alt="" class="img-fluid card-img-top"/>
                                <div class="p-4">
                                    <h5> <a href="#" class="text-dark" onClick={() => { setPopIndex(4) }} data-bs-toggle="modal" data-bs-target="#testModal">DOSE Juice</a></h5>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    
                                </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}

                            {/* <!-- Gallery item --> */}
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-light rounded shadow-lg"><img src="img1.jpg" alt="" class="img-fluid card-img-top"/>
                                <div class="p-4">
                                    <h5> <a href="#" class="text-dark" onClick={() => { setPopIndex(5) }} data-bs-toggle="modal" data-bs-target="#testModal">Pineapple</a></h5>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    
                                </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}

                            {/* <!-- Gallery item --> */}
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-light rounded shadow-lg"><img src="img1.jpg" alt="" class="img-fluid card-img-top"/>
                                <div class="p-4">
                                    <h5> <a href="#" class="text-dark" onClick={() => { setPopIndex(6) }} data-bs-toggle="modal" data-bs-target="#testModal">Yellow banana</a></h5>
                                    <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    
                                </div>
                                </div>
                            </div>
                            {/* <!-- End --> */}
                            </div>
                        </div>
                        </div>
                                    </div>
                                    </div> 
{/* popup modal */}
            <div class="modal fade" id="testModal" tabindex="-1" aria-labelledby="testModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-body p-5">
                    <img src={popContent[popIndex].image} alt="" class="img-fluid card-img-top"/>
                        <div className="about-title my-3">
                            {popContent[popIndex].title}
                        </div>
                        <div className="about-content">
                            {popContent[popIndex].content}
                        </div>
                    </div>
                    <div class="modal-footer border-white">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* End of popup modal */}
                                </div>
                            );
                        }