import imgone from '../../Assets/images/hero-img01.jpg';
import imgtwo from '../../Assets/images/hero-img02.jpg';
import video from '../../Assets/images/hero-video.mp4';
import earth from '../../Assets/images/world.png';

const HomeTopBanner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className='d-flex'>
                        <button className="btn btn-warning rounded-5 px-4 py-0" id='btn-font'>Know before you go</button><img src={earth} alt="earth" width={60} />
                    </div>
                    <h1 className='py-4'>Travelling opens the doors to creaing <span className="text-warning">memories</span></h1>
                    <p>Lorem ipsum dolor, sit amet  adipisicing elit. Sint modi reiciendis voluptas nulla iusto fuga eveniet veritatis dolorum voluptatum ullam, harum corrupti est incidunt at necessitatibus quod vero velit sed quam labore perferendis, architecto facilis quisquam quo! Architecto suscipit, nesciunt quia, iste aperiam illo iusto, exercitationem similique aut aliquam corrupti. Lorem ipsum, dolor sit amet  adipisicing elit. Magni eaque debitis, dolor obcaecati dignissimos nobis. Excepturi labore quos eos esse!</p>
                </div>
                <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex hero-banner-Imgs">
                    <img src={imgone} alt="hero-img01" className='rounded-4 hero-Img me-2' style={{border:'1px solid orange', width:"200px", height:"380px"}} />
                    <div className='d-flex mt-5'>
                        <video src={video} className="object-fit-fill rounded-4 hero-Imgs" controls autoPlay loop style={{border:'1px solid orange', width:"200px", height:"380px"}} ></video>
                        <img src={imgtwo} alt="hero-img02" style={{border:'1px solid orange', width:"200px", height:"380px"}} className='rounded-4 mx-2 mt-5 hero-Imgs' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeTopBanner;