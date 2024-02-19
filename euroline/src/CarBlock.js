
const CarBlock = (props) => {
    const name = props.carName, price = props.carPrice, img = props.carImg;

    return ( 
        <div className='carBlock'>
            <img src={ img } alt="" />
            <h1>{ name }</h1>
            <h2>{ price }$/day</h2>
            <div className='buttonDiv'>
            <button className='buttonCards'>BOOK NOW</button>
            </div>
            <div className='buttonDiv'>
                <button className='buttonCards'>VIEW</button>
            </div>
        </div>
     );
}
 
export default CarBlock;