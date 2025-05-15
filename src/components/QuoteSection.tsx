import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="absolute inset-0 bg-[#FFE5E5] opacity-70 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Quote size={48} className="text-[#FFB5C2] opacity-50 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-medium italic mb-6 text-gray-800">
            "The journey of a thousand miles begins with a single step. Your transformation starts now, with the courage to seek change and the wisdom to accept guidance."
          </h2>
          <p className="text-xl font-semibold text-gray-800">— Lao Tzu</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;