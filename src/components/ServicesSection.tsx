import React from "react";
import { Clock, Calendar, CheckCircle } from "lucide-react";

type ServiceProps = {
  title: string;
  price: string;
  duration: string;
  description: string;
  features?: string[];
  isPopular?: boolean;
  delay: string;
};

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  price,
  duration,
  description,
  features = [],
  isPopular = false,
  delay,
}) => {
  return (
    <div
      className={`service-card animate-fade-in ${
        isPopular ? "border-[#FFB5C2] border-2" : ""
      }`}
      style={{ transitionDelay: delay }}
    >
      {isPopular && (
        <div className="bg-yellowButton text-white px-4 py-1 inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <div className="flex items-center mb-2 text-gray-600">
        <Clock size={18} className="mr-2" />
        <span>{duration}</span>
      </div>

      <div className="mb-6">
        <span className="text-2xl font-bold">{price}</span>
      </div>

      <p className="text-gray-700 mb-6 text-lg">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle
                size={18}
                className="text-[#FFB5C2] mr-2 mt-1 flex-shrink-0"
              />
              <span className="text-gray-700 text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary w-full flex items-center justify-center"
      >
        <Calendar size={18} className="mr-2" />
        Book Now
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">
            My Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            I offer personalized coaching packages designed to meet you where
            you are and guide you to where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Discovery Call"
            price="Free"
            duration="15 minutes"
            description="A short 10-15 minute call to discover if I can help you. If I do not believe I can help I will do my best to provide resources that will help you."
            features={[
              "No obligation consultation",
              "Determine if we're a good fit",
              "Get clarity on next steps",
            ]}
            delay="0s"
          />

          <ServiceCard
            title="Transformational Coaching Session"
            price="$150.00"
            duration="60 minutes"
            description="One hour of focused coaching to address a specific challenge or goal. Perfect for those who want to experience coaching without a long-term commitment."
            features={[
              "In-depth exploration of your situation",
              "Personalized strategies",
              "Actionable next steps",
              "Follow-up resources",
            ]}
            isPopular={true}
            delay="0.1s"
          />

          <ServiceCard
            title="90 Day Transformational Life Coaching Pro"
            price="$1,200.00"
            duration="12 weeks"
            description="One 60-minute coaching call weekly for 12 weeks. This comprehensive package includes a human needs assessment and a personalized success blueprint."
            features={[
              "Weekly 60-minute sessions",
              "Human needs assessment",
              "Personalized success blueprint",
              "Email support between sessions",
              "Custom resources and exercises",
            ]}
            delay="0.2s"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
