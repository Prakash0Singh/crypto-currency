import React from 'react'
import Brand from '../style/btc.png'
import '../style/App.css'
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 boxStyle">
            <img src={Brand} alt="Home Page" className='img-fluid homeImageStyle' />
          </div>
          <div className="col-12 brandStyle">
            <h1 className='display-5 text-center'>C₹YPTO</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home