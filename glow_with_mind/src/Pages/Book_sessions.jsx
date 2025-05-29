import React from "react";
import Sessionbg from "../components/Sessionbg";
import Therapist from "./Therapist";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Book_sessions = () => {
  return(
    <div>
      <Navbar />
      <div>
      <Sessionbg/>
      <Therapist/>
    
    </div>
    <Footer />
    </div>
    
  );
};

export default Book_sessions ;

