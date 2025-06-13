import React from 'react';
import { FileText, Users, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Preparation",
      description: "Complete document review, preparation, and verification services to ensure your application is perfect.",
      features: ["Document checklist", "Form filling assistance", "Document verification", "Translation services"],
      popular: false
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "One-on-one sessions with certified immigration experts to plan your visa strategy.",
      features: ["Personalized consultation", "Case assessment", "Strategy planning", "Follow-up support"],
      popular: true
    },
    {
      icon: Clock,
      title: "Application Tracking",
      description: "Real-time updates on your application status with dedicated case managers.",
      features: ["Real-time tracking", "Status notifications", "Case manager support", "Timeline updates"],
      popular: false
    },
    {
      icon: Shield,
      title: "Success Guarantee",
      description: "We're so confident in our service, we offer a money-back guarantee on approved cases.",
      features: ["Money-back guarantee", "Success assurance", "Risk-free service", "Quality commitment"],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Visa Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final approval, we provide end-to-end visa services tailored to your unique needs and circumstances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                service.popular
                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200'
                  : 'bg-white border border-gray-200 hover:border-blue-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`inline-flex p-3 rounded-xl mb-6 ${
                service.popular
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-600'
              }`}>
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center group ${
                service.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
              }`}>
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? We offer tailored packages for businesses and educational institutions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold text-lg">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;