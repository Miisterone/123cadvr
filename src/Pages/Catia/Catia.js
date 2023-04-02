import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import {Profil} from "./Components/Profil";

export function Catia(){
    return(
        <div className="catia">
            <Navbar/>
            <Profil/>
            <Footer/>
        </div>
    )
}