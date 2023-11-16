import HomeTopBanner from "./homeTopBanner";
import Services from "../services";
import Tours from "../Tours/tour";
import Experience from "./experience";
import Gallery from "../gallery";
import ClientsCarousel from "../clientsCarousel";
import FooterTopBanner from "../footerTopBanner";

const Home = () => {
    return (
        <>
            <HomeTopBanner />
            <Services />
            <div className="container">
                <button className='btn btn-warning rounded-5 mb-2 px-4 py-0' id='btn-font'>Explore</button>
                <h1>Our featured tours</h1>
            </div>
            <Tours />
            <Experience />
            <Gallery />
            <ClientsCarousel />
            <FooterTopBanner />
        </>
    );
}

export default Home;