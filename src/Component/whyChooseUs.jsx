import Money from "../assests/save-money.png";
import Protection from "../assests/cyber-security.png";
import Management from "../assests/rating (1).png";
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
return (
    <>
    <h1 className="why-choose-us-h-1">Why Choose Us</h1>
    <div className="why-choose-us">
        {data.map((item) => (
            <div className="fGalleryItem" key={item.id}>
                <div className="fGalleryImage">
                    <img src={item.img} alt="why choose"/>
                </div>
                <div className="fGalleryText">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    </div>
                </div>
        ))}
    </div>
    </>
)
}
export default WhyChooseUs;