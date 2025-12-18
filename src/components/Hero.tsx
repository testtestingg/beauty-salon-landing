import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          transform: isVisible ? `scale(1) translateY(${scrollY * 0.5}px)` : 'scale(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1EB]/95 via-[#F5F1EB]/85 to-[#4A5947]/30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-[#C9B896]/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#4A5947]/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles 
              className="text-[#4A5947] mr-2" 
              size={20}
              style={{ transform: `rotate(${scrollY * 0.5}deg)` }}
            />
            <span className="text-[#4A5947] text-sm tracking-[0.3em] font-light uppercase">
              Beauté & Bien-être à Djerba
            </span>
            <Sparkles 
              className="text-[#4A5947] ml-2" 
              size={20}
              style={{ transform: `rotate(${-scrollY * 0.5}deg)` }}
            />
          </div>

          <h1 
            className="text-5xl md:text-7xl font-light text-[#4A5947] mb-6 tracking-tight leading-tight"
            style={{ transform: `scale(${1 - scrollY * 0.0003})` }}
          >
            Révélez Votre
            <span className="block mt-2 font-normal">Beauté Naturelle</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-[#6B7F65] mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            style={{ opacity: Math.max(0.3, 1 - scrollY * 0.003) }}
          >
            Un havre de sérénité où excellence et savoir-faire se rencontrent pour sublimer votre beauté
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-[#4A5947] text-[#F5F1EB] px-8 py-4 rounded-full hover:bg-[#6B7F65] transition-all duration-300 text-sm font-light tracking-wide flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Prendre Rendez-vous
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-[#4A5947] text-[#4A5947] px-8 py-4 rounded-full hover:bg-[#4A5947] hover:text-[#F5F1EB] transition-all duration-300 text-sm font-light tracking-wide"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              Nos Services
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY * 0.003) }}
      >
        <div className="w-6 h-10 border-2 border-[#4A5947]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#4A5947]/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
