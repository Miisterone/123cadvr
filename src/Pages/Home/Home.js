import Navbar from "../../Shared/Navbar";
import Histoire from "./Components/Histoire";
import Solution from "./Components/Solution";
import Projet from "../../Shared/Project";
import Footer from "../../Shared/Footer";
import {ScrollUp} from "../../Shared/ScrollUp";

const Home = () => {
    return (
        <div className="Home">
            <title>Home</title>
            <ScrollUp/>
            <Navbar/>
            <Histoire/>
            <Solution/>
            <Projet title={"Un projet ?"} description={"Contactez-nous où décrivez-nous votre souhait."}/>
            <Footer/>
        </div>
    )
}

export default Home