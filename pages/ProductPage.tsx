
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Play, ExternalLink, Info, Fingerprint, Zap, Dna, Boxes, Brain, ShieldAlert, Sparkles, Sun, ClipboardCheck, Droplets, Clock, UserCheck, AlertTriangle, Lightbulb, Waves } from 'lucide-react';
import { PRODUCT_IMAGES, SCIENCE, GUARANTEES, CONTACT } from '../constants';

interface ProductPageProps {
  onOpenQuiz: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onOpenQuiz }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % PRODUCT_IMAGES.carousel.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + PRODUCT_IMAGES.carousel.length) % PRODUCT_IMAGES.carousel.length);

  const placementSpots = [
    {
      id: 'c7',
      title: 'Base du Cou (C7)',
      desc: 'Placez le patch sur la vertèbre proéminente à la base de la nuque. C\'est le point idéal pour une diffusion globale.',
      x: '50%',
      y: '25%',
      side: 'back'
    },
    {
      id: 'navel',
      title: 'Sous le Nombril',
      desc: 'Placez le patch à environ deux doigts en-dessous du nombril. Un point puissant pour l\'énergie vitale.',
      x: '50%',
      y: '55%',
      side: 'front'
    }
  ];

  return (
    <div className="pb-24">
      {/* Product Hero */}
      <section className="px-6 pt-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Carousel */}
          <div className="reveal">
            <div className="relative aspect-square bg-white rounded-[3rem] p-4 md:p-10 shadow-2xl overflow-hidden group border border-gray-50">
              <img 
                src={PRODUCT_IMAGES.carousel[activeSlide]} 
                alt="X39 Patch" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prevSlide} className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-deep shadow-lg"><ChevronLeft /></button>
                <button onClick={nextSlide} className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-deep shadow-lg"><ChevronRight /></button>
              </div>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {PRODUCT_IMAGES.carousel.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${activeSlide === i ? 'bg-sage w-8' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="reveal delay-300">
            <div className="flex items-center gap-3 text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6">
              <Sparkles size={16} /> Technologie Photothérapie
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-deep mb-8 leading-tight">
              LifeWave <span className="text-gold italic">X39®</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed italic border-l-4 border-gold/20 pl-6">
              "Faites l'expérience d'un niveau de santé et de vitalité que vous n'avez pas connu depuis votre jeunesse."
            </p>
            
            <div className="space-y-4 mb-12">
              {[
                "Active vos propres cellules souches",
                "Augmente le peptide de cuivre GHK-Cu",
                "Stimule le cerveau par réflexion infrarouge",
                "Non transdermique & Sans drogue",
                "Neutralise naturellement les radicaux libres"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-deep font-bold uppercase tracking-widest text-[10px]">
                  <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center text-sage"><Check size={14} /></div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <a href={CONTACT.store} target="_blank" rel="noopener noreferrer" className="btn-premium flex-grow bg-deep text-white text-center py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-deep/20 flex items-center justify-center gap-3">
                Boutique Officielle <ExternalLink size={14} />
              </a>
              <button 
                onClick={onOpenQuiz}
                className="px-10 py-5 rounded-full border-2 border-sage/30 text-sage text-center font-bold uppercase tracking-widest text-xs hover:bg-sage hover:text-white transition-all flex items-center justify-center gap-3"
              >
                Quiz Consultation <ClipboardCheck size={16} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <Info size={14} className="text-gold" /> Garantie Satisfait ou Remboursé 90 jours
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: How It Works / Science */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Visual Aid / Diagram */}
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative aspect-square bg-off-white rounded-[4rem] flex items-center justify-center overflow-hidden border border-gray-50 shadow-inner">
                {/* Stylized Body Heat Reflection Diagram */}
                <div className="relative w-64 h-64">
                   {/* The Patch */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl z-20 flex items-center justify-center border-4 border-gold/10">
                      <div className="w-16 h-16 rounded-full bg-gold/5 animate-pulse flex items-center justify-center">
                        <Waves className="text-gold" size={32} />
                      </div>
                   </div>

                   {/* Outgoing Infrared (Heat) */}
                   <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-transparent to-sage/20 origin-bottom"
                          style={{ transform: `translate(-50%, -100%) rotate(${i * 45}deg)` }}
                        ></div>
                      ))}
                   </div>

                   {/* Reflected Light (Bio-photons) */}
                   <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-t from-transparent to-gold/30 origin-bottom"
                          style={{ transform: `translate(-50%, -100%) rotate(${i * 30}deg)` }}
                        ></div>
                      ))}
                   </div>
                </div>

                {/* Floating Info Labels */}
                <div className="absolute top-10 left-10 p-4 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-[10px] font-black uppercase text-deep mb-1">Source</p>
                  <p className="text-[10px] text-gray-400">Chaleur Infrarouge du Corps</p>
                </div>
                <div className="absolute bottom-10 right-10 p-4 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-[10px] font-black uppercase text-gold mb-1">Réponse</p>
                  <p className="text-[10px] text-gray-400">Réflexion de fréquences spécifiques</p>
                </div>
              </div>
              
              {/* Einstein Quote Card */}
              <div className="absolute -bottom-10 -right-6 lg:right-0 max-w-xs bg-deep text-white p-8 rounded-[2rem] shadow-2xl">
                <p className="text-sm italic leading-relaxed text-white/80 mb-4">
                  "Tout ce dont nous sommes faits contient de la lumière."
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gold">— Albert Einstein</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="reveal delay-300 order-1 lg:order-2">
              <div className="mb-10">
                <div className="flex items-center gap-3 text-gold mb-6">
                  <Lightbulb size={24} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">La Science du Vivant</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep mb-8 leading-tight">
                  Comment ça <br /><span className="text-gold italic">fonctionne ?</span>
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-off-white rounded-3xl border border-gray-50">
                    <h4 className="text-deep font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <Sun size={14} className="text-gold" /> {SCIENCE.phototherapy.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed italic">
                      {SCIENCE.phototherapy.text}
                    </p>
                  </div>
                  <div className="p-6 bg-off-white rounded-3xl border border-gray-50">
                    <h4 className="text-deep font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <Waves size={14} className="text-sage" /> {SCIENCE.howItWorks.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed italic">
                      {SCIENCE.howItWorks.text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center text-sage shrink-0"><Dna /></div>
                  <div>
                    <h5 className="text-deep font-bold uppercase tracking-widest text-[10px] mb-2">Activation du GHK-Cu</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">Le patch réfléchit des fréquences lumineuses qui augmentent le peptide de cuivre, activant naturellement vos cellules souches dormantes.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0"><Brain /></div>
                  <div>
                    <h5 className="text-deep font-bold uppercase tracking-widest text-[10px] mb-2">Signal Cérébral</h5>
                    <p className="text-xs text-gray-400 leading-relaxed">Cette stimulation cutanée envoie des signaux aux régions cérébrales responsables de la régénération et de la gestion de la douleur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="py-24 md:py-32 px-6 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Interactive Diagram */}
            <div className="reveal relative">
              <div className="text-center mb-10 lg:hidden">
                <h2 className="text-4xl font-serif font-bold text-deep mb-4">L'Art du Placement</h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Passez la souris sur un point pour plus d'infos</p>
              </div>
              
              <div className="relative bg-white rounded-[4rem] p-12 shadow-inner border border-gray-100 flex items-center justify-center overflow-hidden">
                {/* Silhouette SVG placeholder - Stylized Minimalist */}
                <svg viewBox="0 0 200 300" className="w-full h-auto max-w-[300px] opacity-10 fill-deep">
                  <path d="M100 20C85 20 75 35 75 50C75 65 85 80 100 80C115 80 125 65 125 50C125 35 115 20 100 20ZM100 85C70 85 40 100 30 130C20 160 25 280 25 280H175C175 280 180 160 170 130C160 100 130 85 100 85Z" />
                </svg>

                {/* Hotspots */}
                {placementSpots.map((spot) => (
                  <button
                    key={spot.id}
                    onMouseEnter={() => setSelectedSpot(spot.id)}
                    onMouseLeave={() => setSelectedSpot(null)}
                    className="absolute w-8 h-8 group"
                    style={{ left: spot.x, top: spot.y }}
                  >
                    <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${spot.id === selectedSpot ? 'bg-gold scale-150' : 'bg-sage'}`}></span>
                    <span className={`relative block w-full h-full rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-125 ${spot.id === selectedSpot ? 'bg-gold' : 'bg-sage'}`}></span>
                  </button>
                ))}

                {/* Info Overlay */}
                <div className={`absolute bottom-8 left-8 right-8 bg-deep text-white p-6 rounded-3xl transition-all duration-500 transform ${selectedSpot ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                   <h4 className="text-gold font-serif text-xl font-bold mb-2">
                     {placementSpots.find(s => s.id === selectedSpot)?.title}
                   </h4>
                   <p className="text-xs text-white/70 leading-relaxed">
                     {placementSpots.find(s => s.id === selectedSpot)?.desc}
                   </p>
                </div>

                {!selectedSpot && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-sage/5 px-6 py-3 rounded-full border border-sage/10 text-[10px] font-black uppercase tracking-[0.2em] text-sage animate-pulse">
                      Explorez les zones de pose
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center gap-12 mt-8 text-[10px] font-black text-gray-300 uppercase tracking-widest">
                <span>Avant</span>
                <span>Arrière</span>
              </div>
            </div>

            {/* Instructions & Warnings */}
            <div className="reveal delay-300">
              <div className="hidden lg:block mb-12">
                <h2 className="text-6xl font-serif font-bold text-deep mb-6 leading-tight">L'Art du <br /><span className="text-gold italic">Placement.</span></h2>
                <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Recommandations d'utilisation</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sage"><Clock /></div>
                  <h4 className="text-deep font-bold text-xs uppercase tracking-widest">Timing Idéal</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Appliquer le patch le matin sur une peau propre et sèche pour une activation durant toute la journée.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gold"><Droplets /></div>
                  <h4 className="text-deep font-bold text-xs uppercase tracking-widest">Hydratation</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Une hydratation optimale est cruciale. Buvez suffisamment d'eau pour faciliter la conduction d'énergie.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-deep"><UserCheck /></div>
                  <h4 className="text-deep font-bold text-xs uppercase tracking-widest">Durée de Pose</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Les patchs peuvent être portés jusqu'à 12 heures avant d'être jetés. Ne pas réutiliser.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sage"><Boxes /></div>
                  <h4 className="text-deep font-bold text-xs uppercase tracking-widest">Conservation</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">À conserver à température ambiante, à l'abri de la lumière directe du soleil.</p>
                </div>
              </div>

              {/* Warnings Box */}
              <div className="bg-gold/5 border border-gold/10 p-8 rounded-[2.5rem] relative overflow-hidden">
                <AlertTriangle className="absolute -top-4 -right-4 w-24 h-24 text-gold/10 rotate-12" />
                <h4 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
                  <ShieldAlert size={14} /> Mise en garde importante
                </h4>
                <div className="space-y-4 text-[10px] font-medium text-gray-500 leading-relaxed uppercase tracking-wider">
                  <p>• Retirer immédiatement en cas de gêne ou d'irritation.</p>
                  <p>• Ne pas utiliser sur des plaies ou une peau abîmée.</p>
                  <p>• Consultez un professionnel si vous avez des préoccupations de santé.</p>
                  <p>• Ne pas utiliser en cas de grossesse ou d'allaitement.</p>
                  <p>• Ne pas utiliser sur les enfants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Ancient Light */}
      <section className="py-32 px-6 bg-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform translate-x-32"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="reveal">
              <div className="inline-flex items-center gap-3 text-gold mb-8">
                <Sun size={32} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Source de Vie</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
                L'Énergie Ancienne <br /><span className="text-gold italic">du Soleil.</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-10 font-medium italic border-l-4 border-gold/30 pl-8">
                "La lumière est une forme d'énergie ancienne qui remonte à l'aube des temps. Pour nous, tout commence avec le Soleil, source de lumière et de vie pour tout notre système solaire."
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold shrink-0 border border-white/10"><Zap /></div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white mb-2">Photosynthèse Humaine</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Comme les plantes collectent la lumière, les humains émettent de la lumière infrarouge. Le patch X39 utilise cette chaleur pour stimuler vos systèmes naturels.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold shrink-0 border border-white/10"><ShieldAlert /></div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white mb-2">Protection Cellulaire</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Les radicaux libres endommagent les protéines cellulaires et accélèrent le vieillissement. La photothérapie aide à les neutraliser naturellement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal delay-300">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[4rem]">
                <h3 className="text-3xl font-serif font-bold text-gold mb-8 italic">Le Processus en 4 Étapes</h3>
                <div className="space-y-8">
                  <div className="relative pl-12 border-l border-gold/20 pb-8 last:pb-0">
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-deep font-bold text-xs">1</div>
                    <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">Application</h5>
                    <p className="text-white/70 font-medium leading-relaxed">Le patch est appliqué sur des points spécifiques du corps.</p>
                  </div>
                  <div className="relative pl-12 border-l border-gold/20 pb-8 last:pb-0">
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-deep font-bold text-xs">2</div>
                    <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">Réflexion</h5>
                    <p className="text-white/70 font-medium leading-relaxed">La lumière infrarouge émise par votre corps est réfléchie dans le tissu cutané.</p>
                  </div>
                  <div className="relative pl-12 border-l border-gold/20 pb-8 last:pb-0">
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-deep font-bold text-xs">3</div>
                    <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">Stimulation</h5>
                    <p className="text-white/70 font-medium leading-relaxed">Cela stimule la peau qui, à son tour, active des régions spécifiques du cerveau.</p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-deep font-bold text-xs">4</div>
                    <h5 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">Autoguérison</h5>
                    <p className="text-white/70 font-medium leading-relaxed">Le cerveau puise dans votre propre flux d'énergie naturel pour activer la guérison.</p>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-gold text-deep rounded-3xl font-bold text-center uppercase tracking-widest text-[10px]">
                  Live Long. Live Well. Live Young.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center text-sage mx-auto mb-10">
            <Sparkles size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep mb-10 leading-tight">
            "Le Soleil est l'origine <br /> de toute <span className="text-gold italic">vie.</span>"
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Les plantes collectent la lumière par photosynthèse. Chez Lightlife, nous croyons que l'être humain peut aussi canaliser cette énergie pour une vitalité optimale.
          </p>
          <div className="mt-12 inline-block border-b-2 border-gold pb-2 text-[10px] font-black uppercase tracking-[0.3em] text-deep">
            Par {CONTACT.name}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
