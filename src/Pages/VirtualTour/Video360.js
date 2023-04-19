import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import {Video360} from "./Components/360";
import {ScrollUp} from "../../Shared/ScrollUp";
import Form from "../../Shared/Form";

export const Video = () => {
    return (
        <div>
            <title>Vidéos 360° et visites virtuelles</title>
            <ScrollUp/>
            <Navbar/>
            <Video360/>
            <Form/>
            <Footer/>
        </div>
    );
}