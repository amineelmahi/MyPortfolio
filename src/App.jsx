import Hero from "./components/2-Hero/Hero";
import Header from "./components/1-Header/Header";
import { useState } from "react";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";

function App() {
  return (
    <div className="Container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  );
}

export default App;
