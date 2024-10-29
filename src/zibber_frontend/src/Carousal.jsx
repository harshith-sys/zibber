import React from 'react';

export default function Carousal() {
  return (
    <main className="min-h-screen bg-[#6C31FF] relative overflow-hidden">
      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <span className="text-xl font-medium">Testimonials</span>
            
            <h2 className="text-6xl font-bold leading-tight">
              Featured Client<br />
              Success Story
            </h2>
            
            <p className="text-xl leading-relaxed opacity-90">
              He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-7xl font-serif">"</span>
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-white/80">Founder and CEO</p>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex gap-2 pt-8">
              <button className="w-3 h-3 rounded-full bg-white"></button>
              <button className="w-3 h-3 rounded-full bg-white/30"></button>
              <button className="w-3 h-3 rounded-full bg-white/30"></button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            {/* Purple blob shape behind the image */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              <div className="absolute inset-0 bg-[#7B45FF] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform rotate-45"></div>
            </div>
            
            {/* Image container with border radius */}
            <div className="relative z-10 overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1974"
                alt="Team of professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}