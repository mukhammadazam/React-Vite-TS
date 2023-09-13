import heroImg from "../../public/shopImg/shop-hero.png";
import logo1 from "../../public/shopImg/logo1.svg";
import logo2 from "../../public/shopImg/logo2.svg";
import logo3 from "../../public/shopImg/logo3.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ShopOne.scss";
const SHopOne = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://watchsignals.p.rapidapi.com/watch/referencenumber/11088",
    headers: {
      "X-RapidAPI-Key": "5401697795msh4c9903c5ca8b1acp1d16c6jsn9312395fea1e",
      "X-RapidAPI-Host": "watchsignals.p.rapidapi.com",
    },
  };

  const getFunction = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFunction();
  }, []);
  return (
    <>
      <div className='shop'>
        <div className='container'>
          <div className='shopOne d-lg-flex  align-items-lg-center justify-content-lg-around  '>
            <h1 className='shopOne__title d-flex align-items-center justify-content-center text-center text-lg-start'>
              Find it. Compare it. And pay how you like.
            </h1>
            <img
              className='d-block p-lg-0 pt-5 shopOne__img'
              src={heroImg}
              alt='heroimg'
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row shopOne__row '>
          <div className='col-lg-4  col-sm-4 pb-5 pb-sm-0  d-flex justify-content-center'>
            <div className=''>
              <img   className="d-block text-center" src={logo1} alt='logo' />
              <strong className='shopOne__row--title '>
                Shop what you love
              </strong>
            </div>
          </div>
          <div className='col-lg-4  col-sm-4 pb-5 pb-sm-0  d-flex justify-content-center'>
            <div className=''>
              <img   className="d-block text-center" src={logo3} alt='djfy' />
              <strong className='shopOne__row--title '>
                Shop what you love
              </strong>
            </div>
          </div>
          <div className='col-lg-4  col-sm-4   d-flex justify-content-center'>
            <div className=''>
              <img  className="d-block text-center"  src={logo3} alt='dsf' />
              <strong className='shopOne__row--titler'>
                Shop what you love
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SHopOne;
