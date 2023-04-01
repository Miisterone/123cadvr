import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Image from "./Components/Image";
import Text from "./Components/Text";
import Projet2 from "./Components/Projet2";
import Solutions from "./Components/Solutions";
import {ScrollUp} from "../../Shared/ScrollUp";


const VRPro = () => {
    return (
        <div className="vrpro">
            <ScrollUp/>
            <Navbar/>
            <Image/>
            <Text/>
            <Solutions/>
            <Projet2/>
            <Footer/>
        </div>
    );
}

export default VRPro;