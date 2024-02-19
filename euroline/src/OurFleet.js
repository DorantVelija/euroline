import CarBlock from './CarBlock';
import carRed from './carRed.png';
import passat from './passat.png';
import audi from './audi.png';

const OurFleet = () => {
    return (  
        <div className="fleet">
            <h1>OUR FLEET</h1>
            <div className="carBlocks">
                <CarBlock carName="VW GOLF 7" carPrice="75" carImg={carRed}/>
                <CarBlock carName="VW PASSAT" carPrice="80" carImg={carRed}/>
                <CarBlock carName="AUDI A3" carPrice="60" carImg={audi}/>
            </div>
        </div>
    );
}
 
export default OurFleet;