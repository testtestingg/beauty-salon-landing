import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Gallery() {
  const [ref, isVisible] = useScrollAnimation();

  const images = [
    {
      url: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beauty treatment',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      url: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Manicure',
      span: '',
    },
    {
      url: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Facial treatment',
      span: '',
    },
    {
      url: 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Relaxation',
      span: '',
    },
    {
      url: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair styling',
      span: '',
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-[#4A5947] text-sm tracking-[0.3em] font-light uppercase">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#4A5947] mt-4 mb-6">
            Nos Réalisations
          </h2>
          <div className="w-24 h-0.5 bg-[#C9B896] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${image.span} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transition: 'all 1000ms' }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A5947]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
