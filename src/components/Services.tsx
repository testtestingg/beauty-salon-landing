import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 0,
      title: "Soins Visage",
      subtitle: "Éclat & Pureté",
      description: "Des protocoles sur-mesure pour révéler la lumière naturelle de votre peau. Nous utilisons des produits bio-actifs riches en nutriments.",
      price: "à partir de 80 DT",
      image: 'https://i.ibb.co/7d5SkXG7/Whats-App-Image-2025-12-16-at-22-18-19.jpg'
    },
    {
      id: 1,
      title: "Massages",
      subtitle: "Détente Absolue",
      description: "Voyagez à travers nos rituels ancestraux. Pierres chaudes, huiles essentielles et techniques enveloppantes pour apaiser corps et esprit.",
      price: "à partir de 60 DT",
      image: 'https://i.ibb.co/1YW95Nym/Whats-App-Image-2025-12-16-at-22-18-20-1.jpg'
    },
    {
      id: 2,
      title: "Onglerie",
      subtitle: "Mains de Fée",
      description: "Manucure russe, pose de gel ou vernis semi-permanent. Une précision chirurgicale pour des mains sublimées.",
      price: "à partir de 40 DT",
      image: 'https://i.ibb.co/twNzFtt0/Whats-App-Image-2025-12-16-at-22-18-20.jpg'
    },
    {
      id: 3,
      title: "Coiffure",
      subtitle: "Art Capillaire",
      description: "Coupes modernes, colorations végétales et soins profonds. Laissez nos experts révéler votre personnalité.",
      price: "Sur devis",
      image: 'https://i.ibb.co/WvKTHFHd/Whats-App-Image-2025-12-16-at-22-18-19-2.jpg'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Title Block */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-[#C9B896]" />
            <span className="text-[#4A5947] text-xs font-bold tracking-[0.2em] uppercase">Nos Expertises</span>
            <Sparkles size={16} className="text-[#C9B896]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#4A5947] mb-6">Le Menu des Soins</h2>
          <div className="w-px h-16 bg-[#C9B896] mx-auto"></div>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((service, index) => (
              <div 
                key={service.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`group cursor-pointer p-6 border-b border-[#F5F1EB] transition-all duration-300 ${activeTab === index ? 'bg-[#F9F8F6] pl-10' : 'hover:pl-8'}`}
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-baseline gap-4">
                    <span className={`text-sm font-bold transition-colors duration-300 ${activeTab === index ? 'text-[#C9B896]' : 'text-gray-300'}`}>0{index + 1}</span>
                    <h3 className={`text-2xl font-serif transition-colors duration-300 ${activeTab === index ? 'text-[#4A5947]' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className={`transform transition-all duration-300 ${activeTab === index ? 'opacity-100 translate-x-0 text-[#C9B896]' : 'opacity-0 -translate-x-4'}`} 
                  />
                </div>
                
                {/* Mobile description (only visible on small screens) */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeTab === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                   <p className="text-[#6B7F65] text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Display (Desktop) */}
          <div className="lg:col-span-7 relative h-[600px] hidden lg:block rounded-2xl overflow-hidden shadow-2xl">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                  activeTab === index 
                    ? 'opacity-100 scale-100 translate-x-0 z-20' 
                    : activeTab > index 
                      ? 'opacity-0 scale-95 -translate-x-10 z-10' 
                      : 'opacity-0 scale-105 translate-x-10 z-10'
                }`}
              >
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Card Content */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md p-8 z-20 rounded-sm border-l-4 border-[#C9B896]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[#C9B896] text-xs font-bold uppercase tracking-widest mb-1">{service.subtitle}</p>
                      <h4 className="text-3xl text-[#4A5947] font-serif">{service.title}</h4>
                    </div>
                    <span className="bg-[#4A5947] text-white px-4 py-2 text-sm rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-[#6B7F65] font-light leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
