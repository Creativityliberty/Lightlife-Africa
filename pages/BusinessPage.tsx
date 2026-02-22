
import React from 'react';
import { TrendingUp, Users, Award, Globe, MessageSquare, CheckCircle2, Star, Zap, Target, Briefcase, Rocket, ShieldCheck } from 'lucide-react';
import { CONTACT } from '../constants';

interface BusinessPageProps {
  onOpenQuiz: () => void;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ onOpenQuiz }) => {
  return (
    <div className="pb-24">
      {/* Business Hero */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden pt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-deep z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071" 
            alt="Business Success" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-full text-[10px] font-extrabold uppercase tracking-[0.4em] mb-10 border border-gold/30">
              <Star size={14} /> Partenariat Indépendant Afrique
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.95] mb-10">
              Bâtissez votre <br />
              <span className="text-gold italic">Héritage.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-14 leading-relaxed font-medium italic">
              "Le succès ne consiste pas seulement à gagner de l'argent, il s'agit de la différence que vous faites dans la vie des gens."
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button 
                onClick={onOpenQuiz}
                className="btn-premium bg-gold text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl shadow-gold/20 flex items-center gap-3"
              >
                Candidature Leader <Rocket size={16} />
              </button>
              <a 
                href={CONTACT.whatsapp}
                className="flex items-center gap-4 font-bold text-white/80 hover:text-gold transition-colors uppercase tracking-widest text-[10px]"
              >
                <span className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-gold"><MessageSquare size={20} /></span>
                Échanger avec {CONTACT.name.split(' ')[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem - 3 Pillars */}
      <section className="py-24 md:py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep mb-8 italic">L'Écosystème du Succès</h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">Un modèle d'affaires conçu pour la pérennité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Technologie Exclusive",
                desc: "Le X39 est protégé par plus de 100 brevets. Vous distribuez un produit sans concurrence directe sur le marché mondial.",
                icon: <Zap size={32} />,
                color: "sage"
              },
              {
                title: "Plan de Gains",
                desc: "Profitez d'un système binaire puissant avec des bonus de cycle et des commissions résiduelles illimitées sur votre réseau.",
                icon: <TrendingUp size={32} />,
                color: "gold"
              },
              {
                title: "Mentorat de Luxe",
                desc: "Formation continue, funnels de vente digitaux et accompagnement direct pour propulser votre business en Afrique.",
                icon: <Users size={32} />,
                color: "deep"
              }
            ].map((pillar, i) => (
              <div key={i} className="reveal group bg-off-white p-12 rounded-[3rem] border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all">
                <div className={`w-20 h-20 rounded-[2rem] bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${pillar.color === 'gold' ? 'text-gold' : pillar.color === 'sage' ? 'text-sage' : 'text-deep'}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-deep mb-6 uppercase tracking-wider">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Profile Section */}
      <section className="py-24 md:py-32 px-6 bg-deep overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 reveal">
              <div className="inline-flex items-center gap-3 text-gold mb-8">
                <Target size={24} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Profils Recherchés</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight">
                Nous cherchons <br /> des <span className="text-gold italic">Visionnaires.</span>
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  "Entrepreneurs souhaitant diversifier leurs revenus",
                  "Leaders d'opinion et influenceurs bien-être",
                  "Professionnels du MLM cherchant un produit réel",
                  "Visionnaires souhaitant implanter la marque en Afrique"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-white/80 font-bold uppercase tracking-widest text-[10px]">{text}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={onOpenQuiz}
                className="btn-premium bg-white text-deep px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Vérifier mon Éligibilité
              </button>
            </div>

            <div className="lg:w-1/2 reveal delay-300">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-gold font-serif text-5xl font-bold mb-4">90%</div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Taux de Rétention</p>
                </div>
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-white font-serif text-5xl font-bold mb-4">Unlimited</div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Earnings Potential</p>
                </div>
                <div className="col-span-2 bg-gold/10 p-10 rounded-[3rem] border border-gold/20 backdrop-blur-sm flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="text-white font-serif text-3xl font-bold mb-2">Expansion Afrique</h4>
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest">Cameroun, Côte d'Ivoire, Sénégal...</p>
                  </div>
                  <Globe className="text-gold opacity-30" size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Mentorship */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center text-sage mx-auto mb-10">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep mb-8 leading-tight">
            Votre réussite est <br /> notre <span className="text-gold italic">priorité.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium mb-16 italic">
            "Rejoindre l'équipe de Lionel TAGNE, c'est accéder à un savoir-faire unique en marketing digital et en développement d'équipes performantes."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onOpenQuiz}
              className="btn-premium bg-deep text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl"
            >
              Démarrer le Quiz Business
            </button>
            <a 
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-off-white text-deep px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs border border-gray-100"
            >
              Rejoindre la Communauté
            </a>
          </div>
          <div className="mt-16 inline-block border-b-2 border-gold pb-2 text-[10px] font-black uppercase tracking-[0.3em] text-deep">
            Partenaire Exécutif {CONTACT.name}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
