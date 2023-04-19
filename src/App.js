import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Company from "./Pages/Company/Company";
import VRPro from "./Pages/VRPro/VRPro";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import VRLudique from "./Pages/VRLudique/VRLudique";
import {Catia} from "./Pages/Catia/Catia";
import {Video} from "./Pages/VirtualTour/Video360";

function App() {
    return (
        <div className="App bg-[#FFFFFF]">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/company"} element={<Company/>}/>
                <Route path={"/vr-professionnel"} element={<VRPro/>}/>
                <Route path={"/vr-ludique"} element={<VRLudique/>}/>
                <Route path={"/catia"} element={<Catia/>}/>
                <Route path={"/video360"} element={<Video/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
