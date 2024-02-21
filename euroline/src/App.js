import Navbar from './navbar';
import Home from './Home';
import OurFleet from './OurFleet';
import WhyUs from './WhyUs';
import Footer from './footer';
import React, { useRef } from 'react';

function App() {

  const fleetRef = useRef(null);

  const scrollToOptions = () => {
    if (fleetRef.current) {
        fleetRef.current.scrollIntoView({ behavior: 'smooth'});
    } 
  };


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
