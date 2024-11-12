import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MidPart.css'
import nayantaraImage from "../img/nayantara.jpg";
import Slider from "react-slick";
 
import img from "../img/dots-blue.png";
import {
  faSquareCaretLeft,
  faSquareCaretRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function MidPart() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };


  const Restrdetail = [
    {
      img1: nayantaraImage,
      name: "Nayantara",
    },
    {
      img1: nayantaraImage,
      name: "Nayantara",
    },
    {
      img1: nayantaraImage,
      name: "Nayantara",
    },
    {
      img1: nayantaraImage,
      name: "Nayantara",
    },
    {
      img1: nayantaraImage,
      name: "Nayantara",
    },
  ];
  return (
    <div className="flex justify-center align-middle my-28">
    <div className="restr-part w-9/12 ">
      <Slider {...settings}>
    {
      Restrdetail.map((rest,i)=>{
        return(
        <NavLink to='/food-delivery-site/Development' className="cards bg-amber-400 rounded-lg relative ">
          <div className="restr-img w-fit">
            <img src={rest.img1} alt="Nayantara" className="rounded-t-lg"/>
          </div>
          <div className="restr-name z-20 text-black absolute bottom-4 text-center flex w-full justify-center bg-yellow-500 rounded-lg text-[30px] font-bold">
            {rest.name}
          </div>
        </NavLink>)
      })
     
      
      }
 </Slider>
    </div></div>
  )}