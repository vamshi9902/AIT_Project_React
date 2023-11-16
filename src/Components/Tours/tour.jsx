import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaLocationDot, FaRegStar } from 'react-icons/fa6';
import { MdPeopleAlt, MdSearch } from 'react-icons/md';
import { RiMapPinTimeLine } from 'react-icons/ri';
import { Link } from "react-router-dom";

function Tours() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchLocation, setSearchLocation] = useState("");
    const [searchDistance, setSearchDistance] = useState("");
    const [searchMaxGroupSize, setSearchMaxGroupSize] = useState("");
    const [filteredTours, setFilteredTours] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false);
    const cardsPerPage = 8;

    useEffect(() => {
        axios.get('/tours.json')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    // Filtering function
    const filterTours = () => {
        const filtered = data.filter((tour) => {
            const locationMatch = tour.city.toLowerCase().includes(searchLocation.toLowerCase());
            const distanceMatch = searchDistance === "" || tour.distance <= parseInt(searchDistance);
            const maxGroupSizeMatch = searchMaxGroupSize === "" || tour.maxGroupSize >= parseInt(searchMaxGroupSize);
            return locationMatch && distanceMatch && maxGroupSizeMatch;
        });
        setFilteredTours(filtered);
        setSearchClicked(true);
    };

    // Pagination logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = searchClicked ? filteredTours.slice(indexOfFirstCard, indexOfLastCard) : data.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <div className="container my-5">
            {/* Search inputs */}
            <div className="row search-inputs p-3" style={{ width: "70%" }}>
                <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ borderRight: '1px solid' }}>
                    <label htmlFor="locaton"><FaLocationDot color="red" />&nbsp; Location</label><br />
                    <input
                        id="locaton"
                        type="text"
                        placeholder="Where are you going ?"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                    />
                </div>
                <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{ borderRight: '1px solid' }}>
                    <label htmlFor="distance"><RiMapPinTimeLine color="red" />&nbsp; Distance</label><br />
                    <input
                        id="distance"
                        type="text"
                        placeholder="Distance k/m"
                        value={searchDistance}
                        onChange={(e) => setSearchDistance(e.target.value)}
                    />
                </div>
                <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="maxpeople"><MdPeopleAlt color="red" />&nbsp; Max People</label><br />
                            <input
                                id="maxpeople"
                                type="text"
                                placeholder="0"
                                value={searchMaxGroupSize}
                                onChange={(e) => setSearchMaxGroupSize(e.target.value)}
                            />
                        </div>
                        <div className="col-4">
                            <button className="btn btn-warning" onClick={filterTours}><MdSearch className="text-white fs-3" /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display filtered cards or all cards if search is not clicked */}
            {currentCards.reduce((rows, card, index) => {
                if (index % 4 === 0) {
                    rows.push([]);
                }
                rows[rows.length - 1].push(card);
                return rows;
            }, []).map((row, rowIndex) => (
                <div className="row my-5" key={rowIndex}>
                    {row.map((tour, cardIndex) => (
                        <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12" key={cardIndex}>
                            <div className="card mt-4" style={{ width: '18rem' }}>
                                <img src={tour.photo} className="card-img-top" alt={tour.title} />
                                <div className="card-body">
                                    <div className="one d-flex justify-content-between">
                                        <p> <FaLocationDot className="text-warning" /> {tour.city}</p>
                                        <p>
                                            <FaRegStar className="text-warning" />
                                            {tour.reviews.length === 0 ? " Not rated" : tour.reviews.length}
                                        </p>
                                    </div>
                                    <h5 className="card-title fs-3"><Link to={tour.path} className="link-title">{tour.title}</Link></h5>
                                    <div className="two d-flex justify-content-between">
                                        <p><span className="fw-bold text-warning">${tour.price}</span> /per person</p>
                                        <button className="btn btn-warning text-white"><Link to={tour.path} className="link-btn">Book Now</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            {/* Pagination buttons */}
            <div className="pagination justify-content-center gap-3 m-5">
                {Array.from({ length: Math.ceil(searchClicked ? filteredTours.length / cardsPerPage : data.length / cardsPerPage) }).map((_, index) => (
                    <button className="rounded-circle bg-warning text-white fw-bold p-2" key={index} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Tours;
