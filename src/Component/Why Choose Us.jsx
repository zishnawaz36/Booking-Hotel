import Money from "../assests/save-money.png";
import Protection from "../assests/personal-data.png";
import Management from "../assests/talent-management.png";
function WhyChooseUs() {
   const data = [
    {
        id:1,
        img:Money,
        title:"Competitive Prices",
        subtitle:"We offer high-quality services at fair, affordable prices to ensure you always get the best value."

    },
    {
        id:2,
        img:Protection,
        title:"Secure Booking",
        subtitle:"Your bookings are protected with safe, reliable, and encrypted processes for a worry-free experience."
    },
    {
        id:3,
        img:Management,
        title:"Seamless Experience",
        subtitle:"Enjoy smooth, fast, and hassle-free services from start to finish."
    },
   ]
    return(
        <>
        <div className="why">
            <div className="main">
                <h3>Why Choose Us?</h3>
            </div>
            <div className="fGalleryItem">
               {data.map((item) => (
                <div className="why-choose-main">
                    <div className="inner-gallery" key={item.id}>
                    <img src={item.img} alt="img-1"/>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    </div>
                    </div>
               ))}
            </div>
        </div>
        </>
    )
}
export default WhyChooseUs;