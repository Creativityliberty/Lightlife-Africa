
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ClipboardCheck } from 'lucide-react';
import { CONTACT } from '../constants';

interface NavbarProps {
  onOpenQuiz: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Univers', path: '/' },
    { name: 'Patch X39', path: '/produit' },
    { name: 'Business', path: '/opportunite' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'h-20 glass' : 'h-28 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gold shadow-xl transition-transform group-hover:scale-110 bg-white flex items-center justify-center p-1">
            <img 
              src={CONTACT.logo} 
              alt="Lightlife Logo" 
              className="w-full h-full object-contain rounded-full"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Light+Life&background=1B3D2F&color=C8A24A";
              }}
            />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter text-deep hidden sm:block">
            Light<span className="text-gold italic">life</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-14">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-extrabold uppercase tracking-[0.3em] transition-all hover:text-gold ${
                location.pathname === link.path ? 'text-sage border-b-2 border-gold pb-1' : 'text-deep'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenQuiz}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-sage hover:text-deep transition-colors"
            >
              <ClipboardCheck size={16} /> Quiz
            </button>
            <a
              href={CONTACT.store}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-deep text-white px-9 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg"
            >
              Acheter
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-deep p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-deep z-[110] flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"><X size={36}/></button>
        <div className="flex flex-col gap-12 text-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-4xl md:text-5xl font-serif font-bold text-white hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => { setIsOpen(false); onOpenQuiz(); }}
            className="text-2xl font-serif text-gold font-bold italic"
          >
            Faire le Quiz Consultation
          </button>
          <a href={CONTACT.store} className="mt-12 bg-gold text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-2xl">
            Boutique Officielle
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
