import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Access Control Systems',
    'Automatic Gates',
    'Time & Attendance System',
    'IP CCTV Systems',
    'Home Automation',
    'GPS Tracking Systems',
    'Intercom',
    'Video Door Phone'
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto text-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for all your security and automation needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-midnight-depth/50 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-sky"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-midnight-depth/50 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-sky"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-midnight-depth/50 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-sky"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2 bg-midnight-depth/50 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-sky"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-midnight-depth/50 border border-gray-600 rounded-lg focus:outline-none focus:border-electric-sky"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-electric-sky hover:bg-azure-wave text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-electric-sky" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-electric-sky" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@starmaxsystems.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-electric-sky" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">Kochi, Kerala, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-electric-sky" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Service Areas</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-electric-sky rounded-full" />
                  <span>Haripad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-electric-sky rounded-full" />
                  <span>Chengannur</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-electric-sky rounded-full" />
                  <span>Calicut</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;