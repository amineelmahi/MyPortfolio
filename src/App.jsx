import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import { useState } from "react";
import Main from "./components/Main/Main";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="Container">
      <Header />
      <div className="divider"/>
      <Hero />
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Footer/>
    </div>
  );
}

export default App;
