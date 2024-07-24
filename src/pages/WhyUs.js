import React from "react";
import FeaturePoint from "../components/FeaturePoint";

const WhyUs = () => {
    return(
        <div className="flex max-xl:flex-col justify-center mx-auto container xl:w-4/5 px-4 xl:px-32 py-32 md:px-32">
            <div className="xl:w-1/2 space-y-10 md:space-y-20 max-md:mb-10">
                <FeaturePoint quesitonNr={1} title="Convenient and Hassle-Free:">Our rental car service provides a seamless solution for short-term transportation needs, ensuring a hassle-free experience for customers.</FeaturePoint>
                <FeaturePoint quesitonNr={2} title="Diverse Fleet:">Choose from a diverse fleet of well-maintained vehicles, ranging from compact cars to spacious SUVs, catering to various preferences and requirements.</FeaturePoint>
                <FeaturePoint quesitonNr={3} title="User-Friendly Online Platform:">Our intuitive online platform simplifies the booking process, allowing customers to easily select and reserve their preferred vehicle with just a few clicks.</FeaturePoint>
            </div>
            <div className="xl:w-1/2 space-y-10 md:space-y-24 md:translate-y-24">
                <FeaturePoint quesitonNr={4} title="Competitive Pricing:">Benefit from competitive pricing, ensuring that customers receive value for their money when securing reliable and comfortable transportation.</FeaturePoint>
                <FeaturePoint quesitonNr={5} title="Flexible Rental Options:">With flexible rental options, our service accommodates the dynamic needs of customers, whether for business trips, vacations, or daily commuting.</FeaturePoint>
                <FeaturePoint quesitonNr={6} title="Transparent Terms:">Clear and transparent terms provide customers with confidence, making it straightforward to understand and adhere to the conditions of their rental agreement.</FeaturePoint>
            </div>
        </div>

    )
}

export default WhyUs;