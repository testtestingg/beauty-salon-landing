import { Heart, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: Heart,
      title: 'Passion & Expertise',
      description: 'Une équipe dévouée à votre bien-être et votre beauté',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Des techniques de pointe et des produits premium',
    },
    {
      icon: Users,
      title: 'À Votre Écoute',
      description: 'Un accompagnement personnalisé pour chaque cliente',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A5947]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9B896]/20 rounded-full blur-3xl"></div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-[#4A5947] text-sm tracking-[0.3em] font-light uppercase">
            À Propos
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#4A5947] mt-4 mb-6">
            Votre Oasis de Beauté
          </h2>
          <div className="w-24 h-0.5 bg-[#C9B896] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-[#6B7F65] text-lg leading-relaxed font-light">
              Situé au cœur de Djerba, notre centre esthétique est un espace dédié à votre bien-être
              et à la valorisation de votre beauté naturelle. Nous combinons savoir-faire traditionnel
              et techniques modernes pour vous offrir une expérience exceptionnelle.
            </p>
            <p className="text-[#6B7F65] text-lg leading-relaxed font-light">
              Chaque soin est pensé pour révéler votre éclat naturel dans une atmosphère apaisante
              et raffinée. Notre équipe de professionnelles qualifiées vous accompagne avec passion
              et bienveillance.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Interior of beauty salon"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl bg-[#F5F1EB]/50 hover:bg-[#F5F1EB] transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A5947] text-[#F5F1EB] mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-normal text-[#4A5947] mb-3">{feature.title}</h3>
                <p className="text-[#6B7F65] font-light leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
