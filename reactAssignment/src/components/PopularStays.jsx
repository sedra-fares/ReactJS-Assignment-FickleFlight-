import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PopularStaysCard from "./PopularStaysCard";
import matterhorn from "../assets/Matterhorn Suites Image.png";
import discovery from "../assets/Discovery Shores Image.png";
import arctic from "../assets/Arctic Hut Image.png";
import lakeLouise from "../assets/Lake Louise Image.png";

const stays = [
  {
    image: matterhorn,
    details: "Entire bungalow",
    place: "Matterhorn Suites",
    cost: "$575/night",
    rating: "4.9",
    reviews: "60",
  },
  {
    image: discovery,
    details: "2-Story beachfront suite",
    place: "Discovery Shores",
    cost: "$360/night",
    rating: "4.8",
    reviews: "116",
  },
  {
    image: arctic,
    details: "Single deluxe hut",
    place: "Arctic Hut",
    cost: "$420/night",
    rating: "4.7",
    reviews: "78",
  },
  {
    image: lakeLouise,
    details: "Deluxe King Room",
    place: "Lake Louise Inn",
    cost: "$244/night",
    rating: "4.6",
    reviews: "63",
  },
];

const PopularStays = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Popular Stays</h3>
        <a href="#" className="text-primary text-decoration-none">
          View all stays →
        </a>
      </div>
      
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {stays.map((stay, index) => (
          <div key={index} className="col">
            <PopularStaysCard {...stay} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;
