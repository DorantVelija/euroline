import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CarPage  from "./pages/CarPage";


import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";

import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/test" element={<Test text="bruh"/>} />
                <Route exact path="/contact" element={<Contact />} />>
                <Route exact path="/reservations" element={<Reservations />} />
                <Route exact path="/car-page" element={<CarPage />} />
                <Route path="/car-page/:brand/:name/:price/:id/" element={<CarPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}