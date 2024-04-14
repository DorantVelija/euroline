import React, { useRef, useState  }  from 'react';
import CarBlock from './CarBlock';
import carRed from './carRed.png';
import passat from './passat.png';
import audi from './audi.png';

const OurFleet = ({ innerRef }) => {



    return (  
        <div className="fleet" ref={innerRef}>
            <h1 id="titleFleet">OUR FLEET</h1>
              <div className="carBlocks">
                <CarBlock
                    carName="VW PASSAT"
                    carPrice="80"
                    carImg={passat}
                    idCar="car1" 
                    
                />
                <CarBlock
                    carName="VW GOLF 7"
                    carPrice="75"
                    carImg={carRed}
                    idCar="mainCar"
                    offer="Best Offer"
                    extraClass='hovered'  
                />
                <CarBlock
                    carName="AUDI A3"
                    carPrice="60"
                    carImg={audi}
                    idCar="car2"
                   
                />
            </div>
        </div>
    );
};


export default OurFleet;
