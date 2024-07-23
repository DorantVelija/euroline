import React from 'react'
import Button from './Button'
import Heading from './Heading'

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CarCard = ({img,name,brand,price, year, position}) => {



    const baseStyles = "flex flex-col bg-gray-100 items-center " +
        " rounded-xl pb-8  " +
        "transition duration-200 my-3 md:mx-2 " +
        "shadow-xl border-2 hover:border-blue-400"
    const positionStyle = {
        left: 'opacity-50 hover:opacity-100 xl:translate-x-8 md:hover:translate-x-2 xl:scale-95',
        right: 'opacity-50 hover:opacity-100 xl:-translate-x-8 md:hover:-translate-x-2 xl:scale-95',
        center: 'opacity-50 hover:opacity-100 xl:opacity-100 z-10'
    }

    return(
        <div
            className={`${baseStyles} ${positionStyle[position]}`}>

                <img src={img} className="md:h-[325px] md:w-[400px] px-2 py-10" alt={name}/>

            <Heading size="largeXL" color="black" weight="black" classes="py-2 capitalize">{name}</Heading>
            <Heading size="medium" color="blue" weight="semibold">{price}$/DAY</Heading>
            <Heading size="medium" color="blue">{year}</Heading>

            <div className="flex flex-col items-stretch justify-between space-y-1 text-center mt-8">
                 <Link><Button size="large" color="secondary">Book Now</Button></Link>
                <Link to={`/car-page/${brand}/${name}/${price}/${year}/`}><Button size="large" color="primary">View Car↗</Button></Link>
            </div>

        </div>
    )
}

export default CarCard