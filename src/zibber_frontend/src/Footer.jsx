import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#1a1a1a]">zibber.</h2>
          <p className="text-gray-500 leading-relaxed">
            Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1586335963805-7b603f62a048?auto=format&fit=crop&w=300&h=200&q=80"
            alt="Working Professional"
            className="rounded-lg w-64"
          />
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#1a1a1a]">Company</h3>
          <ul className="space-y-3">
            {['About Us', 'Testimonials', 'Consulting', 'Partners', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 hover:text-[#444] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#1a1a1a]">Resources</h3>
          <ul className="space-y-3">
            {['Customers', 'Pricing', 'News', 'Learning Center', 'Help desk', 'Support'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 hover:text-[#444] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#1a1a1a]">Information</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:support@zibber.com" className="text-[#4945FF] hover:text-[#4945FF]/80 transition-colors">
                support@zibber.com
              </a>
            </li>
            <li>
              <a href="tel:+642394396432" className="text-[#4945FF] hover:text-[#4945FF]/80 transition-colors">
                (+642) 394 396 432
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}