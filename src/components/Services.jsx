import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faArrowRight, faRocket, faChalkboardTeacher, faUsers, faHome, faCogs} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 

export default function About() {  

    var [popupIndex, setPopupIndex] = useState(1); 

    const popupContent = {
        1: { 
            title: "Project for Educational Institute",
            icon: faUniversity,
            content: "Study of industry needs and adaptation of teaching accordingly, in all types of learning areas so we offering new and high-end engineering projects from concept to product for your institutions. This improvise the educational standards and enhanced experience on advanced technology.", 
        },
        2: { 
            title: "Project Guidance for Students",
            icon: faChalkboardTeacher,
            content: "We guide students to understand, develop and build the own concept to final product and provoke their interest in the specific field with hands-on experience.", 
        },
        3: { 
            title: "Project for Public User",
            icon: faUsers,
            content: "Competing in a current manufacturing world requires your process to be efficient and productive, and to produce quality products. Our skill sets, experience, and knowledge of this industry allow us to create a winning solution.", 
        }, 
        4: { 
            title: "Industrial Automation ",
            icon: faCogs,
            content: "Today’s ever-changing technology offers new and innovative ways to automate and control issues. To take advantage of these new technologies, you need a partner who understands how to apply them to your needs. From concept to product we are committed in developing and maintaining quality automation systems that assist in meeting your company’s production goals.", 
        },
        5: { 
            title: "Special Purpose Machine",
            icon: faHome,
            content: "We can help specify and install custom automation equipment and control to withstand the challenges in your facility with reduced downtime, improved quality, increased efficiency and production, and enhanced safety.", 
        },
        6: { 
            title: "Residential Automation",
            icon: faUsers,
            content: "We have design custom automation solutions around robotic platforms that completely automated what was once a manual operation. We understand the growing innovation of this sector and have the engineering skill, experience, and knowledge needed to stay ahead of the competition.", 
        },
    } ;

    return (
        <div id="services"> 
            <div className="p-5">
                <div className="text-center pt-5 h2 " style={{ fontWeight: 'bolder'}}>Our Mastery</div>
                <div className="text-center pt-3 pb-3 h6" style={{ fontWeight: '500'}}>
                    Right from app development to scaling your organization, we have all the capabilities you need
                </div>
                <div className="row justify-content-center my-3"data-aos="fade-up" data-aos-duration="2000">
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