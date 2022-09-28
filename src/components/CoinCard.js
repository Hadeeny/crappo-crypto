import React, { useState } from "react";
import bitcoin from "../Crypto images/bitcon.png";
import ethereum from "../Crypto images/ethereum.png";
import litecoin from "../Crypto images/litecoin.png";
import angle from "../Crypto images/angle.svg";
import angle2 from "../Crypto images/angle2.svg";

const CoinCard = () => {
  const [currency, setCurrency] = useState([
    {
      id: 1,
      name: "Bitcoin",
      logo: `${bitcoin}`,
      pitch:
        "Digital currency in which a record of transactions is maintained.",
      cta: "start mining",
      reveal: false,
    },
    {
      id: 2,
      name: "Ethereum",
      logo: `${ethereum}`,
      pitch:
        "Blockchain technology to create and run decentralized digital applications.",
      cta: "start mining",
      reveal: false,
    },
    {
      id: 3,
      name: "Litecoin",
      logo: `${litecoin}`,
      pitch:
        "Cryptocurrency that enables instant payments to anyone in the world.",
      cta: "start mining",
      reveal: false,
    },
  ]);

  const toggleView = (id) => {
    setCurrency(
      currency.map((x) =>
        x.id === id ? { ...x, reveal: true } : { ...x, reveal: false }
      )
    );
  };
  return (
    <section className="crypto-cards">
      {currency.map((curr) => (
        <div
          key={curr.id}
          onClick={() => toggleView(curr.id)}
          className={curr.reveal ? "card-toggle" : "card"}
        >
          <img src={curr.logo} className="crypto-card" alt="bitcoin" />
          <h2>{curr.name}</h2>
          <p>{curr.pitch}</p>
          <button className={curr.reveal ? "show" : "hide"}>
            <div>{curr.cta}</div>
            <img src={curr.reveal ? `${angle2}` : `${angle}`} alt="angle" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default CoinCard;
