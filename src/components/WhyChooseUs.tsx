import React from 'react';
import { Award, Shield, Clock, Users, Star, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Over a decade of expertise in immigration and visa consulting with thousands of successful cases.",
      stat: "15+ Years"
    },
    {
      icon: Shield,
      title: "98% Success Rate",
      description: "Industry-leading success rate backed by thorough preparation and expert guidance.",
      stat: "98% Success"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Streamlined processes and priority handling to minimize waiting times and delays.",
      stat: "2x Faster"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified immigration consultants and lawyers with specialized knowledge in various visa types.",
      stat: "50+ Experts"
    },
    {
      icon: Star,
      title: "24/7 Support",
      description: "Round-the-clock assistance for urgent queries and emergency consultation needs.",
      stat: "24/7 Available"
    },
    {
      icon: Zap,
      title: "Digital First",
      description: "Modern technology platform for seamless application tracking and document management.",
      stat: "100% Digital"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Why Choose NEU Visa
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Success is Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine years of experience with cutting-edge technology to deliver exceptional visa consultation services that get results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <feature.icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="text-2xl font-bold text-blue-600">{feature.stat}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Trusted by Thousands Worldwide</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Successful Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h3>
            <p className="text-lg text-gray-600">From consultation to approval, we guide you every step of the way</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "Initial assessment and eligibility check" },
              { step: "02", title: "Document Prep", desc: "Comprehensive document review and preparation" },
              { step: "03", title: "Application Submit", desc: "Professional application submission and tracking" },
              { step: "04", title: "Success!", desc: "Visa approval and post-approval support" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;