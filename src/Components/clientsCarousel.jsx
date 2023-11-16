import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ava1 from '../Assets/images/ava-1.jpg';
import ava2 from '../Assets/images/ava-2.jpg';
import ava3 from '../Assets/images/ava-3.jpg';

const ClientsCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="container my-5">
            <div className="clients-love">
                <button className='btn btn-warning rounded-5 mb-3 px-4 py-0' id='btn-font'>Client Love</button>
                <h1>What our clients say about us</h1>
                <div className='w-3/4 m-auto'>
                    <div className="my-5">
                        <Slider {...settings}>
                            {reviewData.map((d) => (
                                <div key={d.id} className="p-3">
                                    <div>
                                        <p>{d.review}</p>
                                    </div>
                                    <div className='d-flex mb-5'>
                                        <img src={d.img} alt="Img" className='rounded' style={{ width: '80px' }} />
                                        <div className='px-4'>
                                            <h5>{d.name}</h5>
                                            <p>{d.person}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

const reviewData = [
    {
        id: 1,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava1,
        name: 'Jhon Deo',
        person: 'Customer'
    },
    {
        id: 2,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava2,
        name: 'Cathrine Jo',
        person: 'Customer'
    },
    {
        id: 3,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava3,
        name: 'Peter Alice',
        person: 'Customer'
    },
    {
        id: 4,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava1,
        name: 'Jhon Deo',
        person: 'Customer'
    },
    {
        id: 5,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava2,
        name: 'Cathrine Jo',
        person: 'Customer'
    },
    {
        id: 6,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava3,
        name: 'Peter Alice',
        person: 'Customer'
    },
    {
        id: 7,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava1,
        name: 'Jhon Deo',
        person: 'Customer'
    },
    {
        id: 8,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava2,
        name: 'Cathrine Jo',
        person: 'Customer'
    },
    {
        id: 9,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava3,
        name: 'Peter Alice',
        person: 'Customer'
    },
    {
        id: 10,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava1,
        name: 'Jhon Deo',
        person: 'Customer'
    },
    {
        id: 11,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava2,
        name: 'Cathrine Jo',
        person: 'Customer'
    },
    {
        id: 12,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste fugit explicabo ipsam rem facere quisquam facilis consequuntur quae eveniet excepturi tempore, fugiat harum dolore aut neque perferendis doloribus magnam quam ut praesentium veritatis quibusdam cum soluta dolorum! Alias, quas cum.",
        img: ava3,
        name: 'Peter Alice',
        person: 'Customer'
    },
]

export default ClientsCarousel;