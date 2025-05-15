import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Have questions or ready to start your transformational journey?
            Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-fade-in">
              <div className="flex items-center mb-4">
                <Phone size={24} className="text-[#fe4955] mr-3" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-lg text-gray-700 ml-9">(555) 123-4567</p>
            </div>

            <div
              className="animate-fade-in"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="flex items-center mb-4">
                <Mail size={24} className="text-[#fe4955] mr-3" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-lg text-gray-700 ml-9">
                hello@serenelifecoaching.com
              </p>
            </div>

            <div
              className="animate-fade-in"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-[#fe4955] mr-3" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <div className="text-lg text-gray-700 ml-9">
                <p>San Francisco, CA</p>
                <p>Virtual sessions available worldwide</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-in">
            <div className="bg-secondaryLight p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

              {submitSuccess && (
                <div className="bg-green-50 text-green-800 p-4 mb-6 rounded-lg text-lg">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 text-lg"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#fe4955] focus:border-transparent text-lg transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 text-lg"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#fe4955] focus:border-transparent text-lg transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 mb-2 text-lg"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#fe4955] focus:border-transparent text-lg transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-lg"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#fe4955] focus:border-transparent text-lg transition-all duration-200"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary flex items-center justify-center text-lg w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
