import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-secondary">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
            Schedule an appointment now
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            I'm based in Salinas, CA and offer virtual appointments.
          </p>
          <motion.a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-block text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a free discovery call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
