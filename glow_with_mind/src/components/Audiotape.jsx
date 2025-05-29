import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Audiotape = () => {
  const videoData = [
    {
      topic: 'Meditation Guide',
      link: 'https://www.youtube.com/embed/MIr3RsUWrdo',
    },
    {
      topic: '15-Minute Guided Meditation to Release Suppressed Emotions',
      link: '	https://www.youtube.com/embed/149tYQEhqvY',
    },
    {
      topic: 'Sleep Well Tonight: Guided Meditation for Anxiety',
      link: 'https://www.youtube.com/embed/p7PvKpGOQgI',
    },
    {
      topic: 'Self-Care Routine Ideas',
      link: 'https://www.youtube.com/embed/ZToicYcHIOU',
    },
    {
      topic: 'Morning Relaxation',
      link: 'https://www.youtube.com/embed/dEzbdLn2bJc',
    },
    {
      topic: 'Positive Affirmations',
      link: 'https://www.youtube.com/embed/1ZYbU82GVz4',
    },
    {
      topic: 'Sleep Meditation',
      link: 'https://www.youtube.com/embed/1vx8iUvfyCY',
    },
    {
      topic: 'Mindful Yoga',
      link: 'https://www.youtube.com/embed/v7AYKMP6rOE',
    },
    {
      topic: 'Relaxing Nature Sounds',
      link: 'https://www.youtube.com/embed/lE6RYpe9IT0',
    },
    {
      topic: 'Guided Meditation for Deep Relaxation and Stress Relief',
      link: 'https://www.youtube.com/embed/inpok4MKVLM',
    },
    {
      topic: '10-Minute Morning Meditation for Positive Energy',
      link: 'https://www.youtube.com/embed/8v45WSuAeYI',
    },
    {
      topic: 'Feel Safe & Secure: Guided Meditation with Cue Words',
      link: 'https://www.youtube.com/embed/jSAcyrUQnCU',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl bg-[#F7F5F2] mx-auto p-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#4a766e] mb-10 ">
        Relaxing Audio & Video Resources
      </h2>

      {/* Video Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white shadow-lg rounded-lg p-4 hover:scale-105 duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">
              {video.topic}
            </h3>

            <div className="rounded overflow-hidden">
              <iframe
                src={video.link}
                title={video.topic}
                frameBorder="0"
                allow=" autoplay "
                allowFullScreen
                className="w-full h-48 rounded"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Audiotape;
