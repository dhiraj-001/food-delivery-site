import React from 'react';
import nayantaraImage from '../img/nayantara.jpg';
import img from '../img/dots-blue.png'

export default function MidPart() {
  return (
    <div className="middle-part">
{/* <img className='dots' src={img} alt="" /> */}
      <div className="restr">
        <h3 className="dancing-script-ft">Popular resturants</h3>
        <div className="restr-list">
          <i className="fa-solid fa-square-caret-left prev-btn" id="pn-btn"></i>
          <div className="restr1">
            <section>
              <img src={nayantaraImage} alt="" />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              <div className="rate">5</div>
            </section>
            <p className="vidaloka-regular">Nayantara</p>
          </div>
          <div className="restr2">
            <section>
              <img src={nayantaraImage} alt="" />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              <div className="rate">5</div>
            </section>
            <p className="vidaloka-regular">Nayantara</p>
          </div>
          <div className="restr3">
            <section>
              <img src={nayantaraImage} alt="" />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              <div className="rate">5</div>
            </section>
            <p className="vidaloka-regular">Nayantara</p>
          </div>
          <div className="restr4">
            <section>
              <img src={nayantaraImage} alt="" />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              <div className="rate">5</div>
            </section>
            <p className="vidaloka-regular">Nayantara</p>
          </div>
          <div className="restr5">
            <section>
              <img src={nayantaraImage} alt="" />
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
              <div className="rate">5</div>
            </section>
            <p className="vidaloka-regular">Nayantara</p>
          </div>
          <i className="fa-solid fa-square-caret-right nxt-btn" id="pn-btn"></i>
        </div>
      </div>
    </div>
  );
}