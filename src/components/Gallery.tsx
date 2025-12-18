import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Soins Visage',
      category: 'Rituel',
      size: 'large'
    },
    {
      url: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Manucure',
      category: 'Mains',
      size: 'small'
    },
    {
      url: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Esthétique',
      category: 'Beauté',
      size: 'tall'
    },
    {
      url: 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Massage',
      category: 'Détente',
      size: 'small'
    },
    {
      url: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coiffure',
      category: 'Style',
      size: 'large'
    },
    {
      url: 'https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Spa',
      category: 'Wellness',
      size: 'tall'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-[#F9F8F6]" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-xl">
            <span className="text-[#C9B896] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A5947] leading-tight">
              L'Art de la <span className="italic">Beauté</span>
            </h2>
          </div>
          <p className="md:max-w-xs text-[#6B7F65] mt-6 md:mt-0 font-light text-sm leading-relaxed border-l border-[#C9B896] pl-6">
            Découvrez nos moments de sérénité et nos réalisations esthétiques.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`group relative break-inside-avoid overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${img.size === 'tall' ? 'aspect-[3/5]' : img.size === 'large' ? 'aspect-[4/3]' : 'aspect-square'}`}
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-[#4A5947]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#F9F8F6] text-xs tracking-widest uppercase mb-2 block">{img.category}</span>
                    <h3 className="text-white text-2xl font-serif italic">{img.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full transform rotate-45 group-hover:rotate-0 transition-all duration-500">
                    <ZoomIn className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A5947]/95 backdrop-blur-sm p-4 transition-all duration-300">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-[#C9B896] transition-colors"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] relative flex flex-col items-center">
             <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto object-contain shadow-2xl rounded-sm"
            />
            <div className="mt-6 text-center">
              <h3 className="text-3xl text-white font-serif italic mb-2">{selectedImage.title}</h3>
              <p className="text-[#C9B896] uppercase tracking-widest text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
