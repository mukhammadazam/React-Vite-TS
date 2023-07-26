import { useState } from "react";
import "./Hero.scss";
const Hero = () => {
  const [news, setNews] = useState(false);
  const newsFunction = () => {
    return setNews(!news);
  };
  return (
    <div className='hero'>
      <div className='hero-inner'>
        <span className='hero-inner__leni text-center d-block text-sm-start'>
          NEW TREND
        </span>
        <h1 className='hero-inner__title text-center text-sm-start'>
          COLLUSION
        </h1>
        <p className='hero-inner__text text-center text-sm-start'>
          An exclusive selection of this season's trends.
        </p>
        <div className='hero-inner__btnWpappe  d-flex justify-content-center '>
          <button
            onClick={newsFunction}
            className='d-block hero-inner__btn1 border-0'>
            DISCOVER
          </button>
          <button className='d-block hero-inner__btn1 ms-3 border-0'>
            SHOP NOW
          </button>
          {news ? <div className='news'>
            
          </div> : ""}
        </div>
      </div>
    </div>
  );
};

export default Hero;
