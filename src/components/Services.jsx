import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faArrowRight, faRocket, faChalkboardTeacher, faUsers, faHome, faCogs} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 

export default function About() {  

    var [popupIndex, setPopupIndex] = useState(1); 

    const popupContent = {
        1: { 
            title: "Project for Educational Institute",
            icon: faUniversity,
            content: "From concept to production, we offer new projects for your educational institutions. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        2: { 
            title: "Project Guidance for Students",
            icon: faChalkboardTeacher,
            content: "Design and integrate your projects with our guidance. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        3: { 
            title: "Project for Public User",
            icon: faUsers,
            content: "We are committed to developing projects that will meet and exceed your expectations. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        }, 
        4: { 
            title: "Industrial Automation ",
            icon: faUsers,
            content: "We building and maintaining quality automation systems that helps you reach your goals. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        5: { 
            title: "Special Purpose Machine",
            icon: faUsers,
            content: "We can design and build automated control systems that will increase safety, quality, productivity, and efficiency Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
        6: { 
            title: "Residential Automation",
            icon: faUsers,
            content: "Automate your entire facility and integrate it with new or existing equipment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque obcaecati vel accusantium iure autem inventore rem! Libero, reprehenderit fugit? Culpa incidunt provident excepturi suscipit mollitia recusandae dolor corporis voluptate?", 
        },
    } ;

    return (
        <div id="services"> 
            <div className="p-5">
                <div className="text-center pt-5 h2 " style={{ fontWeight: 'bolder'}}>Our Mastery</div>
                <div className="text-center pt-3 pb-3 h6" style={{ fontWeight: '500'}}>
                    Right from app development to scaling your organization, we have all the capabilities you need
                </div>
                <div className="row justify-content-center my-3">
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faUniversity} /></a> 
                        <div className="about-title my-3">
                            Project for Educational Institute
                        </div>
                        <div className="about-content">
                           From concept to production, we offer new projects for your educational institutions.
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}} onClick={() => { setPopupIndex(1) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faChalkboardTeacher} /></a> 
                        <div className="about-title my-3">
                            Project Guidance for Students
                        </div>
                        <div className="about-content">
                        Design and integrate your projects with our guidance
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}} onClick={() => { setPopupIndex(2) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faUsers} /></a> 
                        <div className="about-title my-3">
                            Project for Public User
                        </div>
                        <div className="about-content">
                         We are committed to developing projects that will meet and exceed your expectations.
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}} onClick={() => { setPopupIndex(3) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faCogs} /></a> 
                        <div className="about-title my-3">
                            Industrial Automation 
                        </div>
                        <div className="about-content">
                        We building and maintaining quality automation systems that helps you reach your goals.
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}} onClick={() => { setPopupIndex(4) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faRocket} /></a> 
                        <div className="about-title my-3">
                            Special Purpose Machine
                        </div>
                        <div className="about-content">
                        We can design and build automated control systems that will increase safety, quality, productivity, and efficiency
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}} onClick={() => { setPopupIndex(5) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faHome} /></a> 
                        <div className="about-title my-3">
                            Residential Automation
                        </div>
                        <div className="about-content">
                        Automate your entire facility and integrate it with new or existing equipment.
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}} onClick={() => { setPopupIndex(6) }} data-bs-toggle="modal" data-bs-target="#readMoreModal">Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                </div>
            </div> 

            {/* popup modal */}   

            <div class="modal fade" id="readMoreModal" tabindex="-1" aria-labelledby="readMoreModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-body p-5">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={popupContent[popupIndex].icon} /></a> 
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

            {/* End of popup modal */}

        </div>
    )
}