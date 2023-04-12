import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import {Container} from "./Components/Container";
import Form from "../../Shared/Form";
import {ScrollUp} from "../../Shared/ScrollUp";

export function Catia(){
    return(
        <div className="catia">
            <title>Catia</title>
            <ScrollUp/>
            <Navbar/>
            <Container/>
            <Form/>
            <Footer/>
        </div>
    )
}