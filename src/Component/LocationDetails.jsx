import SearchDetails from "./SearchDetail";
import {CiLocationOn , CiCalendarDate,CiUser} from "react-icons/ci";
function LocationDetails() {

    return(
        <>
        <div className="fGalleryItem-main">
            <div className="fGalleryItem-1">
            <h3>Good Morning !</h3>
            <p>Explore beautiful places in the world with Acenda</p>

        <div className="search-box">
            <SearchDetails
            icon={<CiLocationOn />}
            title="Location"
            subtitle="Add destination"/>

            <SearchDetails
            icon={<CiCalendarDate/>}
            title="Check In"
            subtitle="Add dates"/>

            <SearchDetails
            icon={<CiCalendarDate/>}
            title="check out"
            subtitle="Add dates"/>

            <SearchDetails
            icon={<CiUser/>}
            title="Guests"
            subtitle="Add guests"/>
        </div>
            </div>
        </div>
        </>
    )
}
export default LocationDetails;