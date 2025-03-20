import React from "react";
import bgImage from "../../assets/BannerBackground.png"; 
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchHeader = () => {
  const [tripType, setTripType] = useState("one-way");
  
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        background: `url(${bgImage}) no-repeat center center/cover, #007bff`,
        height: "70vh",
        padding: "20px",
      }}
    >
       <h1 className="text-white fw-bold display-4">Let's explore & travel the world</h1>
      <p className="text-white fs-5">Find the best destinations and the most popular stays!</p>

      <div className="p-4 rounded shadow bg-white" style={{ maxWidth: "800px", width: "100%", borderRadius: "15px" }}>
        <h5 className="fw-bold text-start">SEARCH FLIGHTS</h5>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <input type="text" className="form-control flex-fill" placeholder="Departure" value="Singapore (SIN)" readOnly style={{ borderRadius: "10px" }} />
          <input type="text" className="form-control flex-fill" placeholder="Arrival" value="Los Angeles (LA)" readOnly style={{ borderRadius: "10px" }} />
          <input type="date" className="form-control" defaultValue="2022-01-05" style={{ borderRadius: "10px", minWidth: "180px" }} />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <div>
            <input type="radio" id="return" name="tripType" value="return" checked={tripType === "return"} onChange={() => setTripType("return")} />
            <label htmlFor="return" className="ms-2">Return</label>
            <input type="radio" id="oneway" name="tripType" value="one-way" className="ms-3" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} />
            <label htmlFor="oneway" className="ms-2">One-way</label>
          </div>
          <button className="btn btn-warning px-4 py-2 fw-bold" style={{ borderRadius: "10px" }}>Search Flights</button>
        </div>
      </div>
    </div>
  );
};

 

export default SearchHeader;
