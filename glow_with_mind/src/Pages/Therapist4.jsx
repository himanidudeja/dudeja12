import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Therapist4 = () => {
  const [mode, setMode] = useState("");
  const [type, setType] = useState("");
  const [sessions, setSessions] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mode || !type || !sessions || !timeSlot) {
      alert("Please fill all the fields");
    } else {
      console.log("Form Data", { mode, type, sessions, timeSlot });
      // Navigate to booking form page
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Book an Appointment
      </h1>

      <div className="bg-white shadow-md p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold text-green-700 mb-1">Priya Bakshi</h2>
        <p className="text-sm text-gray-600 mb-2">
        MA Counselling Psychology| 5 year experience
        </p>
        <p className="text-sm text-gray-600">
          Priya Bakshi is a mental health advocate and counsellor experienced in supporting individuals dealing with anxiety, stress, depression,relationship issues and Emotional Quotient.
        </p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-xl">
        <form onSubmit={handleSubmit}>
          {/* Session Mode */}
          <div className="mb-4">
            <label className="font-semibold">Session Mode *</label>
            <div className="flex gap-4 mt-2">
              <input type="radio" name="mode" value="Video" onChange={(e) => setMode(e.target.value)} /> Video
              <input type="radio" name="mode" value="Audio" onChange={(e) => setMode(e.target.value)} /> Audio
            </div>
          </div>

          {/* Session Type */}
          <div className="mb-4">
            <label className="font-semibold">Session Type *</label>
            <select className="w-full p-2 border rounded" onChange={(e) => setType(e.target.value)}>
              <option value="">Select Type</option>
              <option>Individual</option>
              <option>Couple</option>
            </select>
          </div>

          {/* No. of Sessions */}
          <div className="mb-4">
            <label className="font-semibold">No. of Sessions *</label>
            <select className="w-full p-2 border rounded" onChange={(e) => setSessions(e.target.value)}>
              <option value="">Select No. of Sessions</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* Time Slots */}
          <div className="mb-4">
            <label className="font-semibold">Select Time Slot *</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["01:00 PM", "03:30 PM", "05:00 PM"].map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`border px-3 py-1 rounded ${timeSlot === slot ? "bg-green-200" : ""}`}
                  onClick={() => setTimeSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
         <Link to ="/Therapist">
                    <button type="button" className="bg-gray-300 px-4 py-2 rounded">
                      Back
                    </button>
                    </Link>

            <Link to="/Booksessionform">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div> 
    <Footer/> 
    </div>
    
  );
};

export default Therapist4;
