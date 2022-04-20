import { BaseUrl } from "../Constants/constants";
import axios from "axios";
import { useState, useEffect } from "react";
const useGet = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const getData = async() => {
    await axios
      .get(BaseUrl + url)
      .then((res) => {
        setData(res.data);
        setIsloading(!isLoading);
        console.log("okie", res);
      })
      .catch((err) => {
        setIsloading(!isLoading);
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return { data, isLoading };
};
export default useGet;
