import "./styles.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";

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

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home prices={prices} />} />
        <Route path="/components/pages/AboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}
