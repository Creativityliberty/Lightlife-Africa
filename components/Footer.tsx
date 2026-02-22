
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <img src={CONTACT.logo} alt="Logo" className="w-10 h-10 rounded-full border border-gold object-contain" />
            <span className="text-2xl font-serif font-bold text-deep">
              Light<span className="text-gold italic">life</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
            Accompagnement et distribution indépendante des solutions LifeWave à travers le monde. Technologie de photothérapie avancée.
          </p>
          <div className="flex gap-4">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center transition-all hover:bg-sage hover:text-white">
              <Facebook size={20} />
            </a>
            <a href={CONTACT.whatsapp} className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center transition-all hover:bg-gold hover:text-white">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-deep mb-8">Navigation</h4>
          <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            <li><Link to="/" className="hover:text-sage transition-colors">Accueil</Link></li>
            <li><Link to="/produit" className="hover:text-sage transition-colors">Découvrir le X39</Link></li>
            <li><Link to="/opportunite" className="hover:text-sage transition-colors">Business</Link></li>
            <li><a href={CONTACT.store} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">Boutique <ExternalLink size={12}/></a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-deep mb-8">Réseaux & Support</h4>
          <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            <li>Service Client Global</li>
            <li>WhatsApp Support disponible</li>
            <li>Afrique - Europe - Monde</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-deep mb-8">Mentions</h4>
          <p className="text-[10px] text-gray-300 leading-relaxed italic font-medium">
            Disclaimer: Les produits ne sont pas destinés à diagnostiquer, traiter ou prévenir des maladies. Consultez un professionnel de santé avant utilisation. Distributeur indépendant agréé LifeWave.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2024 Lightlife. Tous droits réservés.</p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-300">
          <a href="#" className="hover:text-deep">Privacy</a>
          <a href="#" className="hover:text-deep">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
