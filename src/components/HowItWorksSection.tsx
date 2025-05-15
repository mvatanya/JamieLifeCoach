import React from 'react';
import { Heart, Compass, MessageSquare, Award } from 'lucide-react';

const ProcessCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
      style={{ transitionDelay: delay }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFB5C2] bg-opacity-20 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Compass size={28} className="text-[#FFB5C2]" />,
      title: "Discovery",
      description: "We begin with understanding your current situation, challenges, and what you hope to achieve through coaching.",
      delay: "0s"
    },
    {
      icon: <Heart size={28} className="text-[#FFB5C2]" />,
      title: "Connection",
      description: "Building trust and rapport is essential. We create a safe space for open and honest exploration.",
      delay: "0.1s"
    },
    {
      icon: <MessageSquare size={28} className="text-[#FFB5C2]" />,
      title: "Transformation",
      description: "Through regular sessions, we work on breaking patterns, building new skills, and creating lasting change.",
      delay: "0.2s"
    },
    {
      icon: <Award size={28} className="text-[#FFB5C2]" />,
      title: "Growth",
      description: "As you implement new strategies, you'll experience growth, increased confidence, and lasting transformation.",
      delay: "0.3s"
    }
  ];

  return (
    <section id="how-it-works" className="section bg-primaryBg">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">How It Works</h2>
          <p className="text-lg text-gray-700">
            My coaching process is designed to create meaningful and sustainable change. Here's what you can expect when we work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;