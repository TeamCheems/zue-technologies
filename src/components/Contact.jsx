import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
    return (
        // <div className="vh-100 bg-dark" id="contact"> 
        <section id="contact">
            <footer class="site-footer p-5">
                <div class="container">
                <h1>Contact</h1>
                <div class="row">
                    <div class="col-xs-6 col-md-3 text-justify">
                        <h6>Zue Technologies</h6>
                        <p class="text-justify">Build your Ideas.</p>
                    </div>

                    <div class="col-xs-8 col-md-3">
                        <h6>Phone</h6>
                        <p>8870795518</p>
                      
                    </div>

                    <div class="col-xs-6 col-md-3 ">
                    <h6>Address</h6>
                        <p>Coimbatore</p>
                       
                    </div>
                    <div class="col-xs-6 col-md-3 ">
                    <h6>Email</h6>
                        <p>zuetechnologies@gmail.com</p>
                       
                    </div>
                </div>
                </div>
                <div class="container">
                    <div class="col-md-11 col-xs-1">
                        <ul class="social-icons">
                            <li><a class="facebook" href="https://www.facebook.com/zuetechnologies.zuetechnologies"><FontAwesomeIcon icon={faFacebook} /><i class="fa fa-facebook"></i></a></li>
                            <li><a class="youtube" href=" https://youtube.com/channel/UCt1c-lSSaqtnH_JJRB_1Trw"><FontAwesomeIcon icon={faYoutube} /><i class="fa fa-youtube"></i></a></li>
                            <li><a class="instagram" href="https://www.instagram.com/zue_technologies/?hl=en"><FontAwesomeIcon icon={faInstagram} /><i class="fa fa-instagram"></i></a></li>
                            <li><a class="linkedin" href="https://www.linkedin.com/in/zue-technologies-7514a21b9/"><FontAwesomeIcon icon={faLinkedin} /><i class="fa fa-linkedin"></i></a></li>   
                        </ul><br/>
                        </div>
                    <div class="container row">
                    <div class="col-md-8 col-xs-12" style={{float:"left"}}>
                        <p class="copyright-text">Copyright &copy; 2021|| All Rights Reserved by <a href="#">Zue Technologies</a></p>
                    </div>
                        <div class="col-xs-6 col-md-4" style={{float:"right"}} >
                        <p class="copyright-text">Developed by <a href="https://github.com/TeamCheems">Team Cheems</a></p>
                        </div>
                    </div>
                    </div>
            </footer>
            </section>
        //  </div>
        
    )
}