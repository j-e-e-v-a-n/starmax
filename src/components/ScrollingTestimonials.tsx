import React from "react";

const testimonials = [
  {
    text: "I was very pleased with my new automatic gate as well as the great service provided by Manu and team at Starmax.",
    author: "John Doe",
    company: "ABC Corp"
  },
  {
    text: "Exceptional service and top-notch security solutions. Highly recommended!",
    author: "Jane Smith",
    company: "XYZ Industries"
  },
  {
    text: "The team's professionalism and expertise in CCTV installation was outstanding.",
    author: "Mike Johnson",
    company: "123 Security"
  }
];

const ScrollingTestimonials: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-16">
      <div className="flex animate-scroll-slow w-max min-w-[200%]">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-6 w-96 bg-navy-horizon/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <p className="text-white mb-4">"{testimonial.text}"</p>
            <div className="text-electric-sky">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTestimonials;
