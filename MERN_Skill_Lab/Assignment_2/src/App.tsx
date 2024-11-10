import NavBar from "./components/NavBar";
import {Routes, Route} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import "./App.css";
import Footer from "./components/Footer";
import NavBarMobile from "./components/mobile/NavBarMobile.tsx";
import FooterMobile from "./components/mobile/FooterMobile.tsx";
import HomeMobile from "./pages/mobile/HomeMobile.tsx";

function App() {
    const isMobile = useMediaQuery({maxWidth: 425});

    return (
        <>
            {isMobile ? <NavBarMobile/> : <NavBar/>}
            <Routes>
                <Route path="/" element={isMobile ? <HomeMobile/> : <Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/menu" element={<Menu/>}/>
            </Routes>
            {isMobile ? <FooterMobile/> : <Footer/>}
        </>
    );
}

export default App;
