import React from "react";
import Audiotape from "../components/Audiotape";
import Testimonials from "../components/Testimonials";
import AnxietySection from "../components/AnxietySection";
import Article from "../components/Article";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Resources = () => {
    return (
    <div>
      <Navbar/>
      <div>
        <AnxietySection/>
        <Article/>
      </div>
      <Footer />
    </div>

    )
  };
  
  export default Resources;