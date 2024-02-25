import React, { useState } from 'react';
import CarBlock from './CarBlock';
import carRed from './carRed.png';
import passat from './passat.png';
import audi from './audi.png';

const OurFleet = ({ innerRef }) => {
    const [hoveredCar, setHoveredCar] = useState('mainCar');

    const handleCarHover = (carId) => {
        setHoveredCar(carId);
    };

    return (  
        <div className="fleet" ref={innerRef}>
            <h1 id="titleFleet">OUR FLEET</h1>
              <div className="carBlocks">
                <CarBlock
                    carName="VW PASSAT"
                    carPrice="80"
                    carImg={passat}
                    idCar="car1"
                    onMouseEnter={() => handleCarHover('car1')}
                    onMouseLeave={() => handleCarHover('mainCar')}
                    className={hoveredCar === 'car1' ? 'hovered' : ''}
                    extraClass={hoveredCar === 'car1' ? 'hovered' : ''}
                />
                <CarBlock
                    carName="VW GOLF 7"
                    carPrice="75"
                    carImg={carRed}
                    idCar="mainCar"
                    offer="Best Offer"
                    onMouseEnter={() => handleCarHover('mainCar')}
                    onMouseLeave={() => handleCarHover('mainCar')}
                    className={hoveredCar === 'mainCar' ? 'hovered' : ''}
                    extraClass={hoveredCar === 'mainCar' ? 'hovered' : ''}
                />
                <CarBlock
                    carName="AUDI A3"
                    carPrice="60"
                    carImg={audi}
                    idCar="car2"
                    onMouseEnter={() => handleCarHover('car2')}
                    onMouseLeave={() => handleCarHover('mainCar')}
                    className={hoveredCar === 'car2' ? 'hovered' : ''}
                    extraClass={hoveredCar === 'car2' ? 'hovered' : ''}
                />
            </div>
        </div>
    );
};


export default OurFleet;
