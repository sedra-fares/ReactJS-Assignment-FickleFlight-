import React, { useState } from "react";
import "./SearchHeader.css";
import bannerBG from "../../assets/BannerBackground.png";
import date from "../../assets/date.png";
const SearchHeader = () => {
  const [flightType, setFlightType] = useState("return");

  const handleRadioChange = (event) => {
    setFlightType(event.target.value);
  };

  return (
    <>
      <div className="search-section">
        <div className="banner-gradient"></div>
        <img className="banner-background" src={bannerBG} alt="Banner Background" />
        <div className="search-container">
          <div className="title">
            <div className="let-s-explore-travel-the-world">
              Let's explore &amp; travel the world
            </div>
            <div className="find-the-best-destinations-and-the-most-popular-stays">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="search-form">
            <div className="form-title-group">
              <div className="search-flights">Search flights</div>
              <div className="flight-options">
                <div className="flight-type">
                  <div className="radio">
                    <div className="padding">
                      <input
                        type="radio"
                        id="return"
                        name="flightType"
                        value="return"
                        checked={flightType === "return"}
                        onChange={handleRadioChange}
                      />
                    </div>
                    <div className="label">Return</div>
                  </div>
                  <div className="radio2">
                    <div className="padding">
                      <input
                        type="radio"
                        id="one-way"
                        name="flightType"
                        value="one-way"
                        checked={flightType === "one-way"}
                        onChange={handleRadioChange}
                      />
                    </div>
                    <div className="label2">One-way</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-inputs-row">
              <div className="inputs-row">
                <div className="departure-field">
                  <div className="input">
                    <div className="label-container">
                      <div className="departure">Departure</div>
                    </div>
                    <div className="active">
                      <div className="singapore-sin">Singapore (SIN)</div>
                    </div>
                  </div>
                </div>
                <div className="arrival-field">
                  <div className="input">
                    <div className="label-container">
                      <div className="arrival">Arrival</div>
                    </div>
                    <div className="active">
                      <div className="los-angeles-la">Los Angeles (LA)</div>
                    </div>
                  </div>
                </div>
                <div className="select-outlined">
                  <div className="input">
                    <div className="label-container">
                      <div className="date">Date</div>
                    </div>
                    <div className="active">
                      <div className="_01-05-2022">01/05/2022</div>
                      <img className="date2" src={date} alt="Date" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-group">
                <div className="search-flights-button">
                  <div className="button">Search flights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
