import React from "react";
import RecHolidayCard from "./RecHolidayCard";
import bali from "../assets/bali.png";
import swiss from "../assets/SwitzerlandImage.png";
import boracay from "../assets/BoracayImage.png";
import palawan from "../assets/PalawanImage.png";


const holidays = [
    { name: "Bali", price: "$899", nights: "4D3N", image:bali },
    { name: "Swiss", price: "$900", nights: "6D5N", image: swiss },
    { name: "Boracay", price: "$699", nights: "5D4N", image:boracay },
    { name: "Palawan", price: "$789", nights: "4D3N", image: palawan },

];

const RecommendedHolidays=()=>{
return(
    <>
       <RecHolidayCard title="Recommended Holidays " holidays={holidays} />
    </>
)

}
export default RecommendedHolidays