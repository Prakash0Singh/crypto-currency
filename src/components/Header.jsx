import React from 'react'
import Logo from '../style/bitcoin.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light pb-3 pt-3">
  <div className="container">
  <Link className="navbar-brand" to="/">
      <img src={Logo} alt=".." width="30" height="30" className="d-inline-block align-text-top me-2"/>
       C₹YPTO
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item fs-5">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link " to="/currency">Currency</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link" to="/exchange">Exchange</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link " to='about'>About Us</Link>
        </li>
        <li className="nav-item fs-5">
          <Link className="nav-link " to='contact'>Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header