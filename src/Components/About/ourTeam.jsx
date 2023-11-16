import ava1 from '../../Assets/images/ava-1.jpg';
import ava2 from '../../Assets/images/ava-2.jpg';
import ava3 from '../../Assets/images/ava-3.jpg';

const OurTeam = () => {
    return(
        <div className="container my-5">
                <h1>Our Team</h1>
                <div className="ourTeam mt-4">
                    <div className="ot-card">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ava1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2>Jhon Deo</h2>
                                <p className="card-text">Employee</p>
                            </div>
                        </div>
                    </div>
                    <div className="ot-card">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ava2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2>Cathrine Jo</h2>
                                <p className="card-text">Employee</p>
                            </div>
                        </div>
                    </div>
                    <div className="ot-card">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ava3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2>Peter Alice</h2>
                                <p className="card-text">Employee</p>
                            </div>
                        </div>
                    </div>
                    <div className="ot-card">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ava1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2>Jhon Deo</h2>
                                <p className="card-text">Employee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default OurTeam;