import React, { useEffect, useRef } from 'react';
import { Lock, Clock, Camera, Home as HomeIcon, Radio, Navigation, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const servicesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && servicesRef.current[hash]) {
      servicesRef.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Changed to 'center'
    }
  }, [location]);

  const services = [
    {
      id: 'access-control',
      icon: <Lock className="w-12 h-12 text-electric-sky" />,
      title: 'Access Control Systems',
      description: 'Advanced authentication systems for secure entry management.',
      features: ['Biometric Access', 'RFID Cards', 'Mobile Access'],
    },
    {
      id: 'time-attendance',
      icon: <Clock className="w-12 h-12 text-electric-sky" />,
      title: 'Time & Attendance',
      description: 'Automated time tracking solutions for workforce management.',
      features: ['Biometric Authentication', 'Real-time Tracking', 'Report Generation'],
    },
    {
      id: 'cctv',
      icon: <Camera className="w-12 h-12 text-electric-sky" />,
      title: 'IP CCTV Systems',
      description: 'High-resolution surveillance systems for complete security.',
      features: ['HD Cameras', 'Night Vision', 'Remote Monitoring'],
    },
    {
      id: 'home-automation',
      icon: <HomeIcon className="w-12 h-12 text-electric-sky" />,
      title: 'Home Automation',
      description: 'Smart solutions for modern home management.',
      features: ['Lighting Control', 'Climate Control', 'Security Integration'],
    },
    {
      id: 'gps-tracking',
      icon: <Navigation className="w-12 h-12 text-electric-sky" />,
      title: 'GPS Tracking',
      description: 'Real-time vehicle and asset tracking solutions.',
      features: ['Live Tracking', 'Route History', 'Geofencing'],
    },
    {
      id: 'intercom',
      icon: <Radio className="w-12 h-12 text-electric-sky" />,
      title: 'Intercom Systems',
      description: 'Advanced communication solutions for buildings.',
      features: ['Video Intercom', 'Mobile App Access', 'Multi-unit Support'],
    },
    {
      id: 'video-door',
      icon: <Phone className="w-12 h-12 text-electric-sky" />,
      title: 'Video Door Phone',
      description: 'Smart entry management with video verification.',
      features: ['HD Video', 'Two-way Audio', 'Mobile Integration'],
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto text-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive security and automation solutions for every need
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => (servicesRef.current[service.id] = el)}
              className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg transform transition-all duration-300 hover:scale-[1.02] scroll-mt-20"  // Added scroll-mt-20
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-electric-sky/10 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-midnight-depth/50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-electric-sky rounded-full mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 