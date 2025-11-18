import Feature1 from "../assests/FeatureNews/img-1.png";
import Feature2 from "../assests/FeatureNews/img-2.png";
import Feature3 from "../assests/FeatureNews/img-3.png";
import { CiCalendarDate } from "react-icons/ci";
function FeatureNews() {
    const featureNews = [
        {
            id:1,
            img:Feature1,
            Location:<CiCalendarDate/>,
            date:"February 20,2026",
            title:"Delicious restuarant at hanalei Bay",
            subtitle:"Delicious Restaurant at Hanalei Bay serves fresh island flavors with stunning ocean views. Enjoy warm hospitality, locally inspired dishes, and a relaxed seaside dining experience you’ll love.",
        },
        {
            id:2,
            img:Feature2,
            Location:<CiCalendarDate/>,
            date:"February 20,2026",
            title:"Top 10 most beautiful check-in spots in Ph ...",
            subtitle:"Explore the Top 10 most beautiful check-in spots in the Philippines, from Palawan’s lagoons and Boracay’s white sands to the Chocolate Hills, Mayon Volcano, and the surf paradise of Siargao. Each destination offers stunning views and perfect photo moments.",
        },
        {
            id:3,
            img:Feature3,
            Location:<CiCalendarDate/>,
            date:"February 20,2026",
            title:"Top 5 newest services at Navagio Beach",
            subtitle:"Experience the Top 5 newest services at Navagio Beach, including upgraded boat tours, cliffside viewing platforms, and improved beach facilities. With new guided photo spots and convenient shuttle services, visitors can enjoy smoother access and stunning views like never before. Navagio Beach now offers a more comfortable, scenic, and unforgettable adventure.",
        }
    ]
    return(
        <>
        <h1 className="feature-h1">Feature</h1>
        <div className="feature">
            {featureNews.map((item) => (
                <div className="fGalleryInnerItem" key={item.id}>
                    <div className="fGalleryImage">
                        <img src={item.img} alt="hotel-image"/>
                    </div >
                    <div className="fGalleryText">
                        <div className="fGalleryText-inner">
                        <p>{item.Location}</p>
                        <p>{item.date}</p>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                    </div>
            ))}
        </div>
        </>
    )
}
export default FeatureNews