import { Link } from "react-router-dom";
import hotel1 from "../assests/ExploreMaldivies/Img-1.png";
import hotel2 from "../assests/ExploreMaldivies/img-2.png";
import hotel3 from "../assests/ExploreMaldivies/img-3.png";

function ExploreMal() {
    const maldiviesData = [
        {
            id:1,
            img:hotel1,
            "title":"Azure Haven"
        },
        {
            id:2,
            img:hotel2,
            "title":"Serene Sanctuarv"
        },
        {
            id:3,
            img:hotel3,
            "title":"Verdant Vista"
        }
    ]
    return(
        <>

        <div className="explore-new-maldivies">
               <h1 className="explore-h1">Explore Maldivies</h1>
            <div className="fGalleryItem">
                <p>Discover the breathtaking beauty of the Maldives, where crystal-clear turquoise waters, white sandy beaches, and vibrant marine life create a paradise like no other. Whether you’re relaxing in an overwater villa, exploring colorful coral reefs, or enjoying peaceful sunsets by the ocean, the Maldives offers the perfect escape for adventure and relaxation. Dive in and experience the magic of tropical island living.</p>
            </div>
            <div className="fGalleryImage">
            {maldiviesData.map((item) => (
                <div className="fGalleryInner" key={item.id}>
                    <img src={item.img} alt="img"/>
                    <h3>{item.title}</h3>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}
export default ExploreMal;