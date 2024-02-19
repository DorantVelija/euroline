import Navbar from './navbar';
import Home from './Home';
import OurFleet from './OurFleet';
import WhyUs from './WhyUs';

function App() {

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Home />
        <OurFleet />
        <WhyUs />
      </div>
    </div>
  );

}

export default App;
