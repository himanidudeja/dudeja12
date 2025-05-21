import React from 'react';
import { Link } from "react-router-dom";

const AnxietySection = () => {
  return (
    <section className="bg-[#f4f1eb] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left side: Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="uppercase text-sm text-green-800 font-semibold mb-2">Glow with Mind </p>
        <h2 className="text-4xl font-bold text-green-800 mb-4">Anxiety</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Are worries, fears, or panic attacks making it hard to function or enjoy life? Learn about the various types of anxiety disorders and their symptoms, and what you can do to take back control and regain your peace of mind.
          Anxiety is like a smoke alarm in your brain — designed to protect you when danger strikes. It’s that flutter in your chest before a big presentation, the rush of nerves before you speak your truth, or the voice that whispers “what if?” when life feels uncertain. In small doses, it keeps us sharp, focused, and ready. But sometimes, that same alarm won’t shut off — buzzing loudly even when everything seems fine. 
        </p>
        <Link to="/FAQ">
        <button className="border border-green-800 text-green-800 hover:bg-green-100 px-5 py-2 rounded-md transition">
          View FAQs
        </button></Link>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Anxity1.jpg"
          alt="Stormy ocean representing anxiety"
          className="square-full w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
};

export default AnxietySection;
