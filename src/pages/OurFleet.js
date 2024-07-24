import React from 'react'
import Heading from "../components/Heading";
import CarCard from "../components/CarCard";

import Golf from '../assets/car-img-1.png';
import Car2 from "../assets/car-img-2.avif";
import Car3 from "../assets/car-img-3.webp";
import Car4 from "../assets/car-img-4.png";

// import Audi from '../assets/car-img-audi.png';
// import Passat from '../assets/car-img-passat.png';

const OurFleet = () => {
    return (
        <div id="ourFleet" className="py-12 md:py-32">
            <Heading color="black" weight="black" size="largeXXL" classes="mb-8 text-center">OUR FLEET</Heading>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 max-md:mx-4 max-md:-space-y-8">
                    <CarCard img="/assets/passat.webp" brand="volkswagen" name="passat" price="80" year="2019" position="left"/>
                    <CarCard img={Golf} brand="volkswagen" name="golf" price="75" year="2021" position="center"/>
                    <CarCard img="/assets/car-img-audi.png" brand="audi" name="a3" price="60" year="2018" position="right"/>
                </div>
            </div>
        </div>
    )
}

export default OurFleet