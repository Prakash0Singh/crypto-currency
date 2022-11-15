import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import "../style/App.css";
import Progressbar from './Progress_bar';


const CurrDetail = () => {

  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const server = `https://api.coingecko.com/api/v3`;

  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency]);

  if (error) return <Error message={"Error While Fetching Coin"} />;
  return (
    <div className="container currencyBox">
      {loading ? (
        <Loader />
      ) : (
    <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mt-5 text-muted"> Last Updated On{" "}{Date(coin.market_data.last_updated).split("G")[0]}</p>
            </div>
            <div className="col-3 mx-auto">
              <img src={coin.image.large} className="currDetailImg img-fluid" alt="Coins"/>
            </div>
            <div className="col-12 ">
              {coin.name} <br />
              <p className="fw-bold fs-1">{currencySymbol}{coin.market_data.current_price[currency]}</p>
              <button className="btn btn-dark btn-lg">#{coin.market_cap_rank}</button>
            </div>
            <div className="col-12 mt-3">
          <Progressbar bgcolor="lightblue" progress='60'  height={30} />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                {`Max-${currencySymbol}${coin.market_data.high_24h[currency]}`}
                </div>
                <div className="col-4">
                 <p className="text-center text-muted">24 Hours</p> 
                </div>
                <div className="col-4">
                
                <p className="text-end">
                {`Min-${currencySymbol}${coin.market_data.low_24h[currency]}`}
                </p>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto mt-3">
            <div className="row">
              <div className="col-6"><p className="fw-bold">Max Supply</p></div>
              <div className="col-6"><p>{coin.market_data.max_supply}</p></div>
              <div className="col-6"><p className="fw-bold" >Circulating Supply</p></div>
              <div className="col-6"><p>{coin.market_data.circulating_supply}</p></div>
              <div className="col-6"><p className="fw-bold" >Market Cap</p></div>
              <div className="col-6"><p>{`${currencySymbol}${coin.market_data.market_cap[currency]}`}</p></div>
              <div className="col-6"><p className="fw-bold" >All Time Low</p></div>
              <div className="col-6"><p>{`${currencySymbol}${coin.market_data.atl[currency]}`}</p></div>
              <div className="col-6"><p className="fw-bold" >All Time High</p></div>
              <div className="col-6"><p>{`${currencySymbol}${coin.market_data.ath[currency]}`}</p></div>
            </div> 
            </div>
          </div>
        </div>
    </>
    )}
    </div>
  );
}

export default CurrDetail