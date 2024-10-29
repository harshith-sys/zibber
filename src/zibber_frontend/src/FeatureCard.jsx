import React from 'react';
import { Gift, Wrench, Heart, Briefcase, PieChart, MessageCircle } from 'lucide-react';

export default function FeatureCard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                We Help<br />
                Clients Make Profit
              </h1>
              <p className="text-lg text-gray-600">
                We help you weather today's uncertainty through our best team.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Gift, title: "Share Knowledge" },
                { icon: Wrench, title: "Customer Service" },
                { icon: Heart, title: "Social Media" },
                { icon: Briefcase, title: "Financial" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all cursor-pointer"
                >
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
              alt="Business Analytics"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Share Knowledge Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340"
              alt="Trading Analysis"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Share Knowledge</h2>
            <p className="text-lg text-gray-600">
              Our expert team provides comprehensive market analysis and strategic insights to help you make informed decisions.
            </p>

            <div className="space-y-6">
              {[
                { icon: PieChart, title: "Acquisitions Finance Consulting" },
                { icon: MessageCircle, title: "Private Placement Consulting" }
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="p-4 rounded-full bg-indigo-100">
                    <service.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}