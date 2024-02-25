import React, { useState } from 'react';
import CarBlock from './CarBlock';
import carRed from './carRed.png';
import passat from './passat.png';
import audi from './audi.png';

const OurFleet = ({innerRef}) => {
     // State variable to manage the opacity of mainCar
     const [mainCarOpacity, setMainCarOpacity] = useState(1);
     const [mainCarZIndex, setMainCarZIndex] = useState(3);

     // Event handler for when car2 is hovered over
     const handleCar2Hover = () => {
         setMainCarOpacity(0.3);
         setMainCarZIndex(0);
     };
 
     // Event handler for when the mouse leaves car2
     const handleCar2Leave = () => {
         setMainCarOpacity(1);
         setMainCarZIndex(3);
     };

    return (  
        <div className="fleet" ref={innerRef}>
            <h1 id="titleFleet">OUR FLEET</h1>
            <div className="carBlocks">
                <CarBlock carName="VW PASSAT" carPrice="80" carImg={passat} idCar='car1'/>
                <CarBlock carName="VW GOLF 7" carPrice="75" carImg={carRed}  idCar="mainCar" offer="Best Offer"  
                style={{ opacity: mainCarOpacity, zIndex: mainCarZIndex }}/>
                <CarBlock carName="AUDI A3" carPrice="60" carImg={audi} idCar='car2'
                  onMouseEnter={handleCar2Hover} onMouseLeave={handleCar2Leave}/>
            </div>
        </div>
    );
}
 
export default OurFleet;