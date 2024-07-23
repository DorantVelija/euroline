import React, {useEffect, useState} from 'react'
import Button from '../components/Button'

import Car1 from '../assets/car-img-1.png';
import Car2 from "../assets/car-img-2.avif";
import Car3 from "../assets/car-img-3.webp";
import Car4 from "../assets/car-img-4.png";


import {useParams} from "react-router-dom";


const CarPage = () => {
    const {img, price, brand,name, id } = useParams()


    return (

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 pt-32 pb-72 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                          src="https://picsum.photos/400/" draggable="false"/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{brand}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{name}</h1>
                        <div className="flex mb-4">

                        </div>
                        <p className="leading-relaxed">Year : {id} <br/>
                            Gearbox: Automatic<br/>
                            Engine: 104HP <br/>
                            Fuel : 3.2L - 7.1L/100km.
                            </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex flex-col">
                                <div>
                                    <span className="title-font font-medium text-xl text-gray-900">From  </span>
                                    <input type="datetime-local"/>
                                </div>

                                <div>
                                    <span className="title-font font-medium text-xl text-gray-900">To  </span>
                                    <input type="datetime-local"/>
                                </div>

                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">$ {price}.00 / Day</span>
                            <Button color="secondary" classes="flex ml-auto">Check Availability</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarPage