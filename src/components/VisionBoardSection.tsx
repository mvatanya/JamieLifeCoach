import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const VisionBoardSection: React.FC = () => {
  const benefits = [
    "Clarify your goals and aspirations",
    "Create a powerful visual representation of your dreams",
    "Learn proven manifestation techniques",
    "Connect with like-minded individuals",
    "Take home your personalized vision board",
  ];

  return (
    <section className="visionboard py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FFA07A] transform rotate-6 opacity-20 rounded-2xl"></div>
            <img
              src="https://i.postimg.cc/JzBYngVN/Vision-Board-Workshop-1.png"
              alt="Vision Board Workshop"
              className="relative z-10 w-full h-[500px] object-contain rounded-2xl shadow-soft"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
                Vision Board Workshop
              </h2>
              <motion.div
                className="w-32 h-1 bg-[#FFB5C2] mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-2xl md:text-3xl mb-6 italic">
                Envision, Align, and Transform:
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
                Schedule a heart-centered Vision Board Workshop for friends
                designed to help you play big and live a life you most desire.
                This is more than a workshop, it is a fun and effective way to
                gain clarity, set authentic intentions, and create a visual map
                that reflects your soul’s true path. It’s more than just a
                vision board — it’s a portal to the life you’re meant to live.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle
                    size={24}
                    className="text-[#fe4955] mr-3 flex-shrink-0"
                  />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn btn-primary w-full sm:w-auto flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar size={20} className="mr-2" />
              More Information
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionBoardSection;
