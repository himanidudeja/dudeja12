import React from 'react';
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const therapistData = [
  {
    id: 1,
    name: 'Aashi Agarwal',
    qualification: 'MA Counselling Psychology',
    image:'/t5.jpg',
    expertise: [
      'Relationship Issues',
      'LGBTQIA+ Affirmative Therapy',
      'Anger Issues & Management',
      'Emotional Quotient',
      'Cognitive Behavioral Therapy',
    ],
    therapistMessage: '"When the going gets tough and to get the tough going; you talk, understand and accept and Be yourself... Stay true to you and prioritize yourself."',
    speaks: ['English', 'Hindi'],
  },
  {
    id: 2,
    name: 'Rhon',
    qualification: 'MA. Psychology, Certified PCT Practitioner, Completed CBT Training program from Beck-institute (USA)',
    image: '/t1.jpg',
    expertise: [
      'Addiction','Management',
      'Family Counselling',
      'Child and Adolescent Counselling',
      'Cognitive Behavioral Therapy',
      'Anxiety'
    ],
    therapistMessage: 'Life doesn’t make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all.',
    speaks: ['English', 'Hindi'],
  },
  {
    id: 3,
    name: 'Jhon',
    qualification: 'Msc Counselling Psychology',
    image: '/t2.jpg',
    expertise: [
      'Depression',
      'Stress Management',
      'Overthinking',
      'Cognitive Behavioral Therapy',
      'Family issues',
      'Anxiety',
      'Child and Adolescent Counselling'
    ],
    therapistMessage: "It's okay to ask support when you need it and Your feelings are valid. You have a right to feel them. Let them come as they are, as they will soon pass.",
    speaks: ['English', 'Hindi'],
  },
  {
    id: 4,
    name: 'Priya Bakshi',
    qualification: 'MA Counselling Psychology',
    image: '/t4.avif',
    expertise: [
      'Relationship Issues',
      'Anger Issues & Management',
      'Emotional Quotient',
      'Cognitive Behavioral Therapy',
    ],
    therapistMessage: 'Life dont make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all',
    speaks: ['English', 'Hindi'],
  },
  {
    id: 5,
    name: 'Parul Tiwari',
    qualification: 'MA Psychology',
    image: '/t6.webp',
    expertise: [
      'Adolescent Psychology',
      'Self care',
      'Family issues',
      'Cognitive Behavioral Therapy',
    ],
    therapistMessage: '"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."',
    speaks: ['English', 'Hindi'],
  },
  {
    id: 6,
    name: 'Harry',
    qualification: 'Msc. Applied Psychology',
    image: '/t8.jpg',
    expertise: [
      'Relationship Issues',
      'Anger Issues & Management',
      'Depression',
      'Anxiety',
      'Overthinking',
      'Self-care'
    ],
    therapistMessage: "But what is a feeling? after all, but a wave? And you cannot stop the waves but you can learn to surf",
    speaks: ['English', 'Hindi'],
  },
];

const Therapist = () => {
  return (
    <div className="p-6">
      <h1 className="text-5xl text-[#3d405b] font-bold mb-20 mt-20 text-center">
        Meet Our Councller:)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapistData.map((therapist) => (
          <div key={therapist.id} className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="rounded-lg w-full h-60 object-cover"
            />

            <h2 className="text-2xl font-bold mt-2">{therapist.name}</h2>
            <h3 className="text-green-700 mt-1">{therapist.qualification}</h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {therapist.expertise.map((item, index) => (
                <span
                  key={index}
                  className="bg-purple-200 text-black px-2 py-1 rounded-lg text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-4 text-green-800 font-semibold">Message for you:</p>
            <p className="text-gray-700 italic">{therapist.therapistMessage}</p>

            <p className="mt-4 text-green-800 font-semibold">SPEAK'S IN </p>
            <p>{therapist.speaks.join(', ')}</p>

            {/* Navigate to Book Session Form */}
            <Link to={      
              therapist.id === 1 ? '/therapist1' :
              therapist.id === 2 ? '/therapist2' :
              therapist.id === 3 ? '/therapist3' :
              therapist.id === 4 ? '/therapist4' :
              therapist.id === 5 ? '/therapist5' :
              therapist.id === 6 ? '/therapist6' :
              '/'
              }>
           <button className="bg-[#81b29a] text-white w-full py-2 rounded-lg hover:bg-[#6a8f8d]  transition
                    hover:scale-105 transition mt-4" >
             Book a Session
           </button>
            </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapist;
