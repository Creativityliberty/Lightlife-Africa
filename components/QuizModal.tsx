
import React, { useState } from 'react';
import { X, Send, CheckCircle2, Info, User, Briefcase, ChevronRight, Sparkles, Target, Star } from 'lucide-react';
import { CONTACT } from '../constants';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'selection' | 'client' | 'business'>('selection');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    // Client fields
    wornBefore: '',
    goals: [] as string[],
    symptoms: '',
    budget: '',
    // Business fields
    experience: '',
    motivation: '',
    timeCommitment: '',
    incomeGoal: '',
    source: ''
  });

  if (!isOpen) return null;

  const handleCheckbox = (listName: 'goals', value: string) => {
    setFormData(prev => {
      const list = [...(prev[listName] as string[])];
      if (list.includes(value)) {
        return { ...prev, [listName]: list.filter(item => item !== value) };
      } else {
        return { ...prev, [listName]: [...list, value] };
      }
    });
  };

  const handleClose = () => {
    setStep('selection');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `Bonjour Lionel ! J'ai complété le quiz sur le site Lightlife :\n\n`;
    message += `👤 *Profil:* ${step === 'business' ? 'LEADER BUSINESS' : 'CLIENT BIEN-ÊTRE'}\n`;
    message += `👤 *Nom:* ${formData.name}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    message += `🌍 *Pays:* ${formData.country}\n`;

    if (step === 'client') {
      message += `🔄 *Déjà porté:* ${formData.wornBefore}\n`;
      message += `🎯 *Objectifs:* ${formData.goals.join(', ')}\n`;
      message += `🤒 *Symptômes:* ${formData.symptoms}\n`;
      message += `💰 *Budget:* ${formData.budget}\n`;
    } else {
      message += `📈 *Expérience:* ${formData.experience}\n`;
      message += `🔥 *Motivation:* ${formData.motivation}\n`;
      message += `⏳ *Temps dispo:* ${formData.timeCommitment}\n`;
      message += `💵 *Objectif gains:* ${formData.incomeGoal}\n`;
    }

    message += `📣 *Source:* ${formData.source}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT.whatsappRaw}?text=${encodedMessage}`, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="absolute inset-0 bg-deep/90 backdrop-blur-xl" onClick={handleClose} />
      
      <div className="bg-off-white w-full max-w-2xl max-h-full overflow-y-auto rounded-[3rem] shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300 border border-white/10">
        {/* Header */}
        <div className="sticky top-0 bg-off-white/80 backdrop-blur-md z-20 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold text-deep">Consultation Lightlife</h2>
            <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mt-1 italic">Propulsé par {CONTACT.name}</p>
          </div>
          <button onClick={handleClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-deep">
            <X size={20} />
          </button>
        </div>

        {/* Content Selection */}
        {step === 'selection' && (
          <div className="p-12 space-y-12">
            <div className="text-center">
              <Sparkles className="mx-auto text-gold mb-6" size={48} />
              <h3 className="text-3xl font-serif font-bold text-deep mb-4">Comment pouvons-nous vous aider ?</h3>
              <p className="text-gray-400 font-medium italic">Sélectionnez le parcours qui vous correspond le mieux.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <button 
                onClick={() => setStep('client')}
                className="group p-10 bg-white rounded-[3rem] border border-gray-100 text-left hover:border-sage hover:shadow-2xl hover:shadow-sage/10 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-sage/10 text-sage flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <User size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-deep mb-2">Parcours Santé</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium mb-6 italic">Optimisez votre bien-être et découvrez la photothérapie X39.</p>
                <div className="flex items-center gap-2 text-sage text-[10px] font-black uppercase tracking-widest">
                  Commencer <ChevronRight size={14} />
                </div>
              </button>

              <button 
                onClick={() => setStep('business')}
                className="group p-10 bg-white rounded-[3rem] border border-gray-100 text-left hover:border-gold hover:shadow-2xl hover:shadow-gold/10 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Briefcase size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-deep mb-2">Parcours Business</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium mb-6 italic">Rejoignez notre équipe de leaders et bâtissez un héritage.</p>
                <div className="flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-widest">
                  Candidater <ChevronRight size={14} />
                </div>
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">Confidentialité garantie • Réponse sous 24h</p>
          </div>
        )}

        {/* Forms */}
        {step !== 'selection' && (
          <form onSubmit={handleSubmit} className="p-8 space-y-12">
            <div className="bg-sage/5 p-8 rounded-[2rem] border border-sage/10 text-sm text-deep leading-relaxed italic relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 {step === 'client' ? <User size={64} /> : <Briefcase size={64} />}
               </div>
              "Merci de remplir ce formulaire avec soin. {step === 'client' ? 'Cela me permet de vous proposer un programme personnalisé.' : 'Candidater est la première étape vers votre nouvelle liberté financière.'}"
            </div>

            {/* Identité (Common) */}
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-deep flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-[10px]">1</span> Informations Générales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Nom complet *" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="Email *" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <input required type="text" placeholder="Pays de résidence *" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} />
            </div>

            {/* Client Specific */}
            {step === 'client' && (
              <>
                <div className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-deep flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-[10px]">2</span> Vos Objectifs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Vitalité", "Anti-Âge", "Gestion Douleur", "Performance", "Sommeil", "Clarté Mentale"].map(g => (
                      <label key={g} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 cursor-pointer hover:border-sage transition-all">
                        <input type="checkbox" className="w-5 h-5 accent-sage" checked={formData.goals.includes(g)} onChange={() => handleCheckbox('goals', g)} />
                        <span className="text-xs font-bold text-gray-500">{g}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                   <h3 className="text-xs font-black uppercase tracking-[0.2em] text-deep flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-[10px]">3</span> État actuel
                  </h3>
                  <textarea required placeholder="Symptômes ou besoins particuliers... *" rows={3} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.symptoms} onChange={e => setFormData({...formData, symptoms: e.target.value})} />
                </div>
              </>
            )}

            {/* Business Specific */}
            {step === 'business' && (
              <>
                <div className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-deep flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-[10px]">2</span> Expérience & Motivation
                  </h3>
                  <select required className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})}>
                    <option value="">Avez-vous déjà fait du MLM / Vente ? *</option>
                    <option value="Débutant complet">Débutant complet</option>
                    <option value="Déjà pratiqué">Déjà pratiqué</option>
                    <option value="Leader d'équipe">Leader d'équipe</option>
                    <option value="Expert Réseaux Sociaux">Expert Réseaux Sociaux</option>
                  </select>
                  <textarea required placeholder="Pourquoi souhaitez-vous rejoindre l'équipe Lightlife ? (Votre motivation) *" rows={3} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.motivation} onChange={e => setFormData({...formData, motivation: e.target.value})} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Temps dispo / semaine (ex: 10h) *" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.timeCommitment} onChange={e => setFormData({...formData, timeCommitment: e.target.value})} />
                  <input required type="text" placeholder="Objectif de revenus mensuels *" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.incomeGoal} onChange={e => setFormData({...formData, incomeGoal: e.target.value})} />
                </div>
              </>
            )}

            {/* Source & Submit */}
            <div className="space-y-8">
              <select required className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 outline-none text-sm focus:border-gold" value={formData.source} onChange={e => setFormData({...formData, source: e.target.value})}>
                <option value="">Comment nous avez-vous trouvé ? *</option>
                <option value="Facebook">Facebook</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Bouche à oreille">Bouche à oreille</option>
                <option value="Autre">Autre</option>
              </select>

              <div className="flex flex-col gap-4">
                <button type="submit" className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] ${step === 'business' ? 'bg-gold text-white shadow-gold/20' : 'bg-deep text-white shadow-deep/20'}`}>
                  Envoyer ma demande <Send size={18} />
                </button>
                <button type="button" onClick={() => setStep('selection')} className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-deep transition-colors">Retour au choix</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
