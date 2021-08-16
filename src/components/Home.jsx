

export default function Home() {
    return (
        <div className="vh-100" id="home"> 
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="row w-75">
                    <div className="col-12 col-md-7 text-center text-md-start my-auto">
                        <h1 style={{fontSize: '50px'}}> Your Right Stop For </h1>
                        <h1 style={{ fontWeight: 'bolder',fontSize: '70px' }}> Industrial Automation Solutions.</h1>
                        <button className="btn btn-dark my-4 btn-lg" style={{ fontSize: '30px'}}>Get in touch</button>
                    </div>
                    <div className="col-12 col-md-5 text-center"><img className="pic" src="frontpic.png"/></div>
                </div>
            </div>
        </div>
    )
}