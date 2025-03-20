import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logo.png";


const Footer =()=>{
    return(
<div className="bg-light text-center ">
 {/* Footer Section */}
 <div className="bg-primary text-white ">
 <div className="container">
   <div className="row">
     {/* Left Side */}
     <div className="col-md-4">
       <img src={logo} alt="logo" />
       <p>Fickle Flight is your one-stop travel portal. We offer hassle free flight<br/>
         and hotel bookings. We also have all your flight needs in you online shop.</p>
       <div className="d-flex gap-3">
         <i className="bi bi-facebook"></i>
         <i className="bi bi-instagram"></i>
         <i className="bi bi-twitter"></i>
       </div>
     </div>

     {/* Other Footer Links */}
     <div className="col-md-2">
       <h6 className="fw-bold">Company</h6>
       <ul className="list-unstyled">
         <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
         <li><a href="#" className="text-light text-decoration-none">News</a></li>
         <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
         <li><a href="#" className="text-light text-decoration-none">How we work</a></li>

       </ul>
     </div>
     <div className="col-md-2">
       <h6 className="fw-bold">Support</h6>
       <ul className="list-unstyled">
         <li><a href="#" className="text-light text-decoration-none">Account</a></li>
         <li><a href="#" className="text-light text-decoration-none">Support center</a></li>
         <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
         <li><a href="#" className="text-light text-decoration-none">Accessibility</a></li>

       </ul>
     </div>
     <div className="col-md-2">
       <h6 className="fw-bold">More</h6>
       <ul className="list-unstyled">
       <li><a href="#" className="text-light text-decoration-none">Covid Advisory</a></li>
         <li><a href="#" className="text-light text-decoration-none">Airline Fees</a></li>
         <li><a href="#" className="text-light text-decoration-none">Tips</a></li>
         <li><a href="#" className="text-light text-decoration-none">Quarantine Rules</a></li>
       </ul>
     </div>
   </div>
 </div>
</div>
</div>
    )

}

export default Footer;