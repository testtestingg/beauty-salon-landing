import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Djerba', 'Tunisie'],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+216 XX XXX XXX'],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Sam: 9h00 - 19h00', 'Dimanche: Sur rendez-vous'],
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-[#4A5947] text-sm tracking-[0.3em] font-light uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#4A5947] mt-4 mb-6">
            Prenez Rendez-vous
          </h2>
          <div className="w-24 h-0.5 bg-[#C9B896] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl bg-[#F5F1EB] hover:bg-[#4A5947] hover:text-[#F5F1EB] transition-all duration-500 group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A5947] text-[#F5F1EB] group-hover:bg-[#F5F1EB] group-hover:text-[#4A5947] mb-6 transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-normal text-[#4A5947] group-hover:text-[#F5F1EB] mb-3 transition-colors duration-500">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-[#6B7F65] group-hover:text-[#F5F1EB]/90 font-light leading-relaxed transition-colors duration-500"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#F5F1EB] rounded-2xl p-10">
            <h3 className="text-2xl font-normal text-[#4A5947] mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-6 py-4 rounded-full bg-white text-[#4A5947] placeholder-[#6B7F65] focus:outline-none focus:ring-2 focus:ring-[#4A5947] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-6 py-4 rounded-full bg-white text-[#4A5947] placeholder-[#6B7F65] focus:outline-none focus:ring-2 focus:ring-[#4A5947] transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full px-6 py-4 rounded-full bg-white text-[#4A5947] placeholder-[#6B7F65] focus:outline-none focus:ring-2 focus:ring-[#4A5947] transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-3xl bg-white text-[#4A5947] placeholder-[#6B7F65] focus:outline-none focus:ring-2 focus:ring-[#4A5947] transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4A5947] text-[#F5F1EB] px-8 py-4 rounded-full hover:bg-[#6B7F65] transition-all duration-300 text-sm font-light tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Envoyer
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/tTVp58F9/Whats-App-Image-2025-12-16-at-22-35-38.jpg"
                alt="Beauty salon interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/216XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white px-6 py-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 text-sm font-light tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="tel:+216XXXXXXXX"
                className="flex-1 bg-[#4A5947] text-[#F5F1EB] px-6 py-4 rounded-full hover:bg-[#6B7F65] transition-all duration-300 text-sm font-light tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone size={20} />
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-[#4A5947]/10 text-center">
        <p className="text-[#6B7F65] font-light text-sm">
          © 2024 Centre Esthétique Djerba. Tous droits réservés.
        </p>
      </footer>
    </section>
  );
}
