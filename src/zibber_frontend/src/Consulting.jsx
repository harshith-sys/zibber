import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Innovative ideas",
  "Professional assistance",
  "Financial advisory"
];

export default function Consulting() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <img 
              src="/about-200.png" 
              alt="Consulting Team" 
              className="w-full max-w-2xl"
            />
            {/* Decorative gears */}
            <div className="absolute -top-8 -right-4">
              <div className="w-12 h-12 bg-pink-500 rounded-full animate-spin-slow"></div>
            </div>
            <div className="absolute top-12 right-12">
              <div className="w-8 h-8 bg-pink-400 rounded-full animate-spin-slow"></div>
            </div>
            {/* Chat bubble */}
            <div className="absolute top-8 right-32">
              <div className="w-10 h-6 bg-blue-100 rounded-lg"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Startup & Early
              <br />
              Consulting Business
              <br />
              Package
            </h2>

            <p className="text-lg text-gray-600">
              We help you weather today's uncertainty through our best team intelligence and needs.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-violet-600" />
                  </div>
                  <span className="text-lg text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-medium hover:bg-violet-700 transition-colors duration-300 flex items-center gap-2">
              What We Do
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}