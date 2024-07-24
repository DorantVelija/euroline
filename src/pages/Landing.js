import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
/*import Car1 from '../../public/assets/car-img-landing.png';*/

const Landing = () => {
    function handleClick(){
        let element = document.getElementById('ourFleet')
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return(
        <div className="max-md:h-svh bg-gradient-to-b from-gray-900 to-gray-400">
            <div className="mx-auto md:max-w-7xl max-md:py-24">
                    <Heading color="white" weight="black" size="landing" classes="text-center italic max-md:leading-[72px]">NEED A <span  className="text-blue-500">CAR?</span></Heading>
                    <img src="/assets/car-img-landing.png" alt="" className="md:-translate-y-52 md:max-w-full" draggable="false"/>
                <div className="flex justify-center md:-translate-y-80">
                    <Button size="large" color="secondary" onClick={handleClick}>SEE OPTIONS</Button>
                </div>
            </div>
        </div>
    )
}

export default Landing