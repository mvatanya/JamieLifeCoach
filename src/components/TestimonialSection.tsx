import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  date: string;
  stars: number;
};

const testimonials: TestimonialProps[] = [
  {
    quote: `Jamie is amazing... So non threatening & informative. I will truly love working with her. I look forward to exploring more ideas & sharing my experiences that give me clarity to grow. I would highly recommend her as a life coach!`,
    name: "Linda S",
    date: "April 25, 2023",
    stars: 5,
  },
  {
    quote: `I received an understanding of why I function the way I do. I learned strategies for supporting myself in my journey to experience the confidence needed to achieve my personal and professional goals.`,
    name: "Rita S.",
    date: "January 27, 2023",
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
              <div>
                <h4 className="font-semibold text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 text-lg">
                  {currentTestimonial.date}
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
