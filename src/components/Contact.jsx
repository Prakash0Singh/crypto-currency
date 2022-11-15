import React from 'react'
import Con from "../style/27.png";
import "../style/App.css";


const Contact = () => {
  return (
    <>
    <div className="container aboutContainer">
      <div className="row Con">
        <div className="col-md-5 col-12 mt-4 mx-auto ">
          <img src={Con} alt="Contact" className="img-fluid" />
        </div>
        <div className="col-md-6 col-12 mx-auto mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="display-5 text-center">Contact Me</h1>
            </div>
            <div className="col-12 pt-4">
            
      <form action="https://formsubmit.co/d1c6012d19ef63b27156f9fec97fc328" method="POST">
          <div className="form-group">
            <input className="form-control user-input mb-3" id="name" type="text" name="name" placeholder="Name" required/>
          </div>
          <div className="form-group">
            <input className="form-control user-input mb-3" id="email" type="email" name="email" placeholder="E-mail" required/>
          </div>
          <div className="form-group">
            <input className="form-control user-input mb-3" id="subject" type="text" name="subject" placeholder="Subject" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control user-input mb-3 pb-5" id="message" name="message" placeholder="Message..🖊" required></textarea>
          </div>
          <input className="btn btn-primary mb-3" type="submit" value="Submit" />
        </form>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact

