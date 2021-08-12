

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-light bg-white shadow-sm" style={{ height: '10vh' }}>
            <div className="container-fluid justify-content-around">
                <span className="navbar-brand mb-0 navbar-heading">Zue Technologies</span>
                <span className="navbar-brand mb-0 h1"></span>
                <span className="navbar-brand mb-0 h1">
                    <span className="navbar-link mb-0">Home</span>
                    <span className="navbar-link mb-0">About us</span>
                    <span className="navbar-link mb-0">Gallery</span>
                    <span className="navbar-link mb-0">Contact</span>
                </span>
                
                
            </div>
        </nav>
        {props.children}
    </>
  );
}

 