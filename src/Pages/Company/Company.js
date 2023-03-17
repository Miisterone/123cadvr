import "./Company.css";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Goal from "./Components/Goal";
import Team from "./Components/Team";

const Company = () => {
    return (
        <div className="company">
            <Navbar/>
            <Goal/>
            <Team/>
            <Footer/>
        </div>
    );
}

export default Company;