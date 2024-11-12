import React from 'react';
import img1 from '../img/img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';


export default function Deals() {
  return (
    <div className="deals">
      <h2>Super Delicious Deals
<FontAwesomeIcon icon={faFire} />
      </h2>
      <div className="deals-cards">
        <div className="deals-card" id="deal-card1">
          <img src={img1} alt="" />
          <p className="deals-data">
            <span className="deals-name">Chicken Tikka Masala</span>
            <span className="deals-price">₹ 100</span>
          </p>
        </div>
        <div className="deals-card" id="deal-card2">
          <img src={img1} alt="" />
          <p className="deals-data">
            <span className="deals-name">Chicken Tikka Masala</span>
            <span className="deals-price">₹ 100</span>
          </p>
        </div>
        <div className="deals-card" id="deal-card3">
          <img src={img1} alt="" />
          <p className="deals-data">
            <span className="deals-name">Chicken Tikka Masala</span>
            <span className="deals-price">₹ 100</span>
          </p>
        </div>
        <div className="deals-card" id="deal-card4">
          <img src={img1} alt="" />
          <p className="deals-data">
            <span className="deals-name">Chicken Tikka Masala</span>
            <span className="deals-price">₹ 100</span>
          </p>
        </div>
        <div className="deals-card" id="deal-card5">
          <img src={img1} alt="" />
          <p className="deals-data">
            <span className="deals-name">Chicken Tikka Masala</span>
            <span className="deals-price">₹ 100</span>
          </p>
        </div>
        <div className="deals-card" id="deal-card6">
          <img src={img1} alt="" />
          <p className="deals-data">
            <span className="deals-name">Chicken Tikka Masala</span>
            <span className="deals-price">₹ 100</span>
          </p>
        </div>
      </div>
    </div>
  );
}