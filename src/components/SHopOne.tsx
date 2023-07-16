import { useEffect, useState } from "react";
import axios from "axios";

const SHopOne = () => {
  const [data, setData] = useState([]);


const options = {
  method: "GET",
  url: "https://apidojo-forever21-v1.p.rapidapi.com/categories/v2/list",
  headers: {
    "X-RapidAPI-Key": "891c1edd4dmshfdd1a29b11443b6p1d75b5jsn879f3a6573f2",
    "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
  },
};



  const getFunction = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFunction();
  }, []);
  return <div></div>;
};

export default SHopOne;
