import Navbar from './navbar';
import Home from './Home';
import OurFleet from './OurFleet';

function App() {

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Home />
      <OurFleet />
      </div>
    </div>
  );

}

export default App;
