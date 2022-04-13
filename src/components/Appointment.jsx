import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./appoint.css";

export const Appointment = () => {
  const { doctorid } = useParams();
  const [booking, setBooking] = useState("");
  const [avail, setAvail] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/data/${doctorid}`).then((res) => {
      setBooking(res.data);
      setAvail(res.data.availibility);
    });
  }, []);

  // const handleClick = (e) => {
  //   console.log(e);
  //   if (Object.values(e) == "Not book") {
  //     console.log(e);
  //   }
  // };

  console.log(booking);
  console.log(avail);
  return (
    <div>
      <h2>Book your Appointment</h2>
      <div>
        <p>Doctor Name : {booking.name}</p>
        <p>Specialist : {booking.speciality}</p>
        <p>Cost : {booking.cost}</p>
      </div>
      <div className="book-div">
        {avail.map((e) => {
          return (
            <div className="time-div" onClick={() => {}}>
              <span>{Object.keys(e)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
