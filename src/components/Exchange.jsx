import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const server = `https://api.coingecko.com/api/v3`;

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  if (error)
  return <Error message={"Error While Fetching Exchanges"} />;
  return (
    <div className="container currencyBox">
      {loading ? (
        <Loader />
      ) : (
        <>
        <div className="container currency mt-5">
            {exchanges.map((i) => (
              <ExchangeCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
        </div>
        </>
      )}
    </div>
  )
}

const ExchangeCard= ({ id,name, img, rank, url }) => (
  <a href={url} target={"blank"} className="text-decoration-none">
    <div className="container">
      <div className="card currencyCard" key={id}>
        <img src={img} className="card-img-top mx-auto" alt="Exchange"/>
        <div className="card-body">
          <p className="card-text ">
          <span className="fw-bolder">{rank}</span> <br />
          <span>{name}</span>
          </p>
        </div>
      </div>
    </div>
  </a>
)

export default Exchange