import './nav.css'
import img1 from '../img/Aahar-lg.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <div className="header-1">
      <nav className="navbar">
        <div className="navigation">
          <nav>
            <div>
              <img src={img1} alt="" className="logo" />
            </div>
            <div>
              <ul className="nav-type">
                <li>
                  <a href="https://codepen.io/EneergeticTomy/" target="_blank" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/TomikaBoy/full/LqMpaE" target="_blank" className="active1">
                    Dishes
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/" target="_blank" className="active2">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="https://w3schools.com/" target="_blank" className="active3">
                    Orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="log-sign">
                <li>
                  <a className="login" href="">
                    Login
                  </a>
                </li>
                <li>
                  <a className="signup" href="">
                    Signup
                  </a>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </nav>
      <div className="head-p1">
        <div className="text-head-p2">
          <div className="deliver">
          <FontAwesomeIcon icon={faTruck} />
            <p className="deliver-p">Easy way to order your food</p>
          </div>
          <h1 className="head-logo-name head-txt-m">Aahar</h1>
          <div className="bar" />
          <h4 className="head-logo-tag head-txt-s dancing-script-ft">
            Let's have a taste of delicious <p className="vidaloka-regular">Assamese food</p>
          </h4>
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