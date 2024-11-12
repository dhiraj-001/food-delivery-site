import React, { useState } from 'react';
import chickenTikkaMasalaImage from '../img/Chicken-Tikka-Masala-IMAGE-5-2048x1365.jpg';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function FoodCtg() {
   const bigImgs = [
     chickenTikkaMasalaImage,
     img1,
     img2,
     img3,
   ]
const [imgno, setImgno] = useState(0) ;
const [cardIndex, setCardIndex] = useState(0);

const prevClick = () =>{
  if(cardIndex > 0){
    setCardIndex(cardIndex - 1);
    setImgno(cardIndex - 1);
  }
}

const nextClick = () =>{
  if(cardIndex < bigImgs.length - 1){
    setCardIndex(cardIndex + 1);
    setImgno(cardIndex + 1);
  }
}

  return (
    <div className="food-ctg">
      <h2 className="merienda-1 mb-7 food-ctg-h2">
        Top Dishes
        <FontAwesomeIcon icon={faUtensils}/>
      </h2>
      <div className="food-ctg-2">
        <div className="slide">
          <div className="food-ctg-2-part">
            <div className="big-img">
              <img src={bigImgs[imgno]} />
            </div>
            <div className="big-fod-detail">
              <h3 className="big-fd-nme">
                Chicken Tikka Masala
              </h3>
              <p className="para-big-fd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum facere, laudantium expedita ad quidem,
                facilis explicabo culpa quisquam, architecto earum molestias exercitationem impedit. Quos, cum non.
                Sequi
              </p>
            </div>
          </div>
          {/* <div className="food-ctg-2-part">
            <div className="big-img">
              <img src={img1} alt="" />
            </div>
            <div className="big-fod-detail">
              <h3 className="big-fd-nme">
                Chicken Tikka Masala
              </h3>
              <p className="para-big-fd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum facere, laudantium expedita ad quidem,
                facilis explicabo culpa quisquam, architecto earum molestias exercitationem impedit. Quos, cum non.
                Sequi
              </p>
            </div>
          </div>
          <div className="food-ctg-2-part">
            <div className="big-img">
              <img src={img2} alt="" />
            </div>
            <div className="big-fod-detail">
              <h3 className="big-fd-nme">
                Chicken Tikka Masala
              </h3>
              <p className="para-big-fd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum facere, laudantium expedita ad quidem,
                facilis explicabo culpa quisquam, architecto earum molestias exercitationem impedit. Quos, cum non.
                Sequi
              </p>
            </div>
          </div>
          <div className="food-ctg-2-part">
            <div className="big-img">
              <img src={img3} alt="" />
            </div>
            <div className="big-fod-detail">
              <h3 className="big-fd-nme">
                Chicken Tikka Masala
              </h3>
              <p className="para-big-fd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum facere, laudantium expedita ad quidem,
                facilis explicabo culpa quisquam, architecto earum molestias exercitationem impedit. Quos, cum non.
                Sequi
              </p>
            </div>
          </div> */}
        </div>
        <div className="dish_btn">
        <FontAwesomeIcon icon={faAngleLeft} onClick={prevClick} className="fa-solid fa-angles-left pn-dish prev-dish"/>
        <FontAwesomeIcon icon={faAngleRight} onClick={nextClick} className="fa-solid fa-angles-right pn-dish next-dish"/>
        </div>
        <div className="dish-cards">
        {bigImgs.map((img, index) => (
            <div className="dish-card" key={index} id={`dishcards${index + 2}`} style={{ display: cardIndex === index ? 'block' : 'none' }}>
              <img src={img} alt={`Dish ${index + 1}`} />
              <h2>Chicken Tikka Masala</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}