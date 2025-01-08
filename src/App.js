import "./styles.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
// import Carousel from "./components/pages/Carousel";
import slides from "./data/carouselData.json";
// import { blue } from "@mui/material/colors";

const prices = [
  {
    title: "What is the base overnight fee?",
    text: "$50 base fee",
  },
  {
    title: "How much does each dog/cat cost on top of the base fee per night?",
    text: "$10 for a dog and $5 for a cat",
  },
  {
    title:
      "How much does any other small animal cost (think hedgehog or hamster) on top of the base fee per night?",
    text: "$5 for each ",
  },
  {
    title: "Does the dogsitter stay over night or relocate the pet?",
    text: "I will always come to you. I do not relocate your pet. I stay where your pet is comfortable and that is most likely your home!",
  },
  {
    title: "Do you walk my dog while I am gone?",
    text: "Yes I walk your dog(s) on a regular basis.",
  },
  {
    title:
      "Should I give you my preferred pet hospital while I am away in case of emergency?",
    text: "Yes, if you have a preferred hospital please let me know before hand.",
  },
  {
    title: "Will you meet my pet before my vacation?",
    text: "Yes, please go to my Contact page and we will work out a day and time.",
  },
  {
    title: "Is it a problem if my pet takes medication?",
    text: "No problem at all, let me know the details during the consultation session",
  },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/components/pages/AboutMe"
            element={<AboutMe slides={slides} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services prices={prices} />} />
        </Routes>
      </Router>
      <createTheme darkTheme={darkTheme} />
      {/* <Carousel data={slides} /> */}
    </div>
  );
}
