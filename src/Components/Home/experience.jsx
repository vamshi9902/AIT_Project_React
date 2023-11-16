import experience from '../../Assets/images/experience.png';


const Experience = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <button className='btn btn-warning rounded-5 mb-2 px-4 py-0' id='btn-font'>Experinece</button>
                    <h1>With our all experience we will serve you</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus expedita perspiciatis numquam aliquid iure, inventore impedit placeat voluptate id!</p>
                    <div className="row">
                        <div className="col-4">
                            <span className='px-2 py-3 text-white m-3' style={{ backgroundColor: "#fc8123", display: 'inline-block', borderRadius: "10px 5px 10px 5px" }}>12k+</span>
                            <h6>Successfull Trips</h6>
                        </div>
                        <div className="col-4">
                            <span className='px-3 py-3 text-white m-3' style={{ backgroundColor: "#fc8123", display: 'inline-block', borderRadius: "10px 5px 10px 5px" }}>2k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className="col-4">
                            <span className='px-4 py-3 text-white m-3' style={{ backgroundColor: "#fc8123", display: 'inline-block', borderRadius: "10px 5px 10px 5px" }}>15</span>
                            <h6>Years experience</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <img src={experience} alt="experience" />
                </div>
            </div>
        </div>
    )
}

export default Experience;