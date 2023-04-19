import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import {Video360} from "./Components/360";
import {ScrollUp} from "../../Shared/ScrollUp";

export const VirtualTour = () => {
    return (
        <div>
            <title>Vidéos 360° et visites virtuelles</title>
            <ScrollUp/>
            <Navbar/>
            <Video360/>
            <Footer/>
        </div>
    );
}