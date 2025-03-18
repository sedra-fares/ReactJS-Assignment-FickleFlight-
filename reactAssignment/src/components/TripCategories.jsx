import React from "react";
import "./styles.css";
import hotel from "../assets/Hotel.png";
import attractions from "../assets/Attractions Icon.png";
import eat from "../assets/Eats Icon.png";
import commute from "../assets/Commute icon.png";
import taxi from "../assets/Taxi Icon.png";
import movie from "../assets/Movies icon.png";
const categories = [
  { name: "Hotel", Image: hotel },
  { name: "Attractions", Image:attractions },
  { name: "Eats", Image:eat },
  { name: "Commute", Image:commute },
  { name: "Taxi", Image:taxi },
  { name: "Movies", Image:movie },
];

const TripCategories = () => {
  return (
    <>
    <h2 style={{color: "grey"}}>Prepare for your trip</h2>

    <div className="trip-categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <span className="category-icon"><img src={category.Image} alt="" /></span>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
    </>
  );
  
};

export default TripCategories;
