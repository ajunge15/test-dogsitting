import { useState } from "react";
import * as React from "react";
import "./../../styles.css";

export default function Services({ prices }) {
  return (
    <div className="accordian">
      {prices?.map((e, i) => (
        <AccordianItem title={e.title} text={e.text} num={i} key={e.title} />
      ))}
    </div>
  );
}

function AccordianItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <div className={`item ${isOpen ? "open" : ""} `} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? `-` : `+`}</p>

        {isOpen && <div className="content-box">{text}</div>}
      </div>
    </div>
  );
}
