import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À Propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/30 backdrop-blur-lg shadow-lg py-1 border-b border-white/20'
          : 'bg-white/10 backdrop-blur-md py-1 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <a href="#home" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src="https://i.ibb.co/p6Bdtzj9/Whats-App-Image-2025-12-16-at-22-18-20-2-removebg-preview.png"
            alt="Centre Esthétique Logo"
            className="h-24 w-24 object-contain"
          />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#4A5947] hover:text-[#6B7F65] transition-all duration-300 text-sm font-light tracking-wide relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9B896] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white/20 backdrop-blur-md text-[#4A5947] px-6 py-2 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-light tracking-wide flex items-center gap-2 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <Phone size={16} />
            Réserver
          </a>
        </div>

        <button
          className="md:hidden text-[#4A5947] hover:scale-110 transition-transform duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-lg border-t border-white/20 mt-2">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-[#4A5947] hover:text-[#6B7F65] transition-colors duration-300 text-sm font-light tracking-wide py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-white/20 backdrop-blur-md text-[#4A5947] px-6 py-2 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-light tracking-wide text-center border border-white/30 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Réserver
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
