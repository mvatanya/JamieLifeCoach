import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
  stars: number;
};

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Working with this coach transformed my approach to life's challenges. The personalized strategies and ongoing support helped me achieve balance I never thought possible.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
  },
  {
    quote:
      "After struggling with career decisions for years, the 90-day coaching program gave me clarity and confidence. I now have a roadmap for success that aligns with my true values.",
    name: "Michael Thompson",
    title: "Software Engineer",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
  },
  {
    quote:
      "The coaching sessions helped me break through limiting beliefs that were holding me back for years. I'm now pursuing goals I previously thought were impossible.",
    name: "Emily Rodriguez",
    title: "Small Business Owner",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    stars: 5,
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
            Client Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Hear from people who have experienced the transformative power of
            our coaching programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-primaryBg rounded-2xl p-8 md:p-12 shadow-soft animate-fade-in">
            <div className="flex mb-6">
              {[...Array(currentTestimonial.stars)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl italic mb-8">
              "{currentTestimonial.quote}"
            </p>

            <div className="flex items-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 text-lg">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
