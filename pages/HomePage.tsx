
import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ChevronLeft, ChevronRight, Star, ExternalLink, ClipboardCheck, Quote } from 'lucide-react';
import { CONTACT, PRODUCT_IMAGES, TESTIMONIALS, TIMELINE } from '../constants';

interface HomePageProps {
  onOpenQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenQuiz }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-sage/5 -skew-x-12 translate-x-32 hidden lg:block opacity-50"></div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 text-sage rounded-full text-[10px] font-extrabold uppercase tracking-[0.3em] mb-10">
              <Sparkles size={14} /> Activez vos cellules souches
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-deep leading-[0.95] mb-10">
              Live Long. <br />
              <span className="text-gold italic">Live Well.</span> <br />
              Live Young.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-lg mb-14 leading-relaxed font-medium">
              Faites l'expérience d'un niveau de santé et de vitalité que vous n'avez pas connu depuis votre jeunesse grâce à la technologie X39.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href={CONTACT.store} target="_blank" rel="noopener noreferrer" className="btn-premium bg-deep text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-deep/10 flex items-center gap-3">
                Boutique Officielle <ExternalLink size={14} />
              </a>
              <button 
                onClick={onOpenQuiz}
                className="flex items-center gap-4 font-bold text-sage hover:text-deep transition-colors uppercase tracking-widest text-[10px]"
              >
                <span className="w-14 h-14 rounded-full border-2 border-sage/20 flex items-center justify-center text-sage"><ClipboardCheck size={20} /></span>
                Faire le Quiz Client
              </button>
            </div>
          </div>
          
          <div className="relative reveal delay-300">
            <div className="float">
              <img src={PRODUCT_IMAGES.main} alt="X39 Pack" className="w-full max-w-lg mx-auto drop-shadow-[0_50px_50px_rgba(122,155,138,0.3)]" />
            </div>
            <div className="absolute -bottom-10 -left-6 md:left-0 bg-white p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 max-w-[220px]">
              <ShieldCheck className="text-sage mb-4" size={36} />
              <p className="text-[10px] font-black text-deep uppercase mb-1 tracking-wider">Garantie 90 Jours</p>
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase">Satisfaction garantie sans risques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep mb-8">Votre Voyage de Régénération</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium italic">
              "Ce n'est pas seulement de l'anti-âge, c'est une inversion de l'âge."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((step, i) => (
              <div key={i} className="reveal bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-gold/30 transition-all group">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 40 })}
                </div>
                <div className="text-[10px] font-black text-sage uppercase tracking-widest mb-2">{step.period}</div>
                <h3 className="text-xl font-serif font-bold text-deep mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - NEW SPLIT STYLE */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep mb-6">Ils ont transformé leur vie</h2>
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Témoignages de notre communauté</p>
          </div>

          <div className="relative reveal px-4">
            <div className="max-w-6xl mx-auto relative group">
              {/* Navigation Arrows */}
              <button onClick={prevTestimonial} className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-deep hover:bg-gold hover:text-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white shadow-2xl rounded-full flex items-center justify-center text-deep hover:bg-gold hover:text-white transition-all">
                <ChevronRight size={24} />
              </button>

              <div className="bg-off-white rounded-[4rem] overflow-hidden shadow-2xl shadow-sage/5 border border-sage/5 min-h-[500px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Left Side: Benefit Image */}
                  <div className="relative h-[300px] lg:h-full overflow-hidden group-hover:scale-105 transition-transform duration-[2s]">
                    <img 
                      src={TESTIMONIALS[currentTestimonial].benefitImage} 
                      alt={TESTIMONIALS[currentTestimonial].category} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                        <Sparkles size={12} /> Focus : {TESTIMONIALS[currentTestimonial].category}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Content */}
                  <div className="p-10 md:p-20 flex flex-col justify-center relative bg-white lg:bg-transparent">
                    <Quote className="absolute top-10 right-10 text-gold/10" size={120} />
                    
                    <div className="relative z-10">
                      <div className="flex mb-8 gap-1">
                        {[...Array(TESTIMONIALS[currentTestimonial].stars)].map((_, i) => (
                          <Star key={i} size={16} className="text-gold fill-current" />
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl font-serif italic text-deep leading-relaxed mb-12 border-l-4 border-gold/20 pl-8">
                        "{TESTIMONIALS[currentTestimonial].quote}"
                      </p>

                      <div className="flex items-center gap-6">
                        <img 
                          src={TESTIMONIALS[currentTestimonial].image} 
                          alt={TESTIMONIALS[currentTestimonial].name} 
                          className="w-16 h-16 rounded-full border-2 border-gold shadow-lg object-cover" 
                        />
                        <div>
                          <h4 className="font-bold text-deep uppercase tracking-widest text-xs mb-1">
                            {TESTIMONIALS[currentTestimonial].name}
                          </h4>
                          <p className="text-[10px] font-black text-sage uppercase tracking-widest">Utilisateur Certifié</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-3 mt-12">
              {TESTIMONIALS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${currentTestimonial === i ? 'bg-gold w-8' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-deep relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto relative z-10 reveal">
          <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-12 italic leading-tight">
            Prêt à commencer <br /> votre voyage ?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href={CONTACT.store} className="btn-premium bg-gold text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-2xl">
              Commander mon pack X39
            </a>
            <button 
              onClick={onOpenQuiz}
              className="btn-premium bg-white text-deep px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-2xl"
            >
              Remplir mon Quiz Client
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white rounded-full scale-150"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
