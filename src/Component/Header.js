import BackgroundHeader from "./BackgroundHeader";
import LocationDetails from "./LocationDetails";
function Header(){
    return(
        <>
        <div className="header">
          
      <div className="fInnerImage">
        {/*<img src="https://storage.unitedwebnetwork.com/files/1333/2355e1176de22b30f02a1aaba21dfdfd.png" alt="logo"/>*/}
        <h3 className="h-3">Rentiz</h3>
        <div className="h-2"></div>
      </div>
      <div className="fInnerText">
        <ul className="fInnerItem">
          <li>Home</li>
           <li>Destinations</li>
            <li>Blog</li>
             <li>News</li>
             <li>Contact</li>
        </ul>
      </div>
    </div>
      <BackgroundHeader/>
      <LocationDetails/>
        </>
    )
}
export default Header;