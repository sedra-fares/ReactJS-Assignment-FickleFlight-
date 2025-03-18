import React from "react";
import "./styles.css";

const RecentSearches = () => {
  return (
    <div className="recent-searches">
      <h3>RECENT SEARCHES</h3>
      <div className="search-boxes">
        <div className="search-box">
          <span className="city">SIN</span> ➝ <span className="city">LAX</span>
          <p>Depart On: 7 Sep 2021</p>
        </div>
        <div className="search-box">
          <span className="city">MY</span> ➝ <span className="city">DUB</span>
          <p>Depart On: 9 Sep 2021</p>
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
