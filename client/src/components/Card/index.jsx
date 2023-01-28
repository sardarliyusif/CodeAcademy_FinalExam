import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  async function getData() {
    const response = await axios.get(`http://localhost:1313/cards/${id}`);
    const data = await response.data
    setData(data)
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <section className="container cardss">
  <div key={data._id} className="card">
    <img
      className="card-img"
      src={data.imageUrl}
      alt="card-img"
    />
    <p className="card-title">{data.title}</p>
    <p className="card-description">
      {data.description}
    </p>
  </div>
</section>;
};

export default Card;
