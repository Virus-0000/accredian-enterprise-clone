"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const categories = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
];

const faqData = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian offers customized corporate learning programs across technology, leadership, product management, AI, data science, cloud computing, and other emerging domains.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "Programs include Product Management, Gen-AI, Leadership, Data Science, Cloud, Software Engineering, and more.",
    },
  ],

  "About the Delivery": [
    {
      question: "How are the programs delivered?",
      answer:
        "Programs can be delivered online, hybrid, or onsite based on your organization's needs.",
    },
  ],

  Miscellaneous: [
    {
      question: "Can training be customized?",
      answer:
        "Yes. Every learning path is customized according to organizational goals and employee skill levels.",
    },
  ],
};
export default function FAQ({
  onEnquire,
}: {
  onEnquire: () => void;
}) {
  const [category, setCategory] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqs = faqData[category as keyof typeof faqData]; 

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl md:text-[52px] font-bold leading-tight mb-16 text-gray-900">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Left Menu */}

          <div className="space-y-6">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCategory(item);
                  setOpenIndex(0);
                }}
className={`w-full h-16 rounded-xl border text-lg font-semibold transition-all duration-300 shadow-sm

                ${
                  category === item
                    ? "bg-white text-blue-600 border-gray-200 shadow-md"
                    : "bg-white text-gray-500 border-gray-300"
                }
                `}
              >
                {item}
              </button>
            ))}

          </div>

          {/* Right FAQs */}

          <div className="lg:col-span-3">

            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center py-7 text-left"
                >
<span className="text-[20px] font-semibold text-gray-900">
                    {faq.question}
                  </span>

               {openIndex === index ? (
  <ChevronUp size={22} className="text-blue-600" />
) : (
  <ChevronDown size={22} className="text-gray-500" />
)}
                </button>

                <div
  className={`overflow-hidden transition-all duration-300 ${
    openIndex === index ? "max-h-40 pb-6" : "max-h-0"
  }`}
>
  <p className="pr-12 text-[16px] leading-7 text-gray-600">
    {faq.answer}
  </p>
</div>
              </div>
            ))}

          </div>

        </div>

        <div className="flex justify-center mt-16">
         <button
  onClick={onEnquire}
  className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-xl font-semibold shadow-lg"
>
  Enquire Now
</button>
        </div>

      </div>
    </section>
  );
}