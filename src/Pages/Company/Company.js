import "./Company.css";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Goal from "./Components/Goal";
import Team from "./Components/Team";
import Map from "./Components/Map";

const Company = () => {
    return (
        <div className="company">
            <Navbar/>
            <Goal/>
            <Team/>
            <Map/>
            <Footer/>
        </div>
    );
}

export default Company;