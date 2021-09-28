import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPhoneAlt,faAddressCard,faMapMarkerAlt,faPlus,faBuilding} from '@fortawesome/free-solid-svg-icons'
export default function Home() {
    return (
        // <div className="vh-100 bg-dark" id="contact"> 
        <section id="contact">
            <footer class="site-footer p-4">
                <div class="container">
                <h1>Contact</h1>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                            <h6><FontAwesomeIcon icon={faBuilding} /><i class="fa fa-building"></i>     Zue Technologies</h6>
                            <p class="text-justify">Build your Ideas.</p>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                            <h6><FontAwesomeIcon icon={faPhoneAlt} /><i class="fa fa-phonealt"></i>   Phone</h6>
                            <p>8870795518</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faEnvelope} /><i class="fa fa-envelope"></i>  Email</h6>
                            <p>zuetechnologies@gmail.com</p>
                            </div>  
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faAddressCard} /><i class="fa fa-addresscard"></i>   Address</h6>
                            <p>9B, Anboli Nagar,</p> 
                            <p>Chitra Nagar, Saravanampatti, </p>
                            <p>Coimbatore,</p>
                            <p> Tamil Nadu - 641006.</p>
                        
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faMapMarkerAlt} /><i class="fa fa-mapmakeralt"></i>   Location</h6>
                        <div>
         
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15662.534226813983!2d77.0045315!3d11.0660762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a87110308fe547!2sZue%20technologies!5e0!3m2!1sen!2sin!4v1632845844510!5m2!1sen!2sin"></iframe>
       </div>
                        
                        </div>
                        
                        <div class="col-lg-4 col-md-6 mb-4 justify-content-center flex-column text-justify">
                        <h6><FontAwesomeIcon icon={faPlus} /><i class="fa fa-plus"></i>   Follow us</h6><br/>
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