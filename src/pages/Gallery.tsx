import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9',
      title: 'CCTV Installation',
      description: 'Professional CCTV camera installation',
    },
    {
      url: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30',
      title: 'Access Control',
      description: 'Biometric access control system',
    },
    {
      url: 'https://images.unsplash.com/photo-1558002038-1055907df827',
      title: 'Home Automation',
      description: 'Smart home control systems',
    },
    {
      url: 'https://images.unsplash.com/photo-1570044389283-6053b61a0f43',
      title: 'Security Gates',
      description: 'Automatic security gate installation',
    },
    {
      url: 'https://images.unsplash.com/photo-1580982327559-c1d7b5148dc5',
      title: 'Intercom Systems',
      description: 'Modern video intercom solutions',
    },
    {
      url: 'https://images.unsplash.com/photo-1585670210693-e7fdd16b142e',
      title: 'Time Attendance',
      description: 'Biometric time attendance systems',
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto text-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our recent installations and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video hover:transform hover:scale-105 transition-transform"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;