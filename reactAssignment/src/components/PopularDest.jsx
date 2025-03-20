import React from "react";
import "./styles.css";

import paris from "../assets/ParisImage.png";
import greece from "../assets/GreeceImage.png";
import norway from "../assets/NorwayImage.png";
import tuscany from "../assets/TuscanyImage.png";

const destinations = [
  { name: "Paris", price: "$699", image: paris },
  { name: "Greece", price: "$1079", image: greece },
  { name: "Norway", price: "$895",  image: norway },
  { name: "Tuscany", price: "$1245", image: tuscany },
];

const PopularDestinations = () => {
  return (
    <div className="popular-destinations">
      <div className="section-header">
        <h3>Most Popular Destinations</h3>
        <a href="#" className="text-primary text-decoration-none">
          View all stays →
        </a>
      </div>

      <div className="destination-list">
        {destinations.map((dest, index) => (
          <div key={index} className="destination-card detailed-card"> 
            <img src={dest.image} alt={dest.name} />
            <div className="destination-overlay">
              <span>{dest.name}</span>
            </div>
            <div className="destination-overlay1">
            <strong>FROM <br />{dest.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
