import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./Error";
import Loader from "./Loader";
import "../style/App.css";
import CurrencyCard from "./CurrencyCard";

const Currency = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [curren, setCurren] = useState("inr");
  const Server = `https://api.coingecko.com/api/v3`;

  const currencySymbol = curren === "inr" ? "₹" : curren === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${Server}/coins/markets?vs_currency=${curren}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [curren, page]);
  if (error) return <Error message={" While Fetching Coins"} />;
  return (
    <div className="container currencyBox">
      {loading ? (
        <Loader />
      ) : (
        <>
        <div className="container currency mt-5">
            {coins.map((i) => (
              <CurrencyCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
        </div>

          <div className="container x-scroller">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {btns.map((item, index) => (
              <li className="page-item" key={index}>
                <a className="page-link" href="#" key={index} onClick={() => changePage(index + 1)}>
                {index + 1}
                </a> 
              </li>
              ))}
            </ul>
          </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Currency;
