import { useState } from "react";

const prices = [
  {
    title: "How much do overnights cost?",
    text: "$40 base fee",
  },
  {
    title: "How much does each dog/cat cost on top of the base fee per night?",
    text: "$10 for a dog and $5 for a cat",
  },
];

export default function Home({ prices }) {
  return (
    <div className="accordian">
      {prices.map((e, i) => (
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
    <div className={`item ${isOpen ? "open" : ""} `} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
