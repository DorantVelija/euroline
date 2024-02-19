import mainCar from './carMain.png';
const handleClick = () => {
    
}
const Home = () => {
    return (   
        <div className="home">
        <h1>NEED A <span>CAR?</span></h1>
            <div className="contentHome">
                <img src={mainCar} alt="" id='carMain' /> 
            </div>
            <div className="button">
                <button id="seeOptions" onclick={handleClick}>SEE OPTIONS</button>
            </div>

           
        </div>
     );
}
 
export default Home;