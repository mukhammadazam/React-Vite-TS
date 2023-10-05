import axios from "axios";
import { useState, useEffect } from "react";
import React, { useParams, Link } from "react-router-dom";
const UseParams = () => {
  const [data, setData] = useState([]);
type DataItem = {
  imgUrl1: string;
  title: string;
  text: string;
};
  const getFun = async () => {
    try {
      const res = await axios("http://localhost:3000/search");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFun();
  }, []);
  return <div>
  </div>;
};

export default UseParams;
