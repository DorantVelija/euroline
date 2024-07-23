import React, { useEffect } from 'react'
import logo from '../assets/logo-euroline.png';
import { Link } from 'react-router-dom'

const Navbar = () => {

    function handleClick(){

        let nav = document.getElementById('mobileNav')

        if (nav.classList.contains('flex')) {
            nav.classList.remove('flex')
            nav.classList.add('hidden')
        }else{
            nav.classList.remove('hidden')
            nav.classList.add('flex')
        }
    }
    useEffect(() => {
        let nav = document.getElementById('mobileNav');
            nav.classList.add('hidden');
    }, []);

    return(
        <nav className="bg-gray-900 py-3">
            <ul className="justify-around space-x-0 xl:space-x-5 items-center max-w-3xl mx-auto text-white cursor-pointer hidden md:flex">
                <li className="hover:text-gray-800"><Link to="/">Home</Link></li>
                <li className="hover:text-gray-800"><Link to="/findus">Find Us</Link></li>
                <img src={logo} className="max-w-xs"/>
                <li className="hover:text-gray-800"><Link to="/reservations">Reservation</Link></li>
                <li className="hover:text-gray-800"><Link to="/contact">Contact</Link></li>
            </ul>

            <ul className="justify-between items-center max-w-3xl mx-auto text-white cursor-pointer flex md:hidden">
                <div onClick={ handleClick } className="p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M3 6h18v2H3V6zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                    </svg>
                </div>

                <div id="mobileNav" className="flex-col absolute bg-gray-900 w-screen py-10 z-10">
                    <ul className="text-white z-20 mt-20 px-10">
                        <li onClick={() => handleClick()} className="hover:text-gray-800 text-2xl">∆</li>
                        <li className="hover:text-gray-800"><Link to="/">Home</Link></li>
                        <li className="hover:text-gray-800"><Link to="/findus">Find Us</Link></li>
                        <li className="hover:text-gray-800"><Link to="/reservations">Reservation</Link></li>
                        <li className="hover:text-gray-800"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <img src={logo} className="max-w-[100px] mr-3"/>
            </ul>
        </nav>
    )
}

export default Navbar