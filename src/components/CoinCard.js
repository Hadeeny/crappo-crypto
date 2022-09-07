import React, { useState } from "react";
import bitcoin from "../Crypto images/bitcon.png";
import ethereum from "../Crypto images/ethereum.png";
import litecoin from "../Crypto images/litecoin.png";
import angle from "../Crypto images/angle.svg";

const CoinCard = () => {
  const [reveal, setReveal] = useState(false);

  const toggleView = () => {
    setReveal(!reveal);
  };
  return (
    <section className="crypto-cards">
      <div onClick={toggleView} className="card">
        <img src={bitcoin} className="item" alt="bitcoin" />
        <h2>Bitcoin</h2>
        <p>Digital currency in which a record of transactions is maintained.</p>
        <button className={reveal ? "show" : "hide"}>
          <div>Start mining</div>
          <img src={angle} alt="angle" />
        </button>
      </div>
      <div className="card">
        <img src={ethereum} className="item" alt="ethereum" />
        <h2>Ethereum</h2>
        <p>
          Blockchain technology to create and run decentralized digital
          applications.
        </p>
        <button className={reveal ? "show" : "hide"}>
          <div>Start mining</div>
          <img src={angle} alt="angle" />
        </button>
      </div>
      <div className="card">
        <img src={litecoin} className="item" alt="litecoin" />
        <h2>Litecoin</h2>
        <p>
          Cryptocurrency that enables instant payments to anyone in the world.
        </p>
        <button className={reveal ? "show" : "hide"}>
          <div>Start mining</div>
          <img src={angle} alt="angle" />
        </button>
      </div>
    </section>
  );
};

export default CoinCard;
