import React from 'react';
import { Navigation, Map, Activity, Shield } from 'lucide-react';

const GPSTracking: React.FC = () => {
  const features = [
    {
      icon: <Navigation className="w-8 h-8 text-electric-sky" />,
      title: "Real-time Tracking",
      description: "Live location updates and route history"
    },
    {
      icon: <Map className="w-8 h-8 text-electric-sky" />,
      title: "Geofencing",
      description: "Set virtual boundaries with alerts"
    },
    {
      icon: <Activity className="w-8 h-8 text-electric-sky" />,
      title: "Analytics",
      description: "Detailed reports and insights"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <img
            src="https://images.unsplash.com/photo-1626178793926-22b28830aa30"
            alt="GPS Tracking"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-depth/80 to-transparent flex items-center">
            <div className="p-8 max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                GPS Tracking Systems
              </h1>
              <p className="text-lg text-gray-200">
                Advanced vehicle and asset tracking solutions for real-time
                monitoring and fleet management.
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
              Key Features
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Live vehicle location tracking
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Route optimization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Fuel monitoring
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Driver behavior analysis
              </li>
            </ul>
          </div>

          <div className="bg-navy-horizon/50 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              Benefits
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Improved fleet efficiency
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Reduced fuel costs
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Enhanced security
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                Better customer service
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPSTracking;