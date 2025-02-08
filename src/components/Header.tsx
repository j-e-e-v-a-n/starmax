import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const services = [
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#access-control',
      label: 'Access Control Systems',
      description: 'Secure entry management systems'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#time-attendance',
      label: 'Time & Attendance',
      description: 'Employee tracking solutions'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#cctv',
      label: 'IP CCTV Systems',
      description: 'Advanced surveillance systems'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#home-automation',
      label: 'Home Automation',
      description: 'Smart home control systems'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#gps-tracking',
      label: 'GPS Tracking',
      description: 'Real-time tracking solutions'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#intercom',
      label: 'Intercom',
      description: 'Communication systems'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      path: '/services#video-door',
      label: 'Video Door Phone',
      description: 'Smart entry management'
    }
  ];

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleServiceClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    
    // Extract the base path and hash
    const [basePath, hash] = path.split('#');
    
    // Navigate to the services page first
    navigate(basePath);
    
    // Scroll to the element after a short delay to ensure the page is loaded
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100; // Increased offset to prevent over-scrolling
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Reduced delay for smoother scrolling
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-midnight-depth/95 text-white sticky top-0 z-50 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-electric-sky" />
            <span className="text-xl font-bold">Starmax Systems</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              index === 1 ? (
                <div key={item.path} className="relative group">
                  <button
                    className={`flex items-center space-x-1 hover:text-electric-sky transition-colors ${
                      location.pathname.includes('/services') ? 'text-electric-sky' : ''
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-80 bg-navy-horizon/98 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                      isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-1 gap-1 p-2">
                      {services.map((service) => (
                        <a
                          key={service.path}
                          href={service.path}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-midnight-depth/50 transition-colors group"
                          onClick={(e) => handleServiceClick(service.path, e)}
                        >
                          <div className="p-2 bg-electric-sky/10 rounded-lg group-hover:bg-electric-sky/20 transition-colors">
                            {service.icon}
                          </div>
                          <div>
                            <p className="font-medium text-white group-hover:text-electric-sky transition-colors">
                              {service.label}
                            </p>
                            <p className="text-sm text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-electric-sky transition-colors ${
                    isActive(item.path) ? 'text-electric-sky' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-navy-horizon/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 top-20 bg-midnight-depth/95 z-50 transition-all duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="container mx-auto bg-midnight-depth/95 px-4 py-4 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-2">
              {mainNavItems.map((item, index) => (
                index === 1 ? (
                  <div key={item.path} className="border-b border-navy-horizon/30">
                    <button
                      className="w-full text-left py-4 flex items-center justify-between hover:text-electric-sky transition-colors"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="space-y-2 py-2">
                        {services.map((service) => (
                          <a
                            key={service.path}
                            href={service.path}
                            className="block py-3 px-4 rounded-lg hover:bg-navy-horizon/50 transition-colors"
                            onClick={(e) => handleServiceClick(service.path, e)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-electric-sky/10 rounded-lg">
                                {service.icon}
                              </div>
                              <div>
                                <p className="font-medium text-white">
                                  {service.label}
                                </p>
                                <p className="text-sm text-gray-400">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-4 text-lg font-medium hover:text-electric-sky transition-colors border-b border-navy-horizon/30 ${
                      isActive(item.path) ? 'text-electric-sky' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
