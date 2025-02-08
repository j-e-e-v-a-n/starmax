import React from 'react';
import { Phone, Video, Bell, Shield } from 'lucide-react';

const VideoDoorPhone: React.FC = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8 text-electric-sky" />,
      title: "HD Video",
      description: "Crystal clear video communication"
    },
    {
      icon: <Bell className="w-8 h-8 text-electric-sky" />,
      title: "Smart Alerts",
      description: "Instant notifications on your phone"
    },
    {
      icon: <Phone className="w-8 h-8 text-electric-sky" />,
      title: "Mobile Access",
      description: "Answer your door from anywhere"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1570044389283-6053b61a0f43"
            alt="Video Door Phone"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-depth/80 to-transparent flex items-center">
            <div className="p-8 max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                Video Door Phone Systems
              </h1>
              <p className="text-lg text-gray-200">
                Advanced video intercom solutions for secure and convenient
                visitor management.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-navy-horizon/50 p-6 backdrop-blur-sm hover:bg-electric-sky/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-electric-sky transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-navy-horizon/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              System Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Two-way audio communication
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Night vision capability
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Motion detection recording
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Smart lock integration
              </li>
            </ul>
          </div>

          <div className="bg-navy-horizon/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              Applications
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Residential homes
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Apartment buildings
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Office complexes
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Retail establishments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDoorPhone;