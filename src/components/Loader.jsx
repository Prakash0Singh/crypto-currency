import React from 'react'
import "../style/App.css"; 
import DotLoader from "react-spinners/BeatLoader";



const Loader = () => {
  return (
    <>
    <div className="sweet-loading aboutContainer Loading">
    <div className="container ">
      <div className="row mt-5" >
        <div className="col-4 mx-auto ">
        <DotLoader
            color="#849592"
            size={80}
        /></div>
      </div>
    </div>
  
      </div>
  </>

  )
}

export default Loader