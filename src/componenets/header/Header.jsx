import './nav.css'
import img1 from '../img/Aahar-lg.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div className="header-1">
      <nav className="navbar">
        <div className="navigation">
          <nav>
            <div>
              <a href="http://localhost:5173/food-delivery-site/">
              <img src={img1} alt="" className="logo" />
              </a>
              
            </div>
            <div>
              <ul className="nav-type ul">
                <li className="li">
                  <Link to="/food-delivery-site" className="active">
                    Home
                  </Link>
                </li>
                <li className="li">
                  <Link to="/food-delivery-site/dishes"  className="active1">
                    Dishes
                  </Link>
                </li>
                <li className="li">
                  <Link to="/food-delivery-site/locations" className="active2">
                    Locations
                  </Link>
                </li>
                <li className="li">
                <Link to="/food-delivery-site/orders" className="active3">
                    Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="log-sign">
                <li className="li">
                  <Link className="login" to="/food-delivery-site/login">
                    Login
                  </Link>
                </li>
                <li className="li">
                  <Link className="signup" to="/food-delivery-site/signup">
                    Signup
                  </Link>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </nav>
      <div className="head-p1">
        <div className="text-head-p2 mt-5">
          <div className="deliver">
          <FontAwesomeIcon icon={faTruck} />
            <p className="deliver-p">Easy way to order your food</p>
          </div>
          <h1 className="head-logo-name head-txt-m">Maihang</h1>
          <div className="bar" />
          <h4 className="head-logo-tag head-txt-s dancing-script-ft">
            Let's have a taste of delicious <p className="vidaloka-regular">Assamese food</p>
          </h4>
          <p className='para-detail bree-serif-regular'>
          Assamese food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.
          </p>
          <button className='order-btn h-18 w-full text-yellow-500 text-xl rounded-lg p-1 mt-5 pacifico-regular'>
            Order Now
          </button>
        </div>
        <div className="img-head-p2">
          <img className="img-head" src={img1} alt="" />
        </div>
      </div>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#090110"
          fillOpacity="1"
          d="M0,64L160,224L320,256L480,224L640,288L800,224L960,224L1120,96L1280,96L1440,64L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
        />
      </svg>
    </div>
  );
}