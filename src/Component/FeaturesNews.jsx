import Feature1 from "../assests/FeatureNews/img-1.png";
import Feature2 from "../assests/FeatureNews/img-2.png";
import Feature3 from "../assests/FeatureNews/img-3.png";
import { CiLocationOn } from "react-icons/ci";
function FeatureNews() {
    const featureNews = [
        {
            id:1,
            img:Feature1,
            Location:<CiLocationOn/>,
            date:"February 20,2026",
            title:"delicious restuarant at hanalei Bay",
            subtitle:"Delicious Restaurant at Hanalei Bay serves fresh island flavors with stunning ocean views. Enjoy warm hospitality, locally inspired dishes, and a relaxed seaside dining experience you’ll love.",
        },
        {
            id:2,
            img:Feature2,
            Location:<CiLocationOn/>,
            date:"February 20,2026",
            title:"Top 10 most beautiful check-in spots in Ph ...",
            subtitle:"Explore the Top 10 most beautiful check-in spots in the Philippines, from Palawan’s lagoons and Boracay’s white sands to the Chocolate Hills, Mayon Volcano, and the surf paradise of Siargao. Each destination offers stunning views and perfect photo moments.",
        },
        {
            id:3,
            img:Feature3,
            Location:<CiLocationOn/>,
            date:"February 20,2026",
            title:"Top 5 newest services at Navagio Beach",
            subtitle:"Experience the Top 5 newest services at Navagio Beach, including upgraded boat tours, cliffside viewing platforms, and improved beach facilities. With new guided photo spots and convenient shuttle services, visitors can enjoy smoother access and stunning views like never before. Navagio Beach now offers a more comfortable, scenic, and unforgettable adventure.",
        }
    ]
    return(
        <>

        </>
    )
}
export default FeatureNews