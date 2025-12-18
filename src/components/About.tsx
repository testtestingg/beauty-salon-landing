import React, { useEffect, useState, useRef } from 'react';
import { Quote } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 bg-[#F9F8F6] relative overflow-hidden" ref={sectionRef}>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9B896]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4A5947]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Composition */}
          <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} transition-all duration-1000 ease-out`}>
            {/* Main Image */}
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Salon Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Secondary Floating Image */}
            <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square z-20 border-8 border-[#F9F8F6] rounded-sm overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Detail shot" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Square */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#4A5947] opacity-30 z-0"></div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} transition-all duration-1000 ease-out delay-300`}>
            <div>
              <span className="text-[#C9B896] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Notre Philosophie</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A5947] leading-tight mb-8">
                Bien plus qu'un <br/>
                institut, <span className="italic text-[#C9B896]">une oasis.</span>
              </h2>
            </div>

            <div className="relative pl-8 border-l-2 border-[#C9B896]/30">
              <Quote className="absolute -top-4 -left-3 bg-[#F9F8F6] text-[#C9B896]" size={24} fill="#C9B896" />
              <p className="text-xl md:text-2xl font-serif text-[#5A6C57] italic leading-relaxed">
                "Nous croyons que la beauté est une harmonie entre le corps et l'esprit. Chaque geste est pensé pour rétablir cet équilibre fragile."
              </p>
            </div>

            <div className="space-y-6 text-[#6B7F65] font-light leading-loose text-lg">
              <p>
                Niché au cœur de Djerba, notre espace a été conçu comme un refuge loin du tumulte quotidien. L'architecture mêle la pureté des lignes modernes à la chaleur des matériaux naturels.
              </p>
              <p>
                Notre équipe ne se contente pas d'appliquer des soins ; nous créons des protocoles sur-mesure, alliant la haute technicité cosmétique à la douceur des rituels traditionnels tunisiens.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-[#4A5947]/10">
              {[
                { number: '10+', label: 'Années d\'Expérience' },
                { number: '100%', label: 'Produits Bio' },
                { number: '500+', label: 'Clients Heureux' },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <span className="block text-3xl font-serif text-[#4A5947] mb-1">{stat.number}</span>
                  <span className="text-xs uppercase tracking-wider text-[#C9B896]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
