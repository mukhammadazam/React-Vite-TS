import heroImg from "../../public/shopImg/shop-hero.png";
import logo1 from "../../public/shopImg/logo1.svg";
import logo2 from "../../public/shopImg/logo2.svg";
import logo3 from "../../public/shopImg/logo3.svg";
import pay1 from "../../public/shopImg/pay1.png";
import pay2 from "../../public/shopImg/pay2.png";
import pay3 from "../../public/shopImg/pay3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ShopOne.scss";
import Corusel from "./Corusel";
import Trend from "./Trend";
type DataItem = {
  imgUrl1: string;
  title:string;
  text:string;
};
const SHopOne = () => {
  const [data, setData] = useState([]);

  const getFunction = async () => {
    try {
      const response = await axios("http://localhost:3000/search");
      console.log(response.data);
      setData(response.data);
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
      {/*  SHOPONE ROW CARD. ==========>>>>>>>> */}
      <div className='container'>
        <div className='row shopOne__row '>
          <div className='col-lg-4 shopOne__row--col col-sm-4 pb-5 pb-md-0  d-flex justify-content-center'>
            <div className=''>
              <img
                className='d-block shopOne__row--img'
                src={logo1}
                alt='logo'
              />
              <strong className='shopOne__row--title '>
                Shop what you love
              </strong>
              <p className='shopOne__row--text'>
                Find new products and brands. Get the best deal and earn
                rewards—just for shopping.
              </p>
            </div>
          </div>
          <div className='col-lg-4 shopOne__row--col col-sm-4 pb-5 pb-md-0  d-flex justify-content-center'>
            <div className=''>
              <img
                className='d-block shopOne__row--img'
                src={logo2}
                alt='djfy'
              />
              <strong className='shopOne__row--title text-center'>
                Pay how you like
              </strong>
              <p className='shopOne__row--text'>
                Choose how you pay at partner stores, via our app, Klarna Card
                or browser extension.
              </p>
            </div>
          </div>
          <div className='col-lg-4 shopOne__row--col col-sm-4   d-flex justify-content-center'>
            <div className=''>
              <img
                className='d-block shopOne__row--img'
                src={logo3}
                alt='dsf'
              />
              <strong className='shopOne__row--title '>
                Manage your budget
              </strong>
              <p className='shopOne__row--text'>
                Split your payments and manage purchases, with a smart spending
                overview and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  PAY with Klarna. ==========>>>>>>>>*/}
      <div className='container'>
        <div className='pay'>
          <p className='pay__title'>Pay with Klarna.</p>
          <div className='row '>
            {data.map((el: DataItem, index) => (
              <div
                key={index}
                className='col-12 coll   col-md-12  col-lg-4 pay__row--col   d-flex justify-content-center pb-5 pb-lg-0'>
                <div className=''>
                  <img
                    className='pay__row--img w-100'
                    src={el.imgUrl1}
                    alt='pay'
                    width={267}
                  />
                  <p className='pay__row--title'>{el.title}</p>
                  <p className='pay__row--text'>
                  {el.text}
                  </p>
                  <Link to='/LearMore' className='pay__row--btn'>
                    Learn more <BsArrowRight className='text-dark  fs-3' />
                  </Link>
                </div>
              </div>
            ))}
          </div>
    
        </div>
      </div>
      {/* Partner stores */}
      <div className='py-5'>
        <Corusel />
      </div>
      <div className='py-5'>
        <Trend />
      </div>
    </>
  );
};

export default SHopOne;
