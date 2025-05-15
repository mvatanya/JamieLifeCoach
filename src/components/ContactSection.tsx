import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{background: 'linear-gradient(135deg, #E8EAF6 0%, #DFF5E1 100%)'}}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Have questions or ready to start your transformational journey? Reach out today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-soft flex flex-col items-center text-center animate-fade-in">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
              <Phone size={20} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">(555) 123-4567</p>
          </div>
          
          <div className="bg-white p-8 shadow-soft flex flex-col items-center text-center animate-fade-in" style={{transitionDelay: "0.1s"}}>
            <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
              <Mail size={20} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">hello@serenelifecoaching.com</p>
          </div>
          
          <div className="bg-white p-8 shadow-soft flex flex-col items-center text-center animate-fade-in" style={{transitionDelay: "0.2s"}}>
            <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
              <MapPin size={20} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700">San Francisco, CA</p>
            <p className="text-gray-700">Virtual sessions available worldwide</p>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 shadow-soft mt-12 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          
          {submitSuccess ? (
            <div className="bg-green-100 text-green-800 p-4 mb-6">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent1"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;