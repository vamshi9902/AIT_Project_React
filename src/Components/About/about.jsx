import Banner from "../banner";
import OurTeam from "./ourTeam";
import ClientsCarousel from "../clientsCarousel";
import FooterTopBanner from "../footerTopBanner";
import about from '../../Assets/images/video.mp4';
import { FaCheckDouble, FaHeadset } from 'react-icons/fa6'

const About = () => {
    return(
        <>
        <Banner title='About' />
        <div className="container rounded-3 my-5 about-bg">
                <div className="row">
                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
                        <h1 className='fw-bolder'>About Us</h1>
                        <b>Growing community by inspiring healthy is our commitment with farmers, the abundant living on the field.</b>
                        <p style={{ textAlign: 'justify' }} className='pt-2'>Your satisfaction with your experience that your recommendation. Sed ut unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere veniam recusandae excepturi ex. Eveniet dolores doloremque, quam, nam illo explicabo aperiam velit  numquam distinctio, iusto laborum sed magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ea.</p>
                    </div>
                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12  p-5">
                        <video src={about} width={'100%'} autoPlay loop ></video>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 "><div className="d-flex justify-content-center align-items-center gap-4">
                        <div>
                            {<FaCheckDouble className='fs-1' />}
                        </div>
                        <div>
                            <h3>Satisfaction Guarantee</h3>
                            <p>Despite the variety of fish you could catch, no fish is more desirable than the bluefin tuna.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                        <div className="d-flex justify-content-center align-items-center gap-4">
                            <div>
                                {<FaHeadset className='fs-1'/>}
                            </div>
                            <div>
                                <h3>Online Support</h3>
                                <p>Some anglers have even battled to reel in bluefin tuna weighing trips travel a maximum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurTeam />
            <ClientsCarousel />
            <FooterTopBanner />
        </>
    );
}

export default About;