import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import {ScrollUp} from "../../Shared/ScrollUp";
import {FirstContent} from "./Components/FirstContent";
import {Experiences} from "./Components/Experiences";
import {Event} from "./Components/Event";
import {Clients} from "./Components/Clients";
import Projet from "../../Shared/Project";

const VRLudique = () => {
    return (
        <div className="vrludique">
            <ScrollUp/>
            <Navbar/>
            <FirstContent/>
            <Experiences/>
            <Event/>
            <Clients/>
            <Projet title={"Envie d’une expérience personnelle ?"} description={"Contactez-nous où décrivez-nous votre souhait."}/>
            <Footer/>
        </div>
    );
}

export default VRLudique;