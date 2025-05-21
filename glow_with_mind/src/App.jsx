import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About_Us from "./Pages/About_Us";
import Resources from "./Pages/Resources";
import Book_sessions from "./Pages/Book_sessions";
import Hero from "./components/Hero";
import Cycle from "./components/Cycle";
import Testimonials from "./components/Testimonials";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import Signup from "./Pages/Signup";
import TherapistRegister from "./Pages/TherapistRegister";
// import TherapistRegister from "./Pages/TherapistRegister";
import Login from "./Pages/Login";
import Booksessionform from "./Pages/Booksessionform";
import AnxietySection from "./components/AnxietySection";
import Article from "./components/Article";
import Audiotape from "./components/Audiotape";
import Therapist1 from "./Pages/Therapist1"; 
import Therapist2 from "./Pages/Therapist2";
import Therapist3 from "./Pages/Therapist3";
import Therapist4 from "./Pages/Therapist4";
import Therapist5 from "./Pages/Therapist5";
import Therapist6 from "./Pages/Therapist6";
import Therapist from "./Pages/Therapist";
import Sidebar from "./Pages/Sidebar";
import QuizPage from "./Pages/QuizPage";
import FAQ from "./Pages/FAQ";
import ForgotPassword from "./Pages/Forgotpassword";
// import ResetPassword from "./Pages/ResetPassword";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page - Keep non-linked components here */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cycle />
              <Testimonials />
              <Quiz />
            </>
          }
      />
        
        {/* Only Link These Pages */}
        <Route path="/About_us" element={<About_Us />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/QuizPage" element={<QuizPage />} />
     <Route path="/AnxietySection" element={<AnxietySection />} />
     <Route path="/Article" element={<Article />} />
        <Route path="/Audiotape" element={<Audiotape />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Book_sessions" element={<Book_sessions />} />
        <Route path="/Booksessionform" element={<Booksessionform />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/TherapistRegister" element={<TherapistRegister />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Therapist1" element={<Therapist1 />} />
        <Route path="/Therapist2" element={<Therapist2 />} />
        <Route path="/Therapist3" element={<Therapist3 />} />
        <Route path="/Therapist4" element={<Therapist4 />} />
        <Route path="/Therapist5" element={<Therapist5 />} />
        <Route path="/Therapist6" element={<Therapist6 />} />
        <Route path="/Therapist" element={<Therapist />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        {/* <Route path="/ResetPassword" element={<ResetPassword />} /> */}
        
        
       

      

      </Routes>
      <Footer />
    </>
  );
};

export default App