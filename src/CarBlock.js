
const CarBlock = (props) => {
    const name = props.carName, price = props.carPrice, img = props.carImg, idA = props.idCar;
    const offer = props.offer, extraClass = props.extraClass;

    return ( 
        <div className={`carBlock ${extraClass}`} id={idA}>
            <img src={ img } alt="" draggable="false" />
            <h1>{ name }</h1>
            <h2>{ price }$/day</h2>

            <h2 id="offer"> { offer }</h2>

            <div className='buttonDiv'>
                <button className='buttonCards'>BOOK NOW</button>
            </div>
            <div className='buttonDiv'>
                <button className='buttonCardsV'>VIEW &#8599;</button>
            </div>
        </div>
     );
}
 
export default CarBlock;