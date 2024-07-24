import React from "react"
import Button from "./Button";
import Heading from "./Heading";




const FeaturePoint = ({children, quesitonNr, title}) => {

    let nr = quesitonNr;
    let t = title;
    return(
        <div className="mx-auto max-w-md">
            <div className="flex">
                <div className="max-md:size-12 max-md:p-3 md:p-10 md:size-20 bg-gradient-to-b from-blue-400 to-blue-900 rounded-full flex items-center justify-center text-white font-black">
                    <Heading size="h1" classes="md:translate-y-2">{nr}</Heading>
                </div>
                <div>
                    <Heading size="largeXL" color="black" classes="font-bold italic md:leading-[48px]">{title}</Heading>
                    <div className="font-semibold text-gray-900">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )

}
export default FeaturePoint