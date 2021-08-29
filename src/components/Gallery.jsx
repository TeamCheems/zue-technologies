export default function Bothub() {
    return (
        <div className="m-5" id="gallery"> 
            <div className="container">
            <div data-aos="fade-in" data-aos-duration="2000">
                    <div className="text-center pt-5 h2 " style={{ fontWeight: 'bolder'}}>Gallery</div>
                    <div className="text-center pt-3 pb-3 h6" style={{ fontWeight: '500'}}>
                    Our projects and work, we have been working so far.
                    </div>
                <div className="row">
                    <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4 my-md-3">
                        <img src="img1.jpg" className="img-fluid rounded"></img>
                    </a>
                    <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4 my-md-3">
                        <img src="img2.jpg" className="img-fluid rounded"></img>
                    </a>
                    <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4 my-md-3">
                        <img src="img3.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
                <div className="row">
                    <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4 my-md-3">
                        <img src="img4.jpg" className="img-fluid rounded"></img>
                    </a>
                    <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4 my-md-3">
                        <img src="img5.jpg" className="img-fluid rounded"></img>
                    </a>
                    <a href="#" data-toggle="lightbox" data-gallery="gallery" className="col-md-4 my-md-3">
                        <img src="img6.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
                </div>
            </div>
        </div>
        
    )
}