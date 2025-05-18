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
    <section className="py-24">
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
            <motion.div
              className="absolute -bottom-4 -right-4 bg-[#fe4955] p-6 shadow-soft z-20 rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-medium text-white">Next Workshop: TBA</p>
            </motion.div>
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
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
                Join our transformative Vision Board Workshop where you'll learn
                to visualize and manifest your dreams. This hands-on session
                combines creative expression with strategic goal-setting
                techniques.
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

            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-semibold">$25</p>
                  <p className="text-gray-600">Per Person</p>
                </div>
                <p className="text-[#fe4955] font-medium">
                  Limited Spots Available
                </p>
              </div>
              <motion.a
                href="#contact"
                className="btn btn-primary w-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={20} className="mr-2" />
                Reserve Your Spot
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionBoardSection;
