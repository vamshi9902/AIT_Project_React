import fbImg from '../Assets/images/male-tourist.png';

const FooterTopBanner = () => {
    return (
        <div className="container-fluid bg-primary-subtle">
            <div className="container">
                <div className="row align-items-center justify-content-between px-5 py-3">
                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <h2>Subscribe now for usefull travelling information</h2>
                        <div className="input-group my-4">
                            <input type="text" className="form-control rounded-3" placeholder="Enter your email" aria-describedby="button-addon2" style={{ width: '100%' }} />
                            <button className="btn btn-warning text-white my-1 rounded-3 px-4 py-1" type="button" id="button-addon2" style={{ position: 'relative', top: '-40px', left: '79%' }}>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet  adipisicing elit. Atque praesentium sequi ratione molestiae voluptatum corrupti veniam quibusdam, eum enim error.</p>
                    </div>
                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 ms-auto">
                        <img src={fbImg} alt="Fb-Img" className='fbImg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTopBanner;