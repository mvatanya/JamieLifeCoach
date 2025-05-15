import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #f4ece8 0%, #dee9e9 100%)`,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFB5C2] opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#FFE5E5] opacity-20 blur-3xl"></div>
      
      <div className="container py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Transform Your Life With Personalized Coaching
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10" style={{transitionDelay: "0.1s"}}>
              Discover your true potential and create lasting positive change with guided support tailored to your unique journey
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4" style={{transitionDelay: "0.2s"}}>
              <a 
                href="#services" 
                className="btn btn-primary w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline w-full sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in order-first md:order-last" style={{transitionDelay: "0.3s"}}>
            <div className="absolute inset-0 bg-[#FFB5C2] transform rotate-3 opacity-20"></div>
            <img 
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
              alt="Colorful Flowers" 
              className="w-full h-[600px] object-cover shadow-soft relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;