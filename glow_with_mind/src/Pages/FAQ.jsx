import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // if you have lucide-react installed

const FAQs = [
  {
    question: "What are the signs and symptoms of anxiety?",
    answer:"Signs and symptoms of anxiety can include racing thoughts, difficulty concentrating, sleep problems, physical tension, trembling, rapid heartbeat, dizziness, and body aches. These symptoms can vary based on the type of anxiety disorder you have. For example, people with panic disorder may experience frequent panic attacks, while those with a phobia may avoid a specific triggers, such as dogs, heights, or needles.",
  },
  {
    question: "What is agoraphobia?",
    answer:"Agoraphobia is a fear of being in open spaces or crowded situations that make it difficult to escape or receive aid. It often develops as a complication of panic attacks and panic disorder. You may fear having a panic attack at a difficult or embarrassing moment, such as during a big social gathering or traveling on a plane or train. If you have this anxiety disorder, your desire to avoid these types of situations can impair you daily functioning. You might pass up on a job opportunity that requires commuting by train, for example, or decline a social invitation for fear of having a panic attack.",
  },
  {
    question: "What medications work for anxiety?",
    answer:"Various types of medications work for anxiety, includingSelective serotonin reuptake inhibitors (SSRIs), such as Prozac and Zoloft. These are antidepressants that may also be used to treat anxiety.Benzodiazepines, such as Xanax and Valium, are fast-acting tranquilizers prescribed to treat anxiety.Beta-blockers, such as propranolol (Inderal) and atenolol (Tenormin), can help reduce the physical symptoms of anxiety.Bupropion, also known as Wellbutrin, Forfivo, or Zyban, is an antidepressant that can also treat anxiety and panic disorders.Buspirone, or BuSpar, is a mild tranquilizer that is primarily used to manage Generalized Anxiety Disorder (GAD).Hydroxyzine, an antihistamine that offers allergy relief, may also be used to reduce nervousness and tension.",
  },
  {
    question: "What’s the difference between a panic attack and anxiety attack?",
    answer:"A panic attack is a sudden and intense bout of fear. It can strike without warning and may peak within 10 to 20 minutes before subsiding. Symptoms can include physical signs of anxiety, such as chest pain, pounding heart, trembling, and dizziness. A panic attack can also involve feelings of detachment from reality or a sense of impending doom. The feeling is so discomforting that recalling a previous attack may trigger a new one. Recurring panic attacks are a sign of panic disorder. While anxiety attack isn’t listed in the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), the term may be used to describe a panic attack or a milder episode of sudden anxiousness.",
  },
  {
    question: "Can I use CBD for anxiety?",
    answer:"Some studies show that cannabidiol (CBD), the active ingredient in cannabis, may be an option for treating certain types of anxiety, such as social anxiety. It also seems to come with few adverse side effects. However, more research is needed to better understand the safety and effectiveness of the drug. Due to gaps in knowledge about CBD, it is not always recommended by experts. For example, as of 2022, the U.S. Food and Drug Administration (FDA) has only approved one CBD product and it’s a drug that treats seizures.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-8">
          Anxiety FAQs
        </h1>
        <div className="divide-y divide-gray-300">
          {FAQs.map((faq, index) => (
            <div key={index} className="py-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-green-900" />
                ) : (
                  <Plus className="h-5 w-5 text-green-900" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
