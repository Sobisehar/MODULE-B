import React from "react";
import "./App.css";
import LandingPage from "./Landing Page/Navbar";
import Part1 from "./Landing Page/Part1";
import Part2 from "./Landing Page/Part2";
import Part3 from "./Landing Page/Part3";
import Cards from "./Landing Page/Cards";
import Cards2 from "./Landing Page/Cards2";
import Form from "./Landing Page/Form";
import Footer from "./Landing Page/Footer";

const App = () => {
  return (
    <>
      <LandingPage />
      <Part1 />
      <Part2 />
      <Part3 />
      <Cards />
      <Cards2 />
      <Form />
      <Footer />
    </>
  );
};

export default App;
