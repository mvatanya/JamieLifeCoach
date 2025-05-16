import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
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
              <div className="absolute inset-0 bg-[#FFA07A] transform rotate-3 opacity-20"></div>
              <img
                src="https://i.postimg.cc/QMjn844d/jamie-image.jpg"
                alt="Life Coach Portrait"
                className="shadow-soft relative z-10 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-button p-6 shadow-soft z-20">
                <p className="font-medium text-white">10+ Years Experience</p>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
              About Me
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg md:text-xl">
              Hi, I'm Jamie Miller. I'm a certified life coach passionate about
              helping people create clarity, build confidence, and take
              purposeful steps toward the life they truly want.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg md:text-xl">
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
