
import React from 'react';
import { Zap, Sun, ShieldCheck, HeartPulse, Activity, Sparkles, Target, Clock, Calendar, RefreshCw, History } from 'lucide-react';

export const COLORS = {
  sage: '#7A9B8A',
  deepGreen: '#1B3D2F',
  gold: '#C8A24A',
  offWhite: '#FBFBF9'
};

export const CONTACT = {
  whatsapp: 'https://wa.me/33745434264',
  whatsappRaw: '33745434264',
  phone: '+33 7 45 43 42 64',
  name: 'Lionel TAGNE',
  facebook: 'https://www.facebook.com/profile.php?id=61581808582848',
  store: 'https://lifewave.com/Ltagne',
  logo: 'https://github.com/user-attachments/assets/6584284b-0925-4c6e-8120-0322306f6932',
  inquiry: 'https://api.leadconnectorhq.com/widget/form/WY3FbwYrkrdXMUJ5kylX'
};

export const TESTIMONIALS = [
  {
    name: "Anna Hughes Cambry",
    category: "Migraines & Peau",
    quote: "Résultats instantanés pour moi ! Mes migraines sont tombées à presque zéro, mes douleurs chroniques ont disparu, mes cheveux poussent et ma peau est magnifique. 2 ans de bonheur avec les patchs.",
    image: "https://i.pravatar.cc/150?u=anna",
    benefitImage: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1000",
    stars: 5
  },
  {
    name: "Gil Remesal",
    category: "Douleurs Articulaires",
    quote: "J'utilise X39 depuis 3 mois. Grandes améliorations sur mon sommeil et réduction de mes douleurs au genou et au cou de 8/10 à 2/10. Parfois, la douleur n'est même plus là !",
    image: "https://i.pravatar.cc/150?u=gil",
    benefitImage: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1000",
    stars: 5
  },
  {
    name: "Karon Lacefield",
    category: "Vitalité & Anti-Âge",
    quote: "C'est la vérité réaliste. Pour moi, les patchs ont apporté des améliorations progressives au cours de l'année écoulée. J'ai hâte de voir la suite de ma transformation.",
    image: "https://i.pravatar.cc/150?u=karon",
    benefitImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    stars: 5
  },
  {
    name: "Ajobforjesus",
    category: "Récupération Chirurgie",
    quote: "De nombreux résultats merveilleux avec le patch X39. Je me sens plus forte lentement mais sûrement après 3 chirurgies et une chute grave. Je recommande vivement.",
    image: "https://i.pravatar.cc/150?u=ajob",
    benefitImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
    stars: 5
  }
];

export const TIMELINE = [
  {
    period: "24 Heures",
    title: "Réinitialisation Génétique",
    desc: "Le patch commence à réinitialiser 3 000 à 4 000 gènes vers un état plus jeune. Augmentation des antioxydants et baisse de l'inflammation.",
    icon: <Clock />
  },
  {
    period: "1-3 Mois",
    title: "Changements Physiques",
    desc: "Augmentation du collagène, diminution des rides et pousse des cheveux. Vos cellules souches régénèrent vos tissus internes.",
    icon: <Calendar />
  },
  {
    period: "3-6 Mois",
    title: "Réparation Active",
    desc: "Les cellules souches se transforment en n'importe quelle cellule dont votre corps a besoin pour réparer les dommages du vieillissement.",
    icon: <RefreshCw />
  },
  {
    period: "6-12 Mois",
    title: "Inversion de l'Âge",
    desc: "Une étude a montré que 14 personnes sur 15 ont réduit leur âge vasculaire de 8 ans en moyenne après 6 mois d'utilisation du X39.",
    icon: <History />
  }
];

export const PRODUCT_IMAGES = {
  main: "https://cdn.sanity.io/images/abq8rp7f/production/c8285added41b9538e20e09424647052dc63736c-7582x5302.png?auto=format",
  carousel: [
    "https://cdn.sanity.io/images/abq8rp7f/production/c8285added41b9538e20e09424647052dc63736c-7582x5302.png?auto=format",
    "https://cdn.sanity.io/images/abq8rp7f/production/f3d35d34c0effd3a495a37388a4b3f2c41a2da66-550x440.jpg?auto=format",
    "https://cdn.sanity.io/images/abq8rp7f/production/0872133fbfb4ac023052f8847a715165c2882c5f-540x440.png?auto=format"
  ]
};

export const BENEFITS = [
  {
    title: "Énergie Optimale",
    text: "Améliore le flux d’énergie par la stimulation lumineuse.",
    icon: <Zap />
  },
  {
    title: "Performance",
    text: "Favorise l'amélioration des performances physiques.",
    icon: <Activity />
  },
  {
    title: "Endurance",
    text: "Améliore la force et la résistance au quotidien.",
    icon: <Target />
  },
  {
    title: "Bien-être Global",
    text: "Soutient une santé éclatante et une vitalité durable.",
    icon: <HeartPulse />
  }
];

export const GUARANTEES = [
  {
    type: "Clients",
    duration: "90 JOURS",
    title: "Essai sans problème",
    desc: "Garantie de remboursement de la première commande. Remboursement intégral sans renvoi requis."
  },
  {
    type: "Brand Partners",
    duration: "30 JOURS",
    title: "Essai sans risque",
    desc: "Garantie de remboursement de la première commande d'inscription."
  },
  {
    type: "Standard",
    duration: "30 JOURS",
    title: "Politique de retour",
    desc: "Disponible pour toute commande classique pour produits non ouverts."
  }
];

export const SCIENCE = {
  phototherapy: {
    title: "L'Énergie Ancienne de la Lumière",
    text: "La lumière est une forme d'énergie ancienne qui remonte à l'aube des temps. Pour nous, tout commence avec le Soleil, source de lumière et de vie pour tout notre système solaire."
  },
  howItWorks: {
    title: "Le Processus de Réflexion Humaine",
    text: "Même Einstein a conclu que tout ce dont nous sommes faits contient de la lumière. Comme les plantes par la photosynthèse, les humains émettent de la lumière infrarouge que le patch X39 réfléchit pour stimuler l'autoguérison."
  }
};
