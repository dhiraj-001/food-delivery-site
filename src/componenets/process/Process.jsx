import React from 'react';
import thinkImage from '../img/think.png';
import './process.css';
import img from '../img/2.png'
export default function Process() {
  return (
    <div className="proc-background"> 
    <img className='img1' src={img} alt="" />
    
    <div className="process">
      <div className="process-head">
        <h1 className='merienda-1'>How it works ?</h1>
        <h3 className='playwrite-gb-s-1 text-3xl'>simple process</h3>
      </div>
      <div className="process-box">
        <div className="procs-img">
          <img src={thinkImage} alt="" />
        </div>
        <div className="process-boxes">
          <div className="process-box1" id="proc-b1">
            <h2>Place order</h2>
            <p>Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>

          </div>
          <div className="process-box1" id="proc-b2">
            <h2>Cash on Delivery</h2>
            <p>Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.</p>

          </div>
          <div className="process-box1" id="proc-b3">
            <h2>Receive Order</h2>
            <p>We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied .</p>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}