import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Company from "./Pages/Company/Company";
import VRPro from "./Pages/VRPro/VRPro";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import VRLudique from "./Pages/VRLudique/VRLudique";

function App() {
    return (
        <div className="App bg-[#FFFFFF]">
            <Routes>
                <Route path={"*"} element={<NotFound/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/company"} element={<Company/>}/>
                <Route path={"/vr-professionnel"} element={<VRPro/>}/>
                <Route path={"/vr-ludique"} element={<VRLudique/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
