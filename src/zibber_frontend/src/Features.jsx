import React from 'react';
import { Monitor, Users, UserCircle, Brain } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Share Knowledge",
    subtitle: "Data Tracking",
  },
  {
    icon: Users,
    title: "Meet New Friends",
    subtitle: "User Experience",
  },
  {
    icon: UserCircle,
    title: "Customer Service",
    subtitle: "App Design",
  },
  {
    icon: Brain,
    title: "Strategic advice",
    subtitle: "Press Releases",
  }
];

function FeatureCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="w-12 h-12 mb-6 relative">
        <div className="absolute inset-0 bg-violet-100 rounded-lg rotate-3"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-6 h-6 text-violet-600" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}