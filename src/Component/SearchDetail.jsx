function SearchDetails({icon,title,subtitle}){
    return(
        <>
        <div className="searchdetails">
            <div className="icon-details">{icon}</div>
            <div className="text">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
        </>
    )
}
export default SearchDetails;