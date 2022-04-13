import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "../App.css";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/data`).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2 className="heading">Appointment Management Application</h2>
      <h2>Card</h2>
      <div className="card-div">
        {data.map((e) => {
          return (
            <Link to={`data/${e.id}`} className="route-link">
              <div>
                <li key={uuid()}>Name : {e.name}</li>
                <li key={uuid()}>Speciality : {e.speciality}</li>
                <li key={uuid()}>Cost : {e.cost}</li>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
