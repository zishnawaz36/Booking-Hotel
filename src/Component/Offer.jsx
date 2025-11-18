import offer from "../assests/offer.png";
function Offer() {
    return(
        <>
        <div className="offer">
            <div className="fGalleryImage">
                <img src={offer} alt="offer image" />
            </div>
            
                <div className="fGalleryText">
                <h3>Get special offers,<span>and more from travelworld</span></h3>
                <input type="text"
                placeholder="enter your email">
                </input>
                <a className="fButton">Subscribe</a>
            </div>
            
        </div>
        </>
    )
}
export default Offer;