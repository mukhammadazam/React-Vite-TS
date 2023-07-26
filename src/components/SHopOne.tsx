import { useEffect, useState } from "react";
import axios from "axios";

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
  return <div></div>;
};

export default SHopOne;
