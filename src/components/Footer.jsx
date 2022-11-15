import React from "react";
import "../style/App.css";

import avatarSrc from "../style/profile-pic.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid FooterContainer">
        <div className="row">
          <div className="col-8">
            <h4 className="text-muted pt-3 ps-3">About Us</h4>
            <p className="ps-4">We are the best crypto trading app in India, we provide our guidance at a very cheap price.</p>
          </div>
          <div className="col-4 pt-3 pe-3">
          <img src={avatarSrc} className="rounded float-end" alt="Profile-Photo"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
