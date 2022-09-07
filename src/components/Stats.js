import bars from "../Crypto images/bars.svg";
import triangle from "../Crypto images/triangle.svg";
import user from "../Crypto images/user.svg";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-item">
        <img alt="bars" className="stat-circle" src={bars} />
        <div className="text-con">
          <h2>$30B</h2>
          <p>Digital Currency Exchange</p>
        </div>
      </div>

      <div className="stat-item">
        <img alt="triangle" className="stat-circle" src={triangle} />
        <div className="text-con">
          <h2>190+</h2>
          <p>Countries Around The World</p>
        </div>
      </div>

      <div className="stat-item">
        <img alt="user" className="stat-circle" src={user} />
        <div className="text-con">
          <h2>$30M</h2>
          <p>Trusted Wallet Investors</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
