import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch , useSelector } from 'react-redux'
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { getUsers } from "../../redux/cards/cardsSlice";
import { Link } from "react-router-dom";

const Cards = () => {
  const users = useSelector((state) => state.users.users)
  const dispatch = useDispatch()
  async function getData() {
    const response = await axios.get("http://localhost:1313/cards");
    const data = await response.data
    dispatch(getUsers(data))
  }
  useEffect(() => {
    getData();
  }, [users]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1313/cards/${id}`)
  }
  return (
    <section>
      <Link className="container see" to='/cards'>See WISHLIST</Link>
      <div className="container cardss">
      {users.map(e => <div key={e._id} className="card">
        <img
          className="card-img"
          src={e.imageUrl}
          alt="card-img"
        />
        <p className="card-title">{e.title}</p>
        <p className="card-description">
          {e.description}
        </p>
        <Link to={`/cards/${e._id}`}>
          LEARN MORE <BsArrowRight />
        </Link>
        <button onClick={() => handleDelete(e._id)}>
          Delete
        </button>
      </div>)}
    </div>
    </section>
    
  );
};

export default Cards;
