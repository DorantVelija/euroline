import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({size, color, children, onClick, classes, link}) => {
    const baseStyles = "rounded-md py-3 px-6 text-white"
    const sizeStyles = {
        small: 'text-md',
        medium: 'text-lg',
        large: 'text-xl',
    }
    const colorStyles = {
        primary: "bg-gray-900 hover:bg-gray-800",
        secondary: "bg-blue-500 hover:bg-blue-400",
    }


    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${classes}`}
        >
         {children}
        </button>
    )
}


export default Button