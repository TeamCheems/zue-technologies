import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(props) {
  return (
    <>
        <div className="collapse fixed-top" id="menuContent">
          <div className="bg-light p-4">
            <div style={{ height: '80px' }}></div>
            <ul className="p-0 px-5 list-unstyled">
              <li className="my-3 text-end"><a className="menu-link" href="#"> Home</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#">About</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#">Gallery</a></li>
              <li className="my-3 text-end"><a className="menu-link" href="#">Contact us</a></li>
              <li className="my-3 d-flex justify-content-end">
                <a href="#" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faFacebook} /></a> 
                <a href="#" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faInstagram} /></a> 
                <a href="#" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faLinkedin} /></a> 
                <a href="#" className="navbar-link mx-2 h2"><FontAwesomeIcon icon={faYoutube} /></a> 
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-light bg-white shadow-sm fixed-top" style={{ height: '80px' }}>
            <div className="container-fluid justify-content-around">
                <span className="navbar-brand mb-0 navbar-heading">Zue Technologies</span>
                <span className="navbar-brand mb-0 h1"></span>
                <span className="navbar-brand mb-0 h1 d-none d-md-block">
                    <a href="#" className="navbar-link mb-0 mx-2">Home</a>
                    <a href="#" className="navbar-link mb-0 mx-2">About us</a>
                    <a href="#" className="navbar-link mb-0 mx-2">Gallery</a>
                    <a href="#" className="navbar-link mb-0 mx-2">Contact</a>
                </span>
                <a className="navbar-toggler d-block d-md-none border-white" type="button" data-bs-toggle="collapse" data-bs-target="#menuContent" aria-controls="menuContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="text-dark"/>
                </a>
            </div>
        </nav>
        
        {props.children}
    </>
  );
}

 