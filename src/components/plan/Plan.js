import React from "react";
import Pblock1 from "../../assets/images/block1.png";
import Pblock2 from "../../assets/images/block2.png";
const Plan = () => {
  return (
    <div className="container">
      <div className="plan">
        <h2>What We Offer</h2>
        <h4>Our Pricing Plan For You</h4>
        <div className="planbtn">
          <button className="btn1">MONTHLY</button>
          <button className="btn2">YEARLY</button>
        </div>
        <div className="plan-block">
          <div className="p-block">
            <h3>BASIC</h3>
            <img src={Pblock1} alt="" />
          </div>
          <div className="p-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
