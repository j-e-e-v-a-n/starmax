import React from 'react';
import { Camera, Eye, Video, Shield } from 'lucide-react';

const CCTV: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-electric-sky" />,
      title: "HD Resolution",
      description: "Crystal clear video quality for detailed monitoring"
    },
    {
      icon: <Eye className="w-8 h-8 text-electric-sky" />,
      title: "Night Vision",
      description: "24/7 surveillance with infrared technology"
    },
    {
      icon: <Video className="w-8 h-8 text-electric-sky" />,
      title: "Remote Viewing",
      description: "Access your cameras from anywhere"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9"
            alt="CCTV Systems"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-depth/80 to-transparent flex items-center">
            <div className="p-8 max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                IP CCTV Systems
              </h1>
              <p className="text-lg text-gray-200">
                Advanced surveillance solutions with cutting-edge IP cameras for
                comprehensive security monitoring and protection.
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
                Motion detection with instant alerts
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Cloud storage for footage backup
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Mobile app integration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Advanced analytics capabilities
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
                Commercial buildings
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Retail stores
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Industrial facilities
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Residential properties
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTV;