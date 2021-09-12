import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';  
import Headroom from 'react-headroom';  
import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';



export default function Navbar(props) {  
  var [toggle, setToggle] = useState(false);
    
  useEffect(() => {
      var myCollapse = document.querySelector('.collapse')
      var bsCollapse = new Collapse(myCollapse, {toggle: false})
      toggle ? bsCollapse.show() : bsCollapse.hide()
  }) 

  const collapse = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
      <Headroom>
        <div className="collapse fixed-top shadow-lg" id="collapseTarget" style={{marginTop: '80px'}} id="menuContent">
          <div className="bg-light p-4">
            <ul className="p-0 px-5 list-unstyled">
              <li className="my-3 text-end"><a className="menu-link" href="#home" onClick={collapse}> Home</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#about" onClick={collapse}>About</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#services" onClick={collapse}> Services</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#gallery" onClick={collapse}>Gallery</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#contact" onClick={collapse}>Contact us</a></li>
              <li className="my-3 d-flex justify-content-end">
                <a href="https://www.facebook.com/zuetechnologies.zuetechnologies" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faFacebook} /></a> 
                <a href="https://www.instagram.com/zue_technologies/?hl=en" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faInstagram} /></a> 
                <a href="https://www.linkedin.com/in/zue-technologies-7514a21b9/" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faLinkedin} /></a> 
                <a href="https://youtube.com/channel/UCt1c-lSSaqtnH_JJRB_1Trw" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faYoutube} /></a> 
              </li>
              </ul>
            </div>
          </div>
          <nav className="navbar navbar-light bg-white shadow-sm" style={{ height: '80px' }}>
              <div className="container-fluid justify-content-around">
                  <span className="navbar-brand mb-0 navbar-heading">Zue Technologies</span>
                  <span className="navbar-brand mb-0 h1"></span>
                  <span className="navbar-brand mb-0 h1 d-none d-md-block">
                      <a href="#home" className="navbar-link mb-0 mx-2">Home</a>
                      <a href="#about" className="navbar-link mb-0 mx-2">About us</a>
                      <a href="#services" className="navbar-link mb-0 mx-2">Services</a>
                      <a href="#gallery" className="navbar-link mb-0 mx-2">Gallery</a>
                      <a href="#contact" className="btn btn-dark mx-2">Contact</a>
                  </span>
                  <a className="navbar-toggler d-block d-md-none border-white" type="button" onClick={collapse}>
                      <FontAwesomeIcon icon={faBars} className="text-dark"/>
                  </a>
              </div>
          </nav>
        </Headroom>
        {props.children}
    </>
  );
}

 