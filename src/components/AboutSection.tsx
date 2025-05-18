import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="flex items-center bg-gradient-to-br from-white to-[#fff5f5]"
    >
      <div className="container py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.02,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute inset-0 bg-[#FFA07A] transform rotate-6 opacity-20 rounded-2xl"></div>
              <img
                src="https://i.postimg.cc/QMjn844d/jamie-image.jpg"
                alt="Life Coach Portrait"
                className="shadow-soft relative z-10 w-full h-auto object-cover rounded-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-button p-6 shadow-soft z-20 rounded-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-medium text-white">10+ Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in space-y-8">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase relative z-10">
                About Me
              </h2>
            </div>
            <motion.div
              className="w-32 h-1 bg-[#FFB5C2]"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 0.8 }}
            />
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              Hi, I'm Jamie Miller. I'm a certified life coach passionate about
              Zlping people create clarity, build confidence, and take
              purposeful steps toward the life they truly want.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
              I specialize in guiding individuals through personal and
              professional transitions, helping them move from feeling stuck to
              feeling empowered. Whether you're navigating change or chasing big
              goals, I'm here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
