import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://covidtracking.com/api/us")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data)

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;
