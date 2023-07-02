import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import data from "../db/card.json";
import "./Women.scss";
import { useState } from "react";
const Women = () => {
  const [togle, setTogle] = useState(false);
  const funcTogle = () => {
    return setTogle(!togle);
  };
  return (
    <div className='container'>
      <div className='women'>
        <h4 className='women__title text-center pb-3'>WOMEN’S FASHION</h4>
        <p className='women__text text-center'>
          Shop our new arrivals from established brands
        </p>
        <div className=' pb-5 women__shop d-flex gap-5'>
          {data.map((el) => (
            <div key={el.id} className='col '>
              <div className='card border border-2  women__carts'>
                <div  className='position-relative'>
                <img
                  className='women__img   imgs '
                  src={el.imgUrl}
                  alt={el.title}
                  height='371'
                />
                <Link
                  to=''
                  onClick={funcTogle}
                  className={`${!togle ? "dark" : ""}`}>
                  <AiOutlineHeart
                    className={`  position-absolute   women__icons `}
                  />
                </Link>
                </div>
                <p className='women__shop--text ps-3 pt-3 m-0'>{el.name}</p>

                <p className='women__shop--title pt-2 ps-3 m-0'>{el.title}</p>
                <div className='d-flex align-items-center ps-3 pt-2 justify-content-between pe-5'>
                  <p className='women__shop--title    m-0'>
                    <del>${el.noPrice}.00</del>
                  </p>
                  <p className='m-0 women__shop--price '>${el.price}.00</p>
                </div>
                <button className='btn1 p-1 mt-2 d-block w-100 bg-dark text-light rounded-pill'>
                  Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
