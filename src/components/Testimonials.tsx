import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      country: "🇺🇸 USA",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "NEU Visa made my H1-B application process so smooth! Their attention to detail and constant communication gave me confidence throughout the entire journey. Highly recommended!",
      visaType: "H1-B Work Visa"
    },
    {
      name: "David Chen",
      role: "MBA Student",
      country: "🇨🇦 Canada",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "The team at NEU Visa helped me secure my Canadian study permit in record time. Their expertise in document preparation saved me from potential delays. Exceptional service!",
      visaType: "Study Permit"
    },
    {
      name: "Maria Rodriguez",
      role: "Business Owner",
      country: "🇬🇧 UK",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "I was initially overwhelmed by the UK business visa requirements, but NEU Visa's consultants guided me through every step. Professional, reliable, and results-driven!",
      visaType: "Business Visa"
    },
    {
      name: "Ahmed Hassan",
      role: "Research Scientist",
      country: "🇦🇺 Australia",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "Getting my Australian skilled migration visa seemed impossible until I found NEU Visa. Their expertise and dedication turned my dream into reality. Forever grateful!",
      visaType: "Skilled Migration"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Manager",
      country: "🇩🇪 Germany",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "The personalized approach and constant support from NEU Visa made all the difference. They understood my unique situation and crafted the perfect strategy for my German work visa.",
      visaType: "Work Visa"
    },
    {
      name: "Robert Kim",
      role: "Tech Entrepreneur",
      country: "🇳🇿 New Zealand",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5,
      text: "NEU Visa's digital platform made tracking my application so easy. The team's professionalism and quick response times exceeded my expectations. Outstanding service!",
      visaType: "Entrepreneur Visa"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="mr-2" size={16} />
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied clients have to say about their experience with NEU Visa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-200" size={24} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm mr-2">{testimonial.country}</span>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {testimonial.visaType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">Overall Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;