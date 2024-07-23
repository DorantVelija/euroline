import React from 'react'


const CTAScroll = () => {
    return (
        <div
            className="w-screen py-32 transition-transform duration-500 transform hover:scale-95"
            style={{backgroundImage: `url(${require('../assets/logos-scroll.png')})`}}

        ></div>
    )
}

export default CTAScroll