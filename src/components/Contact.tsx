import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-[#4A5947] text-[#F5F1EB] py-24 relative overflow-hidden" ref={sectionRef}>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info & Map */}
          <div className={`space-y-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            <div>
              <span className="text-[#C9B896] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                Commençons votre <br/><span className="italic text-[#C9B896]">transformation.</span>
              </h2>
              <p className="text-[#F5F1EB]/70 font-light text-lg max-w-md">
                Prenez rendez-vous pour une consultation personnalisée ou passez nous voir à Djerba.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F5F1EB]/5 p-8 backdrop-blur-sm border border-[#F5F1EB]/10 hover:bg-[#F5F1EB]/10 transition-colors duration-300">
                <MapPin className="text-[#C9B896] mb-4" size={28} />
                <h3 className="text-xl font-serif mb-2">Notre Adresse</h3>
                <p className="text-[#F5F1EB]/60 font-light text-sm leading-relaxed">
                  Zone Touristique<br/>
                  4180 Djerba, Tunisie
                </p>
              </div>
              <div className="bg-[#F5F1EB]/5 p-8 backdrop-blur-sm border border-[#F5F1EB]/10 hover:bg-[#F5F1EB]/10 transition-colors duration-300">
                <Phone className="text-[#C9B896] mb-4" size={28} />
                <h3 className="text-xl font-serif mb-2">Contact Direct</h3>
                <p className="text-[#F5F1EB]/60 font-light text-sm leading-relaxed mb-2">
                  +216 XX XXX XXX
                </p>
                <p className="text-[#F5F1EB]/60 font-light text-sm">
                  contact@salon-djerba.com
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="#" className="w-12 h-12 rounded-full border border-[#F5F1EB]/20 flex items-center justify-center hover:bg-[#C9B896] hover:border-[#C9B896] hover:text-[#4A5947] transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#F5F1EB]/20 flex items-center justify-center hover:bg-[#C9B896] hover:border-[#C9B896] hover:text-[#4A5947] transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#F5F1EB]/20 flex items-center justify-center hover:bg-[#C9B896] hover:border-[#C9B896] hover:text-[#4A5947] transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className={`bg-[#F5F1EB] text-[#4A5947] p-10 md:p-14 lg:-mt-20 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-all duration-1000 delay-300`}>
            <h3 className="text-3xl font-serif mb-8">Envoyer un message</h3>
            <form className="space-y-8">
              <div className="group">
                <input 
                  type="text" 
                  placeholder="Votre Nom"
                  className="w-full bg-transparent border-b border-[#4A5947]/20 py-4 text-[#4A5947] placeholder-[#4A5947]/40 focus:outline-none focus:border-[#4A5947] transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <input 
                    type="tel" 
                    placeholder="Téléphone"
                    className="w-full bg-transparent border-b border-[#4A5947]/20 py-4 text-[#4A5947] placeholder-[#4A5947]/40 focus:outline-none focus:border-[#4A5947] transition-colors"
                  />
                </div>
                <div className="group">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-[#4A5947]/20 py-4 text-[#4A5947] placeholder-[#4A5947]/40 focus:outline-none focus:border-[#4A5947] transition-colors"
                  />
                </div>
              </div>
              <div className="group">
                <textarea 
                  rows="4"
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full bg-transparent border-b border-[#4A5947]/20 py-4 text-[#4A5947] placeholder-[#4A5947]/40 focus:outline-none focus:border-[#4A5947] transition-colors resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-[#4A5947] text-white py-5 px-8 hover:bg-[#3A4638] transition-all duration-300 flex justify-between items-center group">
                <span className="uppercase tracking-widest text-xs font-bold">Envoyer</span>
                <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
              </button>
            </form>
          </div>

        </div>
        
        {/* Footer Minimal */}
        <div className="mt-24 pt-8 border-t border-[#F5F1EB]/10 flex flex-col md:flex-row justify-between items-center text-[#F5F1EB]/40 text-sm font-light">
          <p>© 2024 Centre Esthétique Djerba.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#C9B896] transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-[#C9B896] transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </section>
  );
}
