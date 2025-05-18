import React from "react";
import { motion } from "framer-motion";

const ProcessCard: React.FC<{
  number: number;
  title: string;
  description: string;
  delay: number;
  bgImage: string;
}> = ({ number, title, description, delay, bgImage }) => {
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
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10">
        <motion.div className="flex items-center justify-center mb-6 relative">
          <span className="outlined-number">{number}</span>
        </motion.div>
        <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
        <p className="text-gray-700 text-lg flex-grow leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "We begin with understanding your current situation, challenges, and what you hope to achieve through coaching.",
      bgImage: "https://i.postimg.cc/QdxxZp2Z/May-17-2025-10-31-18-PM.png",
    },
    {
      title: "Connection",
      description:
        "Building trust and rapport is essential. We create a safe space for open and honest exploration.",
      bgImage:
        "https://i.postimg.cc/Wz2xq762/Chat-GPT-Image-May-17-2025-10-46-19-PM.png",
    },
    {
      title: "Transformation",
      description:
        "Through regular sessions, we work on breaking patterns, building new skills, and creating lasting change.",
      bgImage:
        "https://i.postimg.cc/JhsrGR7T/Chat-GPT-Image-May-17-2025-10-31-14-PM.png",
    },
    {
      title: "Growth",
      description:
        "As you implement new strategies, you'll experience growth, increased confidence, and lasting transformation.",
      bgImage:
        "https://i.postimg.cc/R0JmvGGy/Chat-GPT-Image-May-17-2025-10-38-11-PM.png",
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
              bgImage={step.bgImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
