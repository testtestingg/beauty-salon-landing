import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const SLIDES = [
  {
    id: 0,
    title: "L'Art de la Beauté",
    subtitle: "Révélez Votre Éclat Naturel",
    description: "Une fusion parfaite entre traditions ancestrales et techniques modernes pour une expérience sensorielle unique à Djerba.",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: 1,
    title: "Soins d'Exception",
    subtitle: "Rituels & Bien-être",
    description: "Des produits biologiques sélectionnés avec soin pour nourrir votre peau et apaiser votre esprit dans un cadre enchanteur.",
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    id: 2,
    title: "Sérénité Absolue",
    subtitle: "Votre Refuge Privé",
    description: "Laissez le monde extérieur derrière vous. Entrez dans un sanctuaire dédié à votre relaxation profonde.",
    image: "https://images.pexels.com/photos/6663469/pexels-photo-6663469.jpeg?auto=compress&cs=tinysrgb&w=1920",
  }
];

export default function Hero() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollDistance = -top;
      const maxScroll = height - windowHeight;
      const rawProgress = Math.max(0, Math.min(1, scrollDistance / maxScroll));
      
      setProgress(rawProgress);

      // Determine active slide
      const slideIndex = Math.min(
        SLIDES.length - 1,
        Math.floor(rawProgress * SLIDES.length)
      );
      setActiveSlide(slideIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#F5F1EB]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Layer */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out ${
                 activeSlide === index ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Sophisticated Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
          </div>
        ))}

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center">
          <div className="max-w-5xl mx-auto text-center">
            {SLIDES.map((slide, index) => {
              const isActive = activeSlide === index;
              return (
                <div 
                  key={slide.id}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 transition-all duration-1000 ease-out ${
                    isActive 
                      ? 'opacity-100 translate-y-[-50%] blur-0 scale-100' 
                      : 'opacity-0 translate-y-[-40%] blur-md scale-95'
                  }`}
                  style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                    <Sparkles className="text-[#F5F1EB] mr-2" size={14} />
                    <span className="text-[#F5F1EB] text-xs tracking-[0.2em] font-medium uppercase">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#F5F1EB] mb-8 tracking-tight drop-shadow-2xl leading-[0.9]">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-[#F5F1EB]/90 mb-10 max-w-xl mx-auto font-light leading-relaxed drop-shadow-lg">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group bg-[#F5F1EB] text-[#4A5947] px-8 py-4 rounded-full hover:bg-white transition-all duration-300 text-sm font-medium tracking-wide flex items-center gap-2 shadow-xl hover:scale-105">
                      Prendre Rendez-vous
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-[#F5F1EB]/30 text-[#F5F1EB] hover:bg-[#F5F1EB]/10 transition-all duration-300 text-sm font-medium tracking-wide backdrop-blur-sm">
                      Explorer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar (Bottom) */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-20">
          <div 
            className="h-full bg-[#F5F1EB]" 
            style={{ width: `${progress * 100}%`, transition: 'width 0.1s linear' }}
          />
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 z-20 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: progress > 0.1 ? 0 : 1 }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="animate-bounce" size={20} />
        </div>
      </div>
    </div>
  );
}
