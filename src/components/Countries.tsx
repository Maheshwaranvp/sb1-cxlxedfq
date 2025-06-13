import React from 'react';
import { MapPin, TrendingUp, Users, Clock } from 'lucide-react';

const Countries = () => {
  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      visaTypes: ["Student", "Work", "Tourist", "Business"],
      processingTime: "2-6 months",
      successRate: "95%",
      popular: true,
      description: "Land of opportunities with world-class education and career prospects"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      visaTypes: ["Student", "Work", "PR", "Business"],
      processingTime: "1-4 months",
      successRate: "97%",
      popular: true,
      description: "Welcoming nation with excellent immigration programs"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      visaTypes: ["Student", "Work", "Tourist", "Business"],
      processingTime: "2-8 weeks",
      successRate: "92%",
      popular: true,
      description: "Rich heritage and prestigious educational institutions"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      visaTypes: ["Student", "Work", "Tourist", "PR"],
      processingTime: "1-3 months",
      successRate: "94%",
      popular: true,
      description: "High quality of life and excellent work opportunities"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      visaTypes: ["Student", "Work", "Business"],
      processingTime: "4-12 weeks",
      successRate: "90%",
      popular: false,
      description: "Europe's economic powerhouse with free education"
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      visaTypes: ["Student", "Work", "Tourist"],
      processingTime: "3-8 weeks",
      successRate: "93%",
      popular: false,
      description: "Beautiful landscapes and friendly communities"
    }
  ];

  const popularCountries = countries.filter(country => country.popular);
  const otherCountries = countries.filter(country => !country.popular);

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="mr-2" size={16} />
            Global Destinations
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Gateway to 50+ Countries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore visa opportunities across the globe. From study abroad to permanent residency, we've got you covered.
          </p>
        </div>

        {/* Popular Countries */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <TrendingUp className="mr-3 text-blue-600" size={28} />
            Most Popular Destinations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCountries.map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{country.flag}</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {country.successRate}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{country.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2" />
                    Processing: {country.processingTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2" />
                    Success Rate: {country.successRate}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Visa Types:</div>
                  <div className="flex flex-wrap gap-2">
                    {country.visaTypes.map((type, typeIndex) => (
                      <span
                        key={typeIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold">
                  Explore Options
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Other Countries */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Destinations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCountries.map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{country.flag}</div>
                    <h4 className="text-lg font-bold text-gray-900">{country.name}</h4>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {country.successRate}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{country.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {country.visaTypes.map((type, typeIndex) => (
                    <span
                      key={typeIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Destination?</h3>
            <p className="text-lg mb-6 opacity-90">
              We provide visa services for 50+ countries worldwide. Contact us for any destination.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              View All Countries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;