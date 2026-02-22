
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BusinessPage from './pages/BusinessPage';
import QuizModal from './components/QuizModal';

const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animation Reveal Logic
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <Router>
      <ScrollHandler />
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuiz={() => setIsQuizOpen(true)} />} />
            <Route path="/produit" element={<ProductPage onOpenQuiz={() => setIsQuizOpen(true)} />} />
            <Route path="/opportunite" element={<BusinessPage onOpenQuiz={() => setIsQuizOpen(true)} />} />
          </Routes>
        </main>
        <Footer />
        <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
