import React, { useState } from 'react';
import { Flower, Menu, X } from 'lucide-react';

function NavLink({ href, children, active }) {
  return (
    <a 
      href={href} 
      className={`text-base font-medium ${
        active 
          ? 'text-violet-600' 
          : 'text-gray-700 hover:text-violet-600'
      } transition-colors duration-200 relative group`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-200 group-hover:w-full ${
        active ? 'w-full' : ''
      }`} />
    </a>
  );
}

function MobileNavLink({ href, children, active }) {
  return (
    <a 
      href={href} 
      className={`text-lg font-medium ${
        active 
          ? 'text-violet-600' 
          : 'text-gray-700 hover:text-violet-600'
      } transition-colors duration-200 px-4`}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 py-5 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Flower className="w-9 h-9 text-violet-600" strokeWidth={1.5} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              zibber.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink href="#" active>Home</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">Insights</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">Contact Us</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-violet-600 to-violet-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-300">
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              <MobileNavLink href="#" active>Home</MobileNavLink>
              <MobileNavLink href="#">About Us</MobileNavLink>
              <MobileNavLink href="#">Services</MobileNavLink>
              <MobileNavLink href="#">Insights</MobileNavLink>
              <MobileNavLink href="#">Blog</MobileNavLink>
              <MobileNavLink href="#">Contact Us</MobileNavLink>
              <button className="bg-gradient-to-r from-violet-600 to-violet-700 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:from-violet-700 hover:to-violet-800 transition-all duration-300 mt-2">
                Get A Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}