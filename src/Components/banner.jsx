const Banner = (props) => {
    return (
        <div className="tourbanner">
            <div className="layer">
                <h1 className="text-white">{props.title}</h1>
            </div>
        </div>
    )
}

export default Banner;