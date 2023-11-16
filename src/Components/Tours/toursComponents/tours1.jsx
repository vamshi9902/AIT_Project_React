import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegStar, FaLocationCrosshairs, FaLocationDot, FaStar } from 'react-icons/fa6';
import { BiDollarCircle } from 'react-icons/bi';
import { RiMapPinTimeLine } from 'react-icons/ri';
import { LuUsers2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function Star({ filled, onHover, onClick, onMouseLeave }) {
    return (
      <FaStar
        className={`cursor-pointer ${filled ? 'text-warning' : 'text-secondary'}`}
        onMouseEnter={onHover}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    );
  }  
  
function Tours1() {
  const [guest, setGuest] = useState(0);
  const [tourData, setTourData] = useState({});
  const [hoveredStar, setHoveredStar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('/tours.json');
        if (Array.isArray(response.data) && response.data.length > 0) {
          setTourData(response.data[0]);
          setLoading(false);
        } else {
          setError('Invalid data format');
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchTourData();
  }, []);

  const handleStarClick = (index) => {
    const newReviews = [...tourData.reviews];
    for (let i = 0; i <= index; i++) {
      newReviews[i] = !newReviews[i];
    }
    setTourData({ ...tourData, reviews: newReviews });
  };
  

  const handleStarHover = (index) => {
    setHoveredStar(index);
  };

  const handleStarLeave = () => {
    setHoveredStar(null);
  };

  const handleGuestChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || isNaN(inputValue) || inputValue < 0) {
      setGuest(0);
    } else {
      setGuest(parseInt(inputValue, 10));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { title, reviews, address, city, price, distance, maxGroupSize, desc, photo } = tourData;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12 main">
          <img src={photo} alt={title} className='pb-5 mt-3' style={{ width: '100%' }} />
          <div className='main-text p-4'>
            <h1>{title}</h1>
            <p>
              <span>
                <FaRegStar className='text-warning' /> {reviews.length > 0 ? reviews.filter((review) => review).length : 'Not rated'}
              </span>
              <span className='ps-5'><FaLocationCrosshairs /> {address}</span>
            </p>
            <p>
              <span><FaLocationDot /> {city}</span>
              <span className='ps-5'><BiDollarCircle /> {price} per person</span>
              <span className='ps-5'><RiMapPinTimeLine /> {distance} k/m</span>
              <span className='ps-5'><LuUsers2 />{maxGroupSize} people</span>
            </p>
            <h3>Description</h3>
            <p>{desc}</p>
          </div>
          <div className='review p-4'>
            <h2>Reviews ({reviews.length} stars)</h2>
            <div className='fs-3 text-secondary pt-4'>
              {[1, 2, 3, 4, 5].map((rating, index) => (
                <Star
                key={index}
                filled={index < (hoveredStar !== null ? hoveredStar + 1 : reviews.filter((review) => review).length)}
                onHover={() => handleStarHover(index)}
                onMouseLeave={handleStarLeave} 
                onClick={() => handleStarClick(index)}
              />              
              ))}
            </div>
          </div>
        </div>

        <div className='col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 side p-5'>
          <p><span className='fw-bold fs-3'>{price}</span>/ per person {<FaRegStar className='text-warning' />} ({reviews.length > 0 ? reviews.filter((review) => review).length : 0 })</p><hr />
          <div>
            <h4>Information</h4>
            <div className='d-flex flex-column gap-3 p-4 information'>
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Phone Number' />
              <div className='d-flex gap-3'>
                <input type="date" />
                <input type="text" placeholder='Number of Guests' onChange={handleGuestChange} />
              </div>
            </div>
          </div>
          <p className='d-flex justify-content-between pt-4'><span>{price} X 1 person</span><span>{price}</span></p>
          <p className='d-flex justify-content-between'><span>Service charges</span><span>10</span></p>
          <h4 className='d-flex justify-content-between'><span>Total</span><span>{price + 10}</span></h4>
          <Link to='/'>
            <button className="btn btn-warning w-100 mt-2">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tours1;