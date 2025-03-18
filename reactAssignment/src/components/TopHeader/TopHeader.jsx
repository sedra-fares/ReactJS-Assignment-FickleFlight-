import React from "react";
import "./TopHeader.css"; 
import symbols from "../../assets/Symbols.png";
import notif from "../../assets/notificationbell.png";
import profile from "../../assets/profilepicture.png";
const TopHeader=()=>{

    return(
    <>
    <div className="top-container">
  <div className="fickleflight-logo">
    <img className="symbols" src={symbols} />
  </div>
  <div className="navigation-right">
    <div className="navigation-menu">
      <div className="explore">Explore</div>
      <div className="search">Search</div>
      <div className="hotels">Hotels</div>
      <div className="offers">Offers</div>
    </div>
    <div className="account-section">
      <img className="notification-bell" src={notif} />
      <img className="profile-picture" src={profile} />
    </div>
  </div>
 </div>



    </>

    )
}


export default TopHeader;