import React from "react";
import Hero1 from "../components/Hero1";
import Ourstory from "../components/Ourstory";
import Ourteam from "../components/Ourteam";
import Ourmission from "../components/Ourmission";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About_Us = () => {
  return (

    <div>
      <Navbar />
    <div>
      <Hero1/>
      <Ourstory/>
      <Ourteam/>
      <Ourmission/>
    
    </div>
      <Footer/>
    </div>
  );
};

export default About_Us;

