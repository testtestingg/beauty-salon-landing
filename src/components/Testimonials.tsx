import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  const testimonials = [
    {
      name: 'Amira K.',
      text: "Une expérience exceptionnelle ! Le personnel est à l'écoute et très professionnel. Je recommande vivement ce centre esthétique.",
      rating: 5,
    },
    {
      name: 'Leila M.',
      text: "J'adore ce salon ! L'ambiance est apaisante et les soins sont de très haute qualité. C'est devenu mon refuge beauté à Djerba.",
      rating: 5,
    },
    {
      name: 'Yasmine B.',
      text: 'Des professionnelles talentueuses qui savent exactement ce dont vous avez besoin. Un lieu élégant et chaleureux.',
      rating: 5,
    },
    {
      name: 'Sarah T.',
      text: 'Le meilleur centre esthétique de Djerba ! Des prestations impeccables et une équipe adorable. Je ne vais plus ailleurs.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#F5F1EB] relative overflow-hidden">
      <div className="absolute top-20 left-10 text-[#4A5947]/5 transform -rotate-12">
        <Quote size={150} />
      </div>
      <div className="absolute bottom-20 right-10 text-[#4A5947]/5 transform rotate-12">
        <Quote size={150} />
      </div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-[#4A5947] text-sm tracking-[0.3em] font-light uppercase">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#4A5947] mt-4 mb-6">
            Ce Que Disent Nos Clientes
          </h2>
          <div className="w-24 h-0.5 bg-[#C9B896] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="text-[#C9B896] fill-current"
                  />
                ))}
              </div>
              <p className="text-[#6B7F65] font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-[#4A5947] font-normal">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
