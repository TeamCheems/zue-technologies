import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
    return (
        // <div className="vh-100 bg-dark" id="contact"> 
        <section id="contact">
            <footer class="site-footer p-4">
                <div class="container">
                <h1>Contact</h1>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                            <h6>Zue Technologies</h6>
                            <p class="text-justify">Build your Ideas.</p>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                            <h6><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i>   Phone</h6>
                            <p>8870795518</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i>  Email</h6>
                            <p>zuetechnologies@gmail.com</p>
                            </div>  
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i>   Address</h6>
                            <p>Coimbatore</p>
                        
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i>   Location</h6>
                            <p>Coimbatore</p>
                        
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <ul class="social-icons">
                            <li><a class="facebook" href="https://www.facebook.com/zuetechnologies.zuetechnologies"><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i></a></li>
                            <li><a class="youtube" href=" https://youtube.com/channel/UCt1c-lSSaqtnH_JJRB_1Trw"><FontAwesomeIcon icon={faYoutube} /><i class="fa fa-youtube"></i></a></li>
                            <li><a class="instagram" href="https://www.instagram.com/zue_technologies/?hl=en"><FontAwesomeIcon icon={faInstagram} /><i class="fa fa-instagram"></i></a></li>
                            <li><a class="linkedin" href="https://www.linkedin.com/in/zue-technologies-7514a21b9/"><FontAwesomeIcon icon={faLinkedin} /><i class="fa fa-linkedin"></i></a></li>   
                        </ul><br/>
                        </div>
                    </div>
                </div>
                
                    <div class="container text-center">
                        <p class="copyright-text br">Copyright &copy; 2021|| All Rights Reserved by <a href="#"><br/>Zue Technologies</a></p>
                    
                        <p class="copyright-text">Developed by <a href="https://github.com/TeamCheems">Team Cheems</a></p>
                        
                    </div>
            </footer>
            </section>
        //  </div>
        
    )
}