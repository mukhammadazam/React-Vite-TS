import { useEffect, useState } from "react";
import axios from "axios";
import "./ShopOne.scss";
import heroImg from "../../public/shopImg/shop-hero.png";
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
    <div className='shop'>
      <div className='container'>
        <div className='shopOne d-lg-flex  align-items-lg-center justify-content-lg-around  '>
          <h1 className='shopOne__title d-flex align-items-center justify-content-center text-center text-lg-start'>
            Find it. Compare it. And pay how you like.
          </h1>
          <img className="d-block p-lg-0 pt-5 shopOne__img" src={heroImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default SHopOne;
