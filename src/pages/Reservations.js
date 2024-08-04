import React from "react"
import CarCard from "../components/CarCard"
import Golf from "../assets/car-img-1.png";

const Reservations = () => {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 max-md:-space-y-8 mx-auto max-w-7xl py-20 md:gap-6">
            <CarCard img="/assets/passat.webp" brand="volkswagen" name="passat" price="80" year="2019"/>
            <CarCard img={Golf} brand="volkswagen" name="golf" price="75" year="2021"/>
            <CarCard img="/assets/car-img-audi.png" brand="audi" name="a3" price="60" year="2018"/>
            <CarCard img={Golf} brand="volkswagen" name="golf" price="75" year="2021"/>
            <CarCard img="/assets/passat.webp" brand="volkswagen" name="passat" price="80" year="2019"/>
            <CarCard img="/assets/car-img-audi.png" brand="audi" name="a3" price="60" year="2018"/>
            <CarCard img="/assets/passat.webp" brand="volkswagen" name="passat" price="80" year="2019"/>

        </div>
    )
}

export default Reservations