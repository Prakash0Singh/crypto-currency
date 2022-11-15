import React from "react";
import Profile from "../style/profile-pic.png";
import "../style/App.css";

const About = () => {
  return (
    <>
      <div className="container aboutContainer">
        <div className="row">
          <div className="col-md-5 col-12 mt-4">
            <img src={Profile} alt="Profile Photo" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 mx-auto mt-4">
            <div className="row">
              <div className="col-12">
                <h1 className="display-5 text-center">About Me</h1>
              </div>
              <div className="col-12 pt-4">
              <h1>Hi,</h1>
              <h2>I'M PRAKASH SINGH</h2>
              <h6 className="text-muted">WEB DEVELOPER</h6>
                <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem in a, quos aspernatur doloribus recusandae dolores voluptatem doloremque tempore atque magni impedit culpa repellendus praesentium mollitia possimus cumque eos?
                </p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
