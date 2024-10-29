import React from 'react';

export default function Hero() {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-4">
              <div className="w-8 h-8 bg-yellow-300 rounded-full animate-bounce"></div>
            </div>
            
            <div className="space-y-6 max-w-xl">
              <div className="inline-block px-4 py-2 bg-violet-100 text-violet-600 rounded-full">
                Welcome To Zibber.
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight">
                Get more
                <br />
                Impact Fasted
              </h1>
              
              <p className="text-lg text-gray-600">
                Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up the duff excuse my french fanny around.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
                alt="Team collaboration" 
                className="w-full h-72 object-cover rounded-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                alt="Office work" 
                className="w-full h-72 object-cover rounded-full mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
                alt="Business meeting" 
                className="w-full h-72 object-cover rounded-full -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                alt="Team discussion" 
                className="w-full h-72 object-cover rounded-full"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}