import React, { useEffect, useState } from 'react';
import logo1 from '../img/logo-1-120x120.png';
import logo2 from '../img/logo-2-120x120.png';
import logo3 from '../img/logo-3-120x120.png';
import img45 from '../img/45.png';
import rvw1 from '../img/hw-5-1-300x300.jpg';
import rvw2 from '../img/hw-3-300x300.png';
import rvw3 from '../img/hw-2-300x300.png';
import './feedback.css';

export default function Feedback() {
  const iteams = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum labore voluptatum non. Cupiditate animi autem quis consequatur provident consectetur. Suscipit accusamus debitis magni harum exercitationem sunt. Est, minima a.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum labore voluptatum non. Cupiditate animi autem quis consequatur provident consectetur. Suscipit accusamus debitis magni harum exercitationem sunt. Est, minima a.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum labore voluptatum non. Cupiditate animi autem quis consequatur provident consectetur. Suscipit accusamus debitis magni harum exercitationem sunt. Est, minima a.`
  ];
  
  const imgs = [logo1, logo2, logo3];
  const rvwimgs = [rvw1, rvw2, rvw3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % iteams.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [iteams.length]);

  const change = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="feedbk">
      <div className="feedbk-part">
        <h1 className='dancing-script-ft text-center'>Customer Reviews</h1>
        <div className="feedbk-part-rvws">
          <div className="feedbk-part-rvw" id="feedbk-part1">
            <img src={imgs[currentIndex]} alt="" />
            <div className="updock-regular">
              {iteams[currentIndex]}
            </div>
          </div>
        </div>
        <div className="reviewers">
          {
            rvwimgs.map((rvw, i) => {
              return (
                <img 
                  src={rvw} 
                  className="reviewer" 
                  onClick={() => change(i)} 
                  key={i} 
                />
              );
            })
          }
        </div>
      </div>
      <div className="feedbk-img">
        <img src={img45} alt="" />
      </div>
    </div>
  );
}

 
          {/* <div className="feedbk-part-rvw" id="feedbk-part1">
            <img src={logo1} alt=""/>
            <div className="updock-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum labore voluptatum non. Cupiditate animi autem quis consequatur provident consectetur. Suscipit accusamus debitis magni harum exercitationem sunt. Est, minima a.
            </div>
          </div>
          <div className="feedbk-part-rvw" id="feedbk-part2">
            <img src={logo2} alt=""/>
            <div className="updock-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum labore voluptatum non. Cupiditate animi autem quis consequatur provident consectetur. Suscipit accusamus debitis magni harum exercitationem sunt. Est, minima a.
            </div>
          </div>
          <div className="feedbk-part-rvw" id="feedbk-part3">
            <img src={logo3} alt=""/>
            <div className="updock-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorum labore voluptatum non. Cupiditate animi autem quis consequatur provident consectetur. Suscipit accusamus debitis magni harum exercitationem sunt. Est, minima a.
            </div>
          </div> */}