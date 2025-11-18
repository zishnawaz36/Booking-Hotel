import { Link } from "react-router-dom";
import hotel1 from "../assests/ExploreMaldivies/Img-1.png";
import hotel2 from "../assests/ExploreMaldivies/img-2.png";
import hotel3 from "../assests/ExploreMaldivies/img-3.png";

function ExploreMaldavies() {
    const MaldiviesData = [
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
        <div className="Explore-Maldavies">
             <div className="fGalleryInner-1">
                <h1>Explore Maldives</h1>
            <p>The Maldives is a tropical paradise in the Indian Ocean, famous for its crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs. Known for luxury resorts, overwater villas, and abundant marine life, it’s a top destination for honeymooners, divers, and anyone seeking relaxation. With warm weather year-round, stunning sunsets, and serene islands, the Maldives offers a perfect escape from the everyday hustle.</p>
            <p><Link className="fButton" to="https://www.klook.com/en-IN/destination/c527-male/">see all</Link></p>
             </div>
             <div className="fGalleryInner-main">

            {MaldiviesData.map((item) => (
                <div className="fGalleryInner-2" key={item.id}>
                    <div className="fGalleryItem">
                        <div className="fGalleryImg">
                            <img src={item.img} alt="Maldivies" />        
                        </div>
                        <h3 >{item.title}</h3>
                    </div>
               </div>
            ))}
            </div>
        </div>
        </>
    )
}
export default ExploreMaldavies;