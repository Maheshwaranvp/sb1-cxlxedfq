import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">NEU</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">NEU Visa</h3>
                <p className="text-gray-400 text-sm">Your Gateway to Global Opportunities</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Leading visa consultation service with 15+ years of experience helping clients achieve their international dreams.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Work Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tourist Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Visa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Immigration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Document Services</a></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">United States</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Germany</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Zealand</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-400" size={16} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-400" size={16} />
                <span className="text-gray-400">info@neuvisa.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 text-blue-400 mt-1" size={16} />
                <span className="text-gray-400">123 Business Center<br />New York, NY 10001</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Office Hours</h5>
              <p className="text-gray-400 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                Saturday: 10:00 AM - 4:00 PM EST<br />
                Sunday: Emergency Only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get the latest visa updates and immigration news delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NEU Visa. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy
            </div>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;