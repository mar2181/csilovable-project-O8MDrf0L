import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-bold text-black text-sm">CSI</div>
          <span className="hidden sm:inline font-black text-lg tracking-wider">COMBAT SPORTS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {['About', 'Programs', 'Summer Camp', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="hover:text-red-600 transition font-semibold text-sm"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => window.location.href = 'tel:+19563785608'}
            className="hidden sm:inline-block bg-red-600 hover:bg-red-700 text-white font-bold"
          >
            Book Now
          </Button>

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-900 border-t border-red-600 p-4 space-y-3">
          {['About', 'Programs', 'Summer Camp', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="block w-full text-left hover:text-red-600 transition font-semibold text-sm py-2"
            >
              {item}
            </button>
          ))}
          <Button
            onClick={() => window.location.href = 'tel:+19563785608'}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold mt-4"
          >
            Book Now
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;