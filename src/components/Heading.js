import React from 'react';

const Heading = ({ size, color, weight, children, classes }) => {
    const baseStyle = " "
    const colorStyles = {
        white: "text-white",
        black: "text-gray-900",
        blue: "text-blue-400",
    };
    const sizeStyles = {
        small: "text-md",
        medium: "text-2xl",
        large: "text-[2rem]",
        largeXL: "text-[1.6rem] md:text-[3rem]",
        largeXXL: "text-[4rem]",
        landing: "text-[90px] md:text-[140px]",
        h1: "text-[52px] md:text-[90px]"
    };
    const weightStyles = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        black: "font-black"
    }

    return (
            <h1 className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]} ${weightStyles[weight]} ${classes} `}>
                {children}
            </h1>
    );
};

export default Heading;