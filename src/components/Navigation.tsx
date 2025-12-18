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
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F1EB]/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-light tracking-wider text-[#4A5947]">
          CENTRE ESTHÉTIQUE
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#4A5947] hover:text-[#6B7F65] transition-colors duration-300 text-sm font-light tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#4A5947] text-[#F5F1EB] px-6 py-2 rounded-full hover:bg-[#6B7F65] transition-all duration-300 text-sm font-light tracking-wide flex items-center gap-2"
          >
            <Phone size={16} />
            Réserver
          </a>
        </div>

        <button
          className="md:hidden text-[#4A5947]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F1EB]/98 backdrop-blur-md border-t border-[#4A5947]/10">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-[#4A5947] hover:text-[#6B7F65] transition-colors duration-300 text-sm font-light tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-[#4A5947] text-[#F5F1EB] px-6 py-2 rounded-full hover:bg-[#6B7F65] transition-all duration-300 text-sm font-light tracking-wide text-center"
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
