import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
function IndianHotel() {
 const cardDataIndia = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1548013146-72479768bada",
    title: "Taj Heritage Palace",
    money: "$7,000",
    icon: <CiLocationOn />,
    Address: "Agra, India",
    Rating: "⭐4.9",
    booking: "https://booking.com/taj-heritage"
  },
  {
    id: 2,
    img: "https://pix8.agoda.net/hotelImages/73857910/0/1a6e439cf2e86d39aad9a3e9e369a870.jpg?ce=2&s=1024x",
    title: "Mumbai SeaLink View Hotel",
    money: "$6,500",
    icon: <CiLocationOn />,
    Address: "Mumbai, India",
    Rating: "⭐4.8",
    booking: "https://booking.com/mumbai-sealink"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1544986581-efac024faf62",
    title: "Jaipur Royal Haveli",
    money: "$6,200",
    icon: <CiLocationOn />,
    Address: "Jaipur, India",
    Rating: "⭐4.8",
    booking: "https://booking.com/jaipur-royal"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Kerala Backwater Resort",
    money: "$5,800",
    icon: <CiLocationOn />,
    Address: "Alleppey, India",
    Rating: "⭐4.7",
    booking: "httpsbooking.com/kerala-backwater"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Goa Beach Paradise",
    money: "$6,900",
    icon: <CiLocationOn />,
    Address: "Goa, India",
    Rating: "⭐4.8",
    booking: "https://booking.com/goa-paradise"
  },
  {
    id: 6,
    img: "https://r1imghtlak.mmtcdn.com/08a38618255e11ea814a02b35a64fa92.jpg?output-quality=75&output-format=jpg&downsize=360:*",
    title: "Shimla Hilltop Lodge",
    money: "$5,200",
    icon: <CiLocationOn />,
    Address: "Shimla, India",
    Rating: "⭐4.6",
    booking: "https://booking.com/shimla-hill"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    title: "Delhi Heritage Residency",
    money: "$6,000",
    icon: <CiLocationOn />,
    Address: "New Delhi, India",
    Rating: "⭐4.7",
    booking: "https://booking.com/delhi-residency"
  },
  {
    id: 8,
    img: "https://pix8.agoda.net/hotelImages/624900/-1/f9feb533b962b5c5497df775e250779d.jpg?ca=18&ce=1&s=1024x768",
    title: "Rishikesh Ganga Retreat",
    money: "$4,900",
    icon: <CiLocationOn />,
    Address: "Rishikesh, India",
    Rating: "⭐4.8",
    booking: "https://booking.com/rishikesh-retreat"
  },
  {
    id: 9,
    img: "https://pix8.agoda.net/hotelImages/47358896/-1/f58b7bf054a4aadec34fdc26beb64d23.jpg?ce=0&s=1024x",
    title: "Pondicherry Blue Resort",
    money: "$5,700",
    icon: <CiLocationOn />,
    Address: "Puducherry, India",
    Rating: "⭐4.8",
    booking: "https://booking.com/pondicherry-blue"
  },
  {
    id: 10,
    img: "https://pix8.agoda.net/hotelImages/5835205/-1/d66cc3a8a73c0728a0ec74de73123dac.jpg?ce=0&s=1024x768",
    title: "Manali Snow View Resort",
    money: "$5,600",
    icon: <CiLocationOn />,
    Address: "Manali, India",
    Rating: "⭐4.7",
    booking: "https://booking.com/manali-snow"
  }
];


  return (
    <>
    <h1 className="accomodation-h1">Indian Hotels</h1>
      <div className="f-accomodation">
        {cardDataIndia.map((item) => (
          <div className="ItemfinnerGallery" key={item.id}>
            <div className="fGalleryImage">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="fButton">{item.Rating}</div>

            <p className="booking">
              <a href={item.booking} className="fButton" target="_blank">
                Booking
              </a>
            </p>

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
      <div className="f-accomodation-button"><Link className="fButton" to="/top-rated-hotels">Back</Link></div>
    </>
  );
}

export default IndianHotel;
