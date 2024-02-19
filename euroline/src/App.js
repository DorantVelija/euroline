import Navbar from './navbar';
import Home from './Home';
import OurFleet from './OurFleet';
import WhyUs from './WhyUs';
import Footer from './footer';

function App() {

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Home />
        <OurFleet />
        <WhyUs />
      </div>
      <Footer />
    </div>
  );

}

export default App;
