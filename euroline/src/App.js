import Navbar from './navbar';
import Home from './Home';
import OurFleet from './OurFleet';
import WhyUs from './WhyUs';
import Footer from './footer';
import React, { useRef, useEffect } from 'react';

function App() {

  const fleetRef = useRef(null);

  const scrollToOptions = () => {
    if (fleetRef.current) {
        fleetRef.current.scrollIntoView({ behavior: 'smooth'});
    } 
  };

  const handleMouseEnter = (id) => {
    const carElement = document.getElementById(id);
    if (carElement !== document.getElementById('mainCar')) {
      carElement.classList.add('hovered');
      document.getElementById('mainCar').classList.remove('hovered');
    }
  };

  const handleMouseLeave = () => {
    document.getElementById('car1').classList.remove('hovered');
    document.getElementById('car2').classList.remove('hovered');
    document.getElementById('mainCar').classList.add('hovered');
  };
 
  /*
  document.getElementById('car1').addEventListener('mouseover', handleMouseEnter('car1'));
  document.getElementById('car1').addEventListener('mouseleave', handleMouseEnter('car1'));
  document.getElementById('car2').addEventListener('mouseover', handleMouseEnter('car2'));
  document.getElementById('car2').addEventListener('mouseleave', handleMouseEnter('car2'));
*/
 

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Home scrollToOptions={scrollToOptions}/>
        <OurFleet innerRef={fleetRef}/>
        <WhyUs />
      </div>
      <Footer />
    </div>
  );

}

export default App;
