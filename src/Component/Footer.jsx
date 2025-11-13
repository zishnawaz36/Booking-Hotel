
function Footer(){
    return(
        <>
        <div className="footer-main">
        <div className="footer">
            <div className="f-1">
                <h3>Support</h3>
                <ul className="l-1">
                    <li>Help Center</li>
                    <li>Safety Information</li>
                    <li>Cancellations options</li>
                </ul>
            </div>
            <div className="f-2">
                <h3>Company</h3>
                <ul className="l-2">
                    <li>About us</li>
                    <li>Privacy policy</li>
                    <li>Community Blog</li>
                    <li>Terms of service</li>
                </ul>
            </div>
            <div className="f-3">
                <h3>Contact</h3>
                <ul className="l-3">
                <li>FAQ</li>
                <li>Get in touch</li>
                <li>Partnerships</li>
                </ul>
            </div>
            <div className="f-4">
                <h3>Social</h3>
                <ul className="l-4">
                    <li><img className="img-1"src="/Social Icon/instagram (2).png" alt="insta logo"/></li>
                    <li><img className="img-1" src="/Social Icon/tik-tok (1).png" alt="tik tok"/></li>
                    <li><img className="img-1" src="/Social Icon/twitter (2).png" alt="twitter"/></li>
                    <li><img className="img-1" src="Social Icon/youtube (1).png" alt="youtube"/></li>
                </ul>
            </div>
        </div>
        {/* copyright footer */}
            <div className="copy-right">
                <p>@copyright Agenda 2025</p>
            </div>
            <div className="payment">
               <ul className="l-4">
                    <li><img className="img-1"src="/Social Icon/card (1).png" alt="card"/></li>
                    <li><img className="img-1" src="/Social Icon/google-pay (1).png" alt="google pay"/></li>
                    <li><img className="img-1" src="/Social Icon/visa.png" alt="visa"/></li>
                    
                </ul>
            </div>
            </div>
        </>
    )
}
export default Footer;