

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-light bg-white shadow-sm" style={{ height: '80px' }}>
            <div className="container-fluid justify-content-around">
                <span className="navbar-brand mb-0 navbar-heading">Zue Technologies</span>
                <span className="navbar-brand mb-0 h1"></span>
                <span className="navbar-brand mb-0 h1 d-none d-md-block">
                    <span className="navbar-link mb-0 mx-2">Home</span>
                    <span className="navbar-link mb-0 mx-2">About us</span>
                    <span className="navbar-link mb-0 mx-2">Gallery</span>
                    <span className="navbar-link mb-0 mx-2">Contact</span>
                </span>
                <a className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#menuContent" aria-controls="menuContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </a>
            </div>
        </nav>
        <div className="collapse" id="menuContent">
          <div className="bg-white p-4">
            <ul>
              <li className="menu-link my-2">Home</li>
              <li className="menu-link my-2">About</li>
              <li className="menu-link my-2">Gallery</li>
              <li className="menu-link my-2">Contact us</li>
            </ul>
          </div>
        </div>
        {props.children}
    </>
  );
}

 