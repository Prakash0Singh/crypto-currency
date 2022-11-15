import React from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

const CurrencyCard = ({
  id,
  name,
  img,
  symbol,
  price,
  currencySymbol = "₹",
}) => (
  <Link className="text-decoration-none" to={`/currency/${id}`} >
    <div className="container" key={id}>
      <div className="card currencyCard" >
        <img src={img} className="card-img-top mx-auto" alt="currency"/>
        <div className="card-body">
          <p className="card-text ">
          <span>{name}
          <br />
          {price ? `${currencySymbol}${price}` : "NA"}</span>
          </p>
        </div>
      </div>
    </div>
  </Link>
);
export default CurrencyCard;
