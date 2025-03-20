import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PopularStaysCard = ({ image, details, place, cost, rating, reviews }) => {
  return (
    <div className="card shadow-sm rounded" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={place} />
      <div className="card-body">
        <small className="text-muted">{details}</small>
        <h5 className="card-title fw-bold">{place}</h5>
        <p className="card-text">{cost}</p>

        <div className="d-flex align-items-center">
          <span className="text-warning me-1">⭐</span>
          <span className="fw-bold">{rating}</span>
          <a href="#" className="ms-1 text-primary">({reviews} reviews)</a>
        </div>

        <a href="#" className="btn btn-outline-primary w-100 mt-3">MORE DETAILS</a>
      </div>
    </div>
  );
};

export default PopularStaysCard;
