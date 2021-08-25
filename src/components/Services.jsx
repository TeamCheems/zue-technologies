import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faArrowRight, faRocket, faChalkboardTeacher, faUsers, faHome, faCogs} from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div id="services"> 
            <div className="p-5">
                <div className="text-center pt-5 h2 " style={{ fontWeight: 'bolder'}}>Our Services</div>
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
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}}>Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faChalkboardTeacher} /></a> 
                        <div className="about-title my-3">
                            Project Guidance for Students
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}}>Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faUsers} /></a> 
                        <div className="about-title my-3">
                            Project for Public User
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}}>Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faCogs} /></a> 
                        <div className="about-title my-3">
                            Industrial Automation 
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}}>Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faRocket} /></a> 
                        <div className="about-title my-3">
                            Special Purpose Machine
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}}>Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faHome} /></a> 
                        <div className="about-title my-3">
                            Residential Automation
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                             <a href="#" style={{fontSize: '15px', color: 'black'}}>Read more<FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}