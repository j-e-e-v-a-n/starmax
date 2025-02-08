import React from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto text-white">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-electric-sky mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">About Starmax Systems</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leading the way in security and automation solutions since 2010
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
            <Users className="w-12 h-12 text-electric-sky mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-300">
              Our professional team brings years of experience in security solutions
            </p>
          </div>

          <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
            <MapPin className="w-12 h-12 text-electric-sky mb-4" />
            <h3 className="text-xl font-semibold mb-2">Service Areas</h3>
            <p className="text-gray-300">
              Serving Haripad, Chengannur, and Calicut with excellence
            </p>
          </div>

          <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
            <Award className="w-12 h-12 text-electric-sky mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-300">
              Committed to providing top-tier security solutions
            </p>
          </div>
        </div>

        <div className="bg-navy-horizon/50 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            At Starmax Systems, we are dedicated to providing cutting-edge security and automation solutions that protect what matters most. Our mission is to ensure the safety and peace of mind of our clients through innovative technology and exceptional service.
          </p>
          <p className="text-gray-300">
            We believe in staying ahead of the curve by continuously updating our knowledge and skills to provide the most effective security solutions for homes and businesses alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;