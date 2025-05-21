import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Button } from "antd";
import { motion } from 'framer-motion';


const testimonials = [
  {
    text: "For years, I struggled with anxiety and self-doubt, constantly overthinking and feeling like I wasn’t enough. It wasn’t until I started therapy and practicing mindfulness that I realized how much control I actually had over my thoughts. At first, it was hard—learning to slow down, breathe, and focus on the present felt impossible. But with time, I noticed a shift. Journaling my feelings, practicing gratitude and setting small, realistic goals helped me regain control. Now, I wake up feeling hopeful instead of anxious, and I finally understand that my worth isn’t tied to my worries.",
    name: "Emily",
    image: "/1.jpg",
  },
  {
    text: "I never thought I would escape the darkness of depression. It was a heavy, constant presence in my life. I isolated myself, convinced that no one would understand. The turning point came when I finally confided in a close friend, who encouraged me to seek professional help. Therapy was difficult at first, but it gave me the tools to challenge my negative thoughts. I also started small lifestyle changes—walking outside every day, reducing screen time before bed, and focusing on hobbies I once loved. It didn’t happen overnight, but little by little, I felt the weight lift. Now, I have hope, and I know that healing is possible.",
    name: "Sarah",
    image: "/6.jpg",
  },
  {
    text: "This platform has been life-changing for me. The mental health resources helped me find clarity and peace in my daily life.",
    name: "John",
    image: "/3.jpg",
  },
  {
    text: "Growing up, I was always the person who put others first. I said yes to everything, afraid of letting people down. Over time, the stress and exhaustion caught up with me, and I started experiencing severe anxiety. A close friend introduced me to meditation and yoga, and for the first time, I gave myself permission to slow down. I learned that self-care isn’t selfish—it’s necessary. I set boundaries, started journaling, and surrounded myself with people who uplifted me. Today, I feel more balanced and in control of my life, and I no longer feel guilty for prioritizing my well-being.",
    name: "Priya",
    image: "/4.jpg",
  },
  {
    text: "Opening up about my struggles with a therapist was the best decision I ever made. I thought I had to deal with everything alone, but I realized asking for help is a strength. My journey isn’t perfect, but I feel stronger and more resilient every day.",
    name: "Alex",
    image: "/5.jpg",
  },
];

const Testimonials = () => {
  const carouselRef = React.useRef(null);

  return (
    <section className="bg-[#F7F5F2] text-gray-800 py-16 px-6 flex flex-col items-center">
      <motion.h4
        className="text-sm uppercase tracking-widest text-gray-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Testimonials :)
      </motion.h4>

      <div className="relative w-full max-w-3xl text-center">
        <Carousel dots={false} ref={carouselRef}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Animated Image */}
              <motion.div
                className="w-full flex justify-center mb-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.image}
                  alt="testimonial"
                  className="w-60 h-60 rounded-3xl object-cover shadow-lg"
                />
              </motion.div>

              {/* Animated Testimonial Text */}
              <motion.p
                className="text-lg italic max-w-2x2 text-gray-700"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {`"${item.text}"`}
              </motion.p>
              <motion.p
                className="text-md text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                - {item.name}
              </motion.p>
            </motion.div>
          ))}
        </Carousel>

        {/* Animated Navigation Arrows */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            className="bg-transparent border border-gray-500 text-gray-600 hover:border-gray-800"
            onClick={() => carouselRef.current.prev()}
          />
        </motion.div>
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Button
            shape="circle"
            icon={<RightOutlined />}
            className="bg-transparent border border-gray-500 text-gray-600 hover:border-gray-800"
            onClick={() => carouselRef.current.next()}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
