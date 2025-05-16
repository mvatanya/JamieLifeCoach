import React from "react";
import { motion } from "framer-motion";

const ProcessCard: React.FC<{
  number: number;
  title: string;
  description: string;
  delay: number;
}> = ({ number, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      whileHover={{
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.3 },
      }}
      className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 min-h-[320px] flex flex-col relative overflow-hidden"
    >
      <motion.div className="flex items-center justify-center mb-6 relative">
        <span className="outlined-number">{number}</span>
      </motion.div>
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <p className="text-gray-700 text-lg flex-grow leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "We begin with understanding your current situation, challenges, and what you hope to achieve through coaching.",
    },
    {
      title: "Connection",
      description:
        "Building trust and rapport is essential. We create a safe space for open and honest exploration.",
    },
    {
      title: "Transformation",
      description:
        "Through regular sessions, we work on breaking patterns, building new skills, and creating lasting change.",
    },
    {
      title: "Growth",
      description:
        "As you implement new strategies, you'll experience growth, increased confidence, and lasting transformation.",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-primaryLight">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            My coaching process is designed to create meaningful and sustainable
            change. Here's what you can expect when we work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
