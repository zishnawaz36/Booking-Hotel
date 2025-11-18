import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Card from "./Component/Card";
import WhyChooseUs from "./Component/whyChooseUs";
import Footer from "./Component/Footer";
import ViewMore from "./Component/ViewMore";
import IndianHotel from "./Component/IndianHotel";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import ExploreMaldavies from "./Component/ExploreMaldavies";
function App() {
  return(
    <BrowserRouter>
    <Header/>
     <Routes>
    <Route path="/" element={<Home/>} />
            <Route path="/why-choose-us" element={<WhyChooseUs/>}/>
            <Route path="/top-rated-hotels" element={<Card/>}/>
            <Route path="/view-more" element={<ViewMore/>}/>
           <Route path="/indian-hotels" element={<IndianHotel/>}/>
           <Route path="/explore-maldivies" element={<ExploreMaldavies/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
   
    
    
  )
}
export default App;