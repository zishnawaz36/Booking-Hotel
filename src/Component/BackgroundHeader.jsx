import BakcgroundImage from "../assests/headerimg.jpg";
function BackgroundHeader(){
    return(
        <>
        <img className="Header-background-image" src={BakcgroundImage} alt="background image"/>
        </>
    )
}
export default BackgroundHeader;