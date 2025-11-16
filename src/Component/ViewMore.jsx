import { Link } from "react-router-dom";

function ViewMore() {
    return(
        <>
        <div className="view-more">
            <div className="view-button"><Link to="/indian-hotels">Indian Hotels</Link></div>
             <div className="view-button"><Link to="/indian-hotels">England Hotels</Link></div>
              <div className="view-button"><Link to="/indian-hotels">Indian Hotels</Link></div>
               <div className="view-button"><Link to="/indian-hotels">Indian Hotels</Link></div>
                <div className="view-button"><Link to="/indian-hotels">Indian Hotels</Link></div>
                 <div className="view-button"><Link to="/indian-hotels">Indian Hotels</Link></div>
        </div>
        </>
    )
}
export default ViewMore;