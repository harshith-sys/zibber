import React from 'react';
import { Gift, Scissors, Heart, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Gift,
    title: "Share Knowledge",
    isHighlighted: true
  },
  {
    icon: Scissors,
    title: "Customer Service"
  },
  {
    icon: Heart,
    title: "Social Media"
  },
  {
    icon: Briefcase,
    title: "Financial"
  }
];

const consultingTypes = [
  {
    icon: "⏱️",
    title: "Acquisitions Finance Consulting"
  },
  {
    icon: "💬",
    title: "Private Placement Consulting"
  }
];

export default function ProfitSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
                We Help
                <br />
                Clients Make Profit
              </h2>
              <p className="text-lg text-gray-600">
                We help you weather today's uncertainty through our best team.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 ${
                    service.isHighlighted ? 'text-violet-600' : 'text-gray-800'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    service.isHighlighted ? 'bg-violet-100' : 'bg-gray-100'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{service.title}</span>
                </div>
              ))}
            </div>

            {/* Consulting Types */}
            <div className="space-y-4">
              {consultingTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-2xl">
                    {type.icon}
                  </div>
                  <span className="font-semibold text-navy-900">{type.title}</span>
                </div>
              ))}
            </div>

            <button className="bg-violet-600 text-white px-8 py-4 rounded-full font-medium hover:bg-violet-700 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Right side - Illustration */}
          <div className="relative">
            <img 
              src="/services-1.png" 
              alt="Financial Growth" 
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}