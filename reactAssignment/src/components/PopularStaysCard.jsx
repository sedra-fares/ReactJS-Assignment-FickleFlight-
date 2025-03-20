import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const PopularStaysCard = ({details}) => {
  return (
    <div className="card shadow-sm rounded" style={{ width: "18rem" }}>
      <img src={details.image} className="card-img-top"  />
      <div className="card-body">
        <div className="d-flex align-items-center">
          <span className="text-warning me-1">⭐</span>
          <span className="fw-bold">4.9</span>
          <a href="#" className="ms-1 text-primary">(60 reviews)</a>
        </div>
        
        <small className="text-muted">{details.detail}</small>
        <h5 className="card-title fw-bold">{details.place}</h5>
        <p className="card-text">{details.cost}</p>
        
        <a href="#" className="btn btn-outline-primary w-100 mt-3">MORE DETAILS</a>
      </div>
      </div>
  );
};

export default PopularStaysCard;
