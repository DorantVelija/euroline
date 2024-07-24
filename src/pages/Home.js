import React from 'react';
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import OurFleet from "./OurFleet";
import WhyUs from "./WhyUs";
import Footer from "../components/Footer";
import CTAScroll from "../components/CTAScroll";


const Home = () => {
    return (
        <>
            <Landing />
            <OurFleet />
            <WhyUs />
            <CTAScroll />
        </>
    )
}
export default Home
