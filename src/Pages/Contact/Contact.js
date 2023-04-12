import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Form from "../../Shared/Form";
import {ScrollUp} from "../../Shared/ScrollUp";

const Contact = () => {
    return (
        <div className="contact">
            <title>Contact</title>
            <ScrollUp/>
            <Navbar/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default Contact;