import hero1 from "../assests/Testinomial/Img 1.png";
import hero2 from "../assests/Testinomial/Img 1.png";
import hero3 from "../assests/Testinomial/Img 1.png";
function Testinomial() {
     const testinomial = [
    {
      id: 1,
      img: hero1,
      title: "Zeeshan",
      role: "Full Stack Developer",
      rating: "⭐⭐⭐⭐⭐",
      subtitle:
        "Amazing hotel! Rooms were clean, staff was friendly and the view was perfect. Highly recommended!"
    },
    {
      id: 2,
      img: hero2,
      title: "David",
      role: "UI/UX Designer",
      rating: "⭐⭐⭐⭐",
      subtitle:
        "Loved the ambience! Service was quick and the food was delicious. Will visit again."
    },
    {
      id: 3,
      img: hero3,
      title: "Albert",
      role: "Software Engineer",
      rating: "⭐⭐⭐⭐⭐",
      subtitle:
        "Best experience ever! Really enjoyed my stay. Totally worth the money."
    }
  ];
    return(
        <>
        <h1 className="testinomail-h1">Testinomial</h1>
        <div className="testinomail-main">
        <div className="container">
          <div className="testinomial">
            {testinomial.map((item) => (
            <div className="fGalleryItem" key={item.id}>
              <div className="fGalleryImage">
                <img src={item.img} alt="testinomial-image"/>
              </div>
              <div className="fGalleryText">
                <div className="fGalleryText-Inner">
                  <div className="title">
                    <h3>{item.title}</h3>
                     <p>{item.role}</p>
                    </div>
                    <div className="rating">
                      <p>{item.rating}</p>
                      </div>
                  </div>
                  <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        </div>
        </>
    )
}
export default Testinomial;