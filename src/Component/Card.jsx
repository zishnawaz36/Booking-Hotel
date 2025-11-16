import Hotel from "../assests/Hotel-1.png";
import Hotel1 from "../assests/HotelImg/Hotel 1.png";
import Hotel2 from "../assests/HotelImg/Hotel 2.png";
import Hotel3 from "../assests/HotelImg/Hotel 3.png";
import Hotel4 from "../assests/HotelImg/Hotel 5.png";
import Hotel5 from "../assests/HotelImg/Hotel 6.png";
import Hotel6 from "../assests/HotelImg/Hotel 7.png";
import Hotel7 from "../assests/HotelImg/Hotel 8.png";
import {CiLocationOn}  from "react-icons/ci";
import { Link } from "react-router-dom";
function Card() {
    const cardData = [
        {
            id:1,
            img:Hotel1,
            title:"The Oasis",
            money:"$10,000",
            icon:<CiLocationOn/>,
            Address:"Rio de Janeiro, Brazil",
            Rating:"⭐4.8"
        },
         {
            id:2,
            img:Hotel2,
            title:"The Sanctuary",
            money:"$9,000",
            Address:"Bali, Indonesia",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
        {
            id:3,
            img:Hotel3,
            title:"The Infinity",
            money:"$8,000",
            Address:"Sydney, Australia",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
        {
            id:4,
            img:Hotel4,
            title:"La Maison",
            money:"$8,000",
            Address:"Barcelona, Spain",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
        {
            id:5,
            img:Hotel5,
            title:"Serenity Shores",
            money:"$7,000",
            Address:"Sydney, Australia",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
        {
            id:6,
            img:Hotel6,
            title:"Azure Haven",
            money:" $8,000",
            Address:"Barcelona, Spain",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
        {
            id:7,
            img:Hotel7,
            title:"Ocean Breeze",
            money:"$7,000",
            Address:"Bali, Indonesia",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
        {
            id:8,
            img:Hotel1,
            title:"Palm Breeze",
            money:"$6,000",
            Address:"Phuket, Thailand",
            icon:<CiLocationOn/>,
            Rating:"⭐4.8"
        },
    ]
    return(
        <>
        <h1 className="accomodation-h1">Our Top Rated Hotels</h1>
          <div className="f-accomodation">
        {cardData.map((item) =>(
                <div className="ItemfinnerGallery" key={item.id}>
                <div className="fGalleryImage">
                    <img src={item.img} alt="The Oasis" />
                </div>
                  <div className="fButton">{item.Rating}</div>
                  <p className="booking"><a href="#" className="fButton">Booking</a></p>
                <div className="fGalleryText">
                    <div className="f-accomodation-text">
                    <h3>{item.title}</h3>
                    <p>{item.money}</p>
                    </div>
                    <div className="f-accomodation-text-2">
                    <div className="Location">{item.icon}</div>
                    <div>{item.Address}</div>
                    </div>
                </div>
            </div>
            
        ))}
</div>
<div className="f-accomodation-button"><Link className="fButton" to="/view-more">View more</Link></div>
        </>
    )
}
export default Card;