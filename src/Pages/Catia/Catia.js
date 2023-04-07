import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import {Container} from "./Components/Container";
import Form from "../../Shared/Form";

export function Catia(){
    return(
        <div className="catia">
            <Navbar/>
            <Container/>
            <Form/>
            <Footer/>
        </div>
    )
}