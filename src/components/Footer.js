import React from 'react';
import logo from '../assets/logo-euroline.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-20 px-4 flex flex-col items-stretch justify-center">
            <div className="flex flex-col md:flex-row justify-evenly items-start">
                <div>
                    <img src={logo} alt="" className="max-md:w-64 max-w-xs" draggable="false"/>
                </div>
                <div>
                    <ul className="space-y-2">
                        <li><a>Contact</a></li>
                        <li><a>GitHub</a></li>
                        <li><a>LinkedIn</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="">
                        <li>
                            Contact
                        </li>
                        <li>
                            EuroLine
                        </li>
                        <li>
                            +389-70-633-941
                        </li>
                        <li>
                            +389-70-618-165
                        </li>
                        <li>
                            eurolinerentacar@gmail.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Social Media</h1>

                </div>

            </div>
            <hr className="mt-12 py-6"/>
            <h1 className="text-center"> &#169;EuroLine 2024, All Rights Reserved</h1>
        </footer>


    );
}

export default Footer;