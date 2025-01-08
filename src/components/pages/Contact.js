import React, { useState } from "react";

import "./../Contact.css"; // Import CSS file
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [dates, setDates] = useState("");
  const [phone, setPhone] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to an API
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Name:", name);
  };

  return (
    <>
      <h2 style={{ width: "100%", textAlign: "center", padding: "15px 280px" }}>
        I can't wait to meet your furry friend! Please add dates needed and I
        will contact you to schedule a consultation with you and your pet(s).
      </h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          Dates: <br></br>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />{" "}
          to
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </>
  );
}
