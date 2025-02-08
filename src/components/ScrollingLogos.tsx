import React from 'react';

const ScrollingLogos: React.FC = () => {
  const clients = [
    {
      name: 'Donmaxbose',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623'
    },
    {
      name: 'Purva Grand',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3624'
    },
    {
      name: 'Baymatrix',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3625'
    },
    {
      name: 'KR Bakes',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3626'
    },
    {
      name: 'KTDC',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3627'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-navy-horizon/30 py-10">
      <div className="flex animate-scroll w-max min-w-[200%]">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 bg-midnight-depth/50 p-4 rounded-lg backdrop-blur-sm"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;