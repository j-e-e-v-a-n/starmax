import React from 'react';
import { Shield, Lock, Clock, Camera, Home as HomeIcon, Navigation, Radio, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollingLogos from '../components/ScrollingLogos';
import ScrollingTestimonials from '../components/ScrollingTestimonials';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Lock className="w-12 h-12 text-electric-sky" />,
      title: 'Access Control Systems',
      description: "Advanced authentication systems for secure entry management.",
      path: '/services#access-control',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827'
    },
    {
      icon: <Clock className="w-12 h-12 text-electric-sky" />,
      title: 'Time & Attendance',
      description: 'Automated time tracking solutions for workforce management.',
      path: '/services#time-attendance',
      image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30'
    },
    {
      icon: <Camera className="w-12 h-12 text-electric-sky" />,
      title: 'IP CCTV Systems',
      description: 'High-resolution surveillance systems for complete security.',
      path: '/services#cctv',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9'
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-electric-sky" />,
      title: 'Home Automation',
      description: 'Smart solutions for modern home management.',
      path: '/services#home-automation',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827'
    },
    {
      icon: <Navigation className="w-12 h-12 text-electric-sky" />,
      title: 'GPS Tracking',
      description: 'Real-time vehicle and asset tracking solutions.',
      path: '/services#gps-tracking',
      image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30'
    },
    {
      icon: <Radio className="w-12 h-12 text-electric-sky" />,
      title: 'Intercom Systems',
      description: 'Advanced communication solutions for buildings.',
      path: '/services#intercom',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9'
    },
    
    {
      icon: <Phone className="w-12 h-12 text-electric-sky" />,
      title: 'Video Door Phone',
      description: 'Smart entry management with video verification.',
      path: '/services#video-door',
      image: 'https://m.media-amazon.com/images/I/61WTU93jl6L._AC_UF1000,1000_QL80_.jpg'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-navy-horizon/50">
        <div className="container mx-auto text-center text-white">
          <Shield className="w-16 h-16 text-electric-sky mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Safety is Our Priority
          </h1>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">WELCOME!</h2>
            <p className="text-lg text-gray-300 mb-8">
              Starmax is a leading company promoting various protection and security services. 
              We offer a broad range of ideas and gadgets that would surely put your mind to rest. 
              We assure you that once you have chosen the right protection systems in place, 
              it would be installed and maintained by our professionals.
            </p>
            <Link 
              to="/about"
              className="inline-block bg-electric-sky hover:bg-azure-wave text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Services We Provide
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We assure you that your safety is our priority. Starmax believes that a client's 
            security is of utmost importance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className={`group relative overflow-hidden rounded-xl h-80 cursor-pointer ${
        services.length % 3 === 1 && index === services.length - 1
          ? 'lg:col-start-2'
          : ''
      }`}
      onClick={(e) => {
        e.preventDefault();  // Prevents any default scrolling behavior
        navigate(service.path);
      }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();  // Prevents default scroll on key press
          navigate(service.path);
        }
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-depth via-midnight-depth/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-electric-sky/20 backdrop-blur-sm rounded-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-gray-300">{service.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <ScrollingTestimonials />
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Trusted Partners
        </h2>
        <ScrollingLogos />
      </section>
    </div>
  );
};

export default Home;