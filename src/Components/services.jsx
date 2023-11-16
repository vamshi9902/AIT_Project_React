import weather from '../Assets/images/weather.png';
import guide from '../Assets/images/guide.png';
import custom from '../Assets/images/customization.png';

const Services = () => {
    return (
        <div className="container services my-5">
            <div className="row">
                <div className="col-12 col-xl-3 col-lg-12 col-md-12 col-sm-12">
                    <p>What we serve</p>
                    <h1>We offer our best services</h1>
                </div>
                <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12">
                    <div className='p-2' style={{ boxShadow: "rgba(245, 173, 66, 0.15) 1.95px 1.95px 2.6px" }}>
                        <figure className='bg-warning rounded-circle' style={{ width: 50, height: 50 }}>
                            <img src={weather} alt="weather" className='p-2' style={{ width: '100%' }} />
                        </figure>
                        <h5>Calculate weather</h5>
                        <p>Lorem ipsum dolor sit amet,  adipisicing elit. Iure, ut? Blanditiis nostrum velit iure cum facilis aliquam aspernatur dignissimos error.</p>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12">
                    <div className='p-2' style={{ boxShadow: "rgba(245, 173, 66, 0.15) 1.95px 1.95px 2.6px" }}>
                        <figure className='bg-warning rounded-circle' style={{ width: 50, height: 50 }}>
                            <img src={guide} alt="guide" className='p-2' style={{ width: '100%' }} />
                        </figure>
                        <h5>Best tour guide</h5>
                        <p>Lorem ipsum dolor sit amet,  adipisicing elit. Iure, ut? Blanditiis nostrum velit iure cum facilis aliquam aspernatur dignissimos error.</p>
                    </div>
                </div>
                <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-12">
                    <div className='p-2' style={{ boxShadow: "rgba(245, 173, 66, 0.15) 1.95px 1.95px 2.6px" }}>
                        <figure className='bg-warning rounded-circle' style={{ width: 50, height: 50 }}>
                            <img src={custom} alt="custom" className='p-2' style={{ width: '100%' }} />
                        </figure>
                        <h5>Customization</h5>
                        <p>Lorem ipsum dolor sit amet,  adipisicing elit. Iure, ut? Blanditiis nostrum velit iure cum facilis aliquam aspernatur dignissimos error.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;