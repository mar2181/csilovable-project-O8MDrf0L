import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://v3b.fal.media/files/b/0a9b287f/fTYLoI0f5v9zgo8IW7zXi_36ddfb2fdbfe43a5a3ff87995a695d37.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-white tracking-wider drop-shadow-lg">
          FORGE CHAMPIONS
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-6 drop-shadow-lg">
          ON THE MAT
        </h2>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-semibold drop-shadow">
          Master Mixed Martial Arts, Brazilian Jiu-Jitsu, Muay Thai, and Combat Excellence at Mission's Premier Fighting Academy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-6 rounded-lg shadow-xl transition transform hover:scale-105"
          >
            Book Free Trial Class
            <ArrowRight className="ml-2" size={24} />
          </Button>
          <Button
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg px-8 py-6 rounded-lg"
          >
            View Programs
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-red-600 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-red-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;