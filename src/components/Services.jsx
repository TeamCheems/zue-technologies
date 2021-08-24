import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div id="services"> 
            <div className="p-5">
                <div className="text-center pt-5 h2" style={{ fontWeight: 'bolder'}}>Our Expertise</div>
                <div className="text-center pt-3 pb-3 h6" style={{ fontWeight: '500'}}>
                    Right from app development to scaling your organization, we have all the capabilities you need
                </div>
                <div className="row justify-content-center my-3">
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faIndustry} /></a> 
                        <div className="about-title my-3">
                            App Development
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                            Read more <a href="#" style={{fontSize: '10px', color: 'black'}}><FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faIndustry} /></a> 
                        <div className="about-title my-3">
                            App Development
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                            Read more <a href="#" style={{fontSize: '10px', color: 'black'}}><FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-3 bg-light rounded p-4">
                        <a href="#" style={{fontSize: '60px', color: 'black'}}><FontAwesomeIcon icon={faIndustry} /></a> 
                        <div className="about-title my-3">
                            App Development
                        </div>
                        <div className="about-content">
                            Build a secure, future-proof application through the latest technologies and enhance your user experience
                        </div>
                        <div className="my-4">
                            Read more <a href="#" style={{fontSize: '10px', color: 'black'}}><FontAwesomeIcon icon={faArrowRight} /></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}