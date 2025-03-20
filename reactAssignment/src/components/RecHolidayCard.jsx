import React from "react";
import "./styles.css";

const RecHolidayCard = ({ title, holidays}) => {
  return (
    <div className="recommended-holidays">
      <div className="section-header">
        <h3>{title}</h3>
        <a href="#" className="text-primary text-decoration-none">
          View all stays →
        </a>
      </div>

      <div className="holiday-list">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card simple-card">
            <img src={holiday.image} alt={holiday.name} />
            <div className="holiday-info">
              <span>{holiday.name}</span>
              <p>FROM <strong>{holiday.price}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecHolidayCard;
