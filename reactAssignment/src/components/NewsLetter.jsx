import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundNews from "../assets/Subscribe section background.png";
const Newsletter = () => {
  return (
    <div
        className="text-center py-4 "
        style={{
          backgroundImage: `url(${backgroundNews})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" ></div>

        <div className="container position-relative">
          <h6 className="text-uppercase fw-bold">Subscribe to Our Newsletter</h6>
          <h2 className="fw-bold">Get weekly updates</h2>
          <p>Fill in your details to join the party!</p>

          <div className="d-flex justify-content-center">
            <div className="bg-white shadow rounded p-4" style={{ maxWidth: "500px", width: "100%" }}>
              <input type="text" className="form-control mb-3" placeholder="Your name" />
              <input type="email" className="form-control mb-3" placeholder="Email address" />
              <button className="btn btn-warning w-100">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Newsletter;