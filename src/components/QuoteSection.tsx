import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const QuoteSection: React.FC = () => {
  return (
    <section
      id="quote-section"
      className="py-20 relative overflow-visible bg-white"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            className="hidden md:block md:col-span-4 relative h-[600px] -mt-20 -mb-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg"
              alt="Decorative flowers"
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </motion.div>

          <motion.div
            className="md:col-span-8 md:col-start-5 bg-[#FFE5E5] p-12 rounded-2xl relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote size={48} className="text-[#FFB5C2] opacity-50 mb-6" />
            <h2 className="text-2xl md:text-3xl font-medium italic mb-6 text-gray-800">
              "The journey of a thousand miles begins with a single step. Your
              transformation starts now, with the courage to seek change and the
              wisdom to accept guidance."
            </h2>
            <p className="text-xl font-semibold text-gray-800">— Lao Tzu</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
