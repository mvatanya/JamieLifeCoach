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
      title: "Discovery & Clarity",
      description:
        "Our work begins with a discovery session. We'll explore where you currently are in life and where you want to go.  This helps create a foundation for our coaching relationship and sets the tone for meaningful progress.",
      bgImage: "https://i.postimg.cc/QdxxZp2Z/May-17-2025-10-31-18-PM.png",
    },
    {
      title: "Goal Setting & Visioning",
      description:
        "Together, we define clear, aligned goals—both short-term and long-term. Whether you're navigating a career transition, building confidence, seeking work-life balance, or wanting more fulfillment, we create a vision that feels authentic and attainable.",
      bgImage:
        "https://i.postimg.cc/Wz2xq762/Chat-GPT-Image-May-17-2025-10-46-19-PM.png",
    },
    {
      title: "Strategy & Action Planning",
      description:
        "With your goals in place, we develop a strategic blueprint that is unique to you. I support you in identifying next steps, breaking down obstacles, and building habits that support your growth. This is where insight meets practical strategy.",
      bgImage:
        "https://i.postimg.cc/JhsrGR7T/Chat-GPT-Image-May-17-2025-10-31-14-PM.png",
    },
    {
      title: "Accountability & Support",
      description:
        "I serve as your thought partner and accountability ally. Our regular sessions create a space for honest reflection, celebration of wins, and troubleshooting of setbacks. I will ask clarifying questions, offer reframes, and help you stay connected to your purpose.",
      bgImage:
        "https://i.postimg.cc/R0JmvGGy/Chat-GPT-Image-May-17-2025-10-38-11-PM.png",
    },
    {
      title: "Integration & Growth",
      description:
        "As you begin to shift and grow, the truth is you may start to get uncomfortable.  Because what we do not know causes us discomfort.  I will provide you with email support for those uncomfortable moments and will be by your side while you step into your power. ",
      bgImage:
        "https://i.postimg.cc/qR57mSzD/Chat-GPT-Image-May-18-2025-11-49-04-AM.png",
    },
  ];

  const firstRowSteps = steps.slice(0, 3);
  const secondRowSteps = steps.slice(3);

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
            As a certified strategic life coach, my process is centered around
            creating a supportive, empowering partnership that helps you move
            from a place of confusion to a place of clarity and empowerment. I
            work with clients through a structured yet flexible process that
            allows for both the inner and outer work that it takes to move into
            a life you love and most desire. Each client is unique and depending
            on their needs I will use different tools and assessments.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstRowSteps.map((step, index) => (
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

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {secondRowSteps.map((step, index) => (
              <ProcessCard
                key={index + 3}
                number={index + 4}
                title={step.title}
                description={step.description}
                delay={index + 3}
                bgImage={step.bgImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
