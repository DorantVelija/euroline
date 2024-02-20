import onePic from './1.png'
import twoPic from './2.png'
import threePic from './3.png'
import fourPic from './4.png'
import fivePic from './5.png'
import sixPic from './6.png'



const WhyUs = () => {
    return ( 
        <div className="whyUs">
            <div className="left">

                <div className="text">
                    <img src={onePic} alt="" />
                    <h1>Convenient and Hassle-Free:</h1>
                </div>
                <p>Our rental car service provides a seamless solution
                    for short-term transportation needs, ensuring a
                    hassle-free experience for customers.</p>

                <div className="text">
                    <img src={twoPic} alt="" />
                    <h1>Diverse Fleet:</h1>
                </div>
                <p id='diverseFleet'>Choose from a diverse fleet of
                    well-maintained vehicles, ranging from compact cars
                    to spacious SUVs, catering to various preferences and
                    requirements.</p>

                <div className="text">
                    <img src={threePic} alt="" />
                    <h1>User-Friendly Online Platform:</h1>
                </div>
                <p>Our intuitive online platform simplifies the
                    booking process, allowing customers to easily
                    select and reserve their preferred vehicle with
                    just a few clicks.</p>

            </div>
            <div className="right">
                <div className="text">
                    <img src={fourPic} alt="" />
                    <h1>Competetive Pricing:</h1>
                </div>
                <p>Benefit from competitive pricing, ensuring that
                    customers receive value for their money when
                    securing reliable and comfortable transportation.</p>

                <div className="text">
                    <img src={fivePic} alt="" />
                    <h1>Flexible Rental Options:</h1>
                </div>
                <p>With flexible rental options, our service
                    accommodates the dynamic needs of customers,
                    whether for business trips, vacations, or
                    daily commuting.</p>

                <div className="text">
                    <img src={sixPic} alt="" />
                    <h1>Transparent Terms:</h1>
                </div>
                <p>Clear and transparent terms provide customers
                    with confidence, making it straightforward
                    to understand and adhere to the conditions of
                    their rental agreement.</p> 
            </div>
        </div>
       
     );
}
 
export default WhyUs;