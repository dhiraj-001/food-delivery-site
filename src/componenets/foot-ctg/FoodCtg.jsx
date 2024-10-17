import React from 'react';
import chickenTikkaMasalaImage from '../img/Chicken-Tikka-Masala-IMAGE-5-2048x1365.jpg';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function FoodCtg() {
  return (
    <div className="food-ctg">
      <h2 className="nerko-one-regular">
        Top Dishes
        <FontAwesomeIcon icon={faUtensils}/>
      </h2>
      <div className="food-ctg-2">
        <div className="slide">
          <div className="food-ctg-2-part">
            <div className="big-img">
              <img src={chickenTikkaMasalaImage} />
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
          </div>
        </div>
        <div className="dish_btn">
          <i className="fa-solid fa-angles-left prev-dish"></i>
          <i className="fa-solid fa-angles-right next-dish"></i>
        </div>
        <div className="dish-cards">
          <div className="dish-card" id="dishcards2">
            <img src={chickenTikkaMasalaImage} alt="" />
            <h2>Chicken Tikka Masala</h2>
          </div>
          <div className="dish-card" id="dishcards3">
            <img src={img1} alt="" />
            <h2>Chicken Tikka Masala</h2>
          </div>
          <div className="dish-card" id="dishcards4">
            <img src={img2} alt="" />
            <h2>Chicken Tikka Masala</h2>
          </div>
          <div className="dish-card" id="dishcards5">
            <img src={img3} alt="" />
            <h2>Chicken Tikka Masala</h2>
          </div>
        </div>
      </div>
    </div>
  );
}