import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function Accordian() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "Can you help my business grow?",
      answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
    },
    {
      question: "What are your best interest rates?",
      answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
    },
    {
      question: "How do you calculate cost of services?",
      answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
    },
    {
      question: "How do you calculate cost of services?",
      answer: "He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky."
    }
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-[#1E0E4E] text-5xl font-bold leading-tight">
            Do you have<br />
            Any question
          </h1>
          <p className="text-gray-600 text-lg">
            We help you weather today's uncertainty through our best team.
          </p>
          <button className="inline-flex px-6 py-3 text-[#6C31FF] border border-[#6C31FF] rounded-full hover:bg-[#6C31FF]/5 transition-colors">
            All Question
          </button>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-[#1E0E4E] text-lg font-medium">
                  {faq.question}
                </span>
                {openQuestion === index ? (
                  <Minus className="w-5 h-5 text-[#6C31FF]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#6C31FF]" />
                )}
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}