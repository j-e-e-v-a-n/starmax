import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-horizon/95 text-white py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-electric-sky" />
              <span className="text-lg font-bold">Starmax Systems</span>
            </div>
            <p className="text-sm text-gray-300">
              Leading provider of security and automation solutions, ensuring safety and peace of mind for our clients.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-electric-sky" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-electric-sky" />
                <span className="text-sm">info@starmaxsystems.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-electric-sky" />
                <span className="text-sm">Kochi, Kerala, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Access Control Systems</li>
              <li>Automatic Gates</li>
              <li>Time & Attendance System</li>
              <li>IP CCTV Systems</li>
              <li>Home Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Haripad</li>
              <li>Chengannur</li>
              <li>Calicut</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Starmax Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;