import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(props) {
  return (
    <>
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
        <div className="collapse" id="menuContent">
          <div className="bg-white p-4">
            <ul className="p-0 px-5">
              <li className="li my-3 text-end"><a className="menu-link" href="#"> Home</a></li>
              <li className="li my-3 text-end"><a className="menu-link" href="#">About</a></li>
              <li className="li my-3 text-end"><a className="menu-link" href="#">Gallery</a></li>
              <li className="li my-3 text-end"><a className="menu-link" href="#">Contact us</a></li>
            </ul>
            <div className="row">
                <FontAwesomeIcon icon={faInstagram} />

            </div>
          </div>
        </div>
        {props.children}
    </>
  );
}

 