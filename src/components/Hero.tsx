import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build, Grow & Protect Your Wealth with Vyne Global
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Unlocking Global Prosperity with Visionary Leadership & Strategic Investments
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary hover:bg-secondary-light text-primary font-semibold px-8 py-3 rounded-md flex items-center gap-2 transition-all">
                Get Started
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};