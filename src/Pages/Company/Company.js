import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Goal from "./Components/Goal";
import Team from "./Components/Team";
import Map from "./Components/Map";
import Form from "../../Shared/Form";
import {ScrollUp} from "../../Shared/ScrollUp";

const Company = () => {
    return (
        <div className="company">
            <ScrollUp/>
            <Navbar/>
            <Goal/>
            <Team/>
            <Map/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Company;