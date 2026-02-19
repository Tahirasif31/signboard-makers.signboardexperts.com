"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How do I choose the right signboard for my business?",
    answer:
      "The right signage depends on several factors: your location (indoor/outdoor), your brand identity (modern, classic, luxury), your budget, and your visibility goals. A consultation with our experts can help you navigate these choices. For instance, a restaurant might benefit from an illuminated LED sign board for night visibility, while a law firm might prefer an elegant, halo-lit 3D metal sign.",
  },
  {
    question: "How long does it take to get a custom signboard made?",
    answer:
      "Timelines vary based on complexity and size. A simple acrylic nameplate can be ready in a few days, while a complex, large-scale illuminated pylon sign might take a couple of weeks. During our initial consultation, we provide a clear and realistic timeline for your specific project.",
  },
  {
    question: "Do you handle Dubai Municipality and DED approvals?",
    answer:
      "Yes, absolutely. Navigating the regulatory landscape in Dubai can be complex. As part of our full-service offering, we assist you in obtaining all necessary permits and approvals from authorities like the Dubai Economic Department (DED) and Dubai Municipality, ensuring your signage is 100% compliant.",
  },
  {
    question:
      "What is the best material for outdoor signage in Dubai’s climate?",
    answer:
      "Materials that resist heat, UV radiation, and humidity are essential. We highly recommend Aluminum Composite Panels (ACP), stainless steel, and high-quality acrylics. These materials are chosen for their durability and ability to maintain their appearance despite the harsh sun and occasional dust storms.",
  },
  {
    question: "Do you offer a warranty on your signage?",
    answer:
      "Yes, we stand behind the quality of our work. We offer a comprehensive warranty on both the materials used and the installation workmanship. Specific warranty terms are discussed and provided in your project proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions About Signage in Dubai
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden border border-gray-200"
            >
              <button
                className="w-full px-6 py-6 text-left font-semibold text-gray-800 hover:bg-blue-50 transition duration-300 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-blue-600 text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-6 bg-blue-50 border-t border-blue-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
