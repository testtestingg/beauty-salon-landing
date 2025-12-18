import { useState } from 'react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    { id: 1, image: 'https://i.ibb.co/7d5SkXG7/Whats-App-Image-2025-12-16-at-22-18-19.jpg' },
    { id: 2, image: 'https://i.ibb.co/1YW95Nym/Whats-App-Image-2025-12-16-at-22-18-20-1.jpg' },
    { id: 3, image: 'https://i.ibb.co/twNzFtt0/Whats-App-Image-2025-12-16-at-22-18-20.jpg' },
    { id: 4, image: 'https://i.ibb.co/WvKTHFHd/Whats-App-Image-2025-12-16-at-22-18-19-2.jpg' },
    { id: 5, image: 'https://i.ibb.co/S75LJ3nR/Whats-App-Image-2025-12-16-at-22-18-19-1.jpg' },
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="services" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-[#4A5947] mb-4">
            Nos Services
          </h2>
          <div className="w-16 h-px bg-[#C9B896] mx-auto"></div>
        </div>

        <div className="relative h-[600px] w-full mx-auto max-w-md">
          {/* Cards Stack */}
          <div className="relative h-full w-full">
            {services.map((service, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={service.id}
                  className={`absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl transition-all duration-500 ease-out cursor-pointer ${
                    isActive ? 'z-30' : offset === 1 || offset === -services.length + 1 ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: `
                      translateY(${Math.abs(offset) * 25}px) 
                      scale(${1 - Math.abs(offset) * 0.08}) 
                      rotateZ(${offset * -2}deg)
                    `,
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                    boxShadow: `0 ${10 + Math.abs(offset) * 8}px ${30 + Math.abs(offset) * 10}px rgba(0, 0, 0, ${0.2 - Math.abs(offset) * 0.05})`,
                  }}
                  onClick={() => !isActive && goToCard(index)}
                >
                  <img
                    src={service.image}
                    alt={`Service ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next card"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-white' 
                    : 'w-2 h-2 bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}