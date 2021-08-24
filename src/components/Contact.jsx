import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
    return (
        // <div className="vh-100 bg-dark" id="contact"> 
            <footer class="site-footer">
                <div class="container">
                <div class="row">
                <h1>Contact</h1>
                    <div class="col-sm-12 col-md-6">
                        <h6>Zue Technologies</h6>
                        <p class="text-justify">Build your Ideas.</p>
                    </div>

                    <div class="col-xs-8 col-md-3">
                        <h6>Phone</h6>
                        <h6>9812344587</h6>
                      
                    </div>

                    <div class="col-xs-6 col-md-3">
                    <h6>Address</h6>
                        <h6>Coimbatore</h6>
                       
                    </div>
                </div>
                </div>
                <div class="container">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" href="https://www.facebook.com/zuetechnologies.zuetechnologies"><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i></a></li>
                            <li><a class="youtube" href="#"><FontAwesomeIcon icon={faYoutube} /><i class="fa fa-youtube"></i></a></li>
                            <li><a class="instagram" href="https://www.instagram.com/zue_technologies/?hl=en"><FontAwesomeIcon icon={faInstagram} /><i class="fa fa-instagram"></i></a></li>
                            <li><a class="linkedin" href="https://www.linkedin.com/in/zue-technologies-7514a21b9/"><FontAwesomeIcon icon={faLinkedin} /><i class="fa fa-linkedin"></i></a></li>   
                        </ul>
                        <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2021 || All Rights Reserved by  </p>
                        <p class="copyright-text"><a href="#"> Zue Technologies</a></p>.
                       
                    </div>
                        </div>
                    </div>
                </div>
            </footer>
        // </div>
    )
}