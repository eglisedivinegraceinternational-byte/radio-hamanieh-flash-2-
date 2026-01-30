
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AudioPlayer from './components/AudioPlayer';
import { RADIO_NAME, WHATSAPP_LINK, FACEBOOK_LINK, TIKTOK_LINK, PHONE_NUMBER } from './constants';
import { AppView } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [playerStatus, setPlayerStatus] = useState<'playing' | 'paused' | 'loading'>('paused');

  const renderContent = () => {
    switch (currentView) {
      case AppView.ABOUT:
        return (
          <div className="p-8 max-w-2xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gold border-b border-gold/30 pb-4">À propos</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hamanieh Flash est votre station de radio dynamique dédiée à vous apporter le meilleur de la musique, de l'information et du divertissement en direct.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Inspirée par l'excellence des plus grandes radios d'Afrique de l'Ouest, nous nous efforçons de créer un lien unique avec nos auditeurs à travers une programmation variée et une interactivité constante.
            </p>
            <div className="pt-6">
               <button 
                onClick={() => setCurrentView(AppView.HOME)}
                className="px-6 py-3 bg-gold text-navy font-bold rounded-full hover:scale-105 transition-transform"
               >
                 Retour à l'accueil
               </button>
            </div>
          </div>
        );
      case AppView.HOME:
      default:
        return <AudioPlayer onStatusChange={(status) => setPlayerStatus(status)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-navy text-white">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-navy opacity-80 z-10"></div>
        <img 
          src="https://picsum.photos/seed/studio/1200/800" 
          alt="Radio Background" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        {/* Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold opacity-10 rounded-full blur-[100px]"></div>
      </div>

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={(view: AppView) => setCurrentView(view)}
      />

      {/* Top Header */}
      <header className="z-30 glass-panel px-6 py-4 flex items-center justify-between sticky top-0 shadow-xl">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="w-12 h-12 flex items-center justify-center text-gold text-2xl hover:bg-gold/10 rounded-full transition-colors"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        
        <div className="flex flex-col items-center">
          <span className="font-bold text-gold text-xl tracking-tighter uppercase">{RADIO_NAME}</span>
          {playerStatus === 'playing' && (
            <span className="text-[10px] text-green-400 animate-pulse font-bold tracking-widest uppercase">EN DIRECT</span>
          )}
        </div>

        <div className="w-12 h-12 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40">
             <i className="fa-solid fa-bolt text-gold text-sm"></i>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 z-20 flex flex-col justify-center overflow-y-auto">
        {renderContent()}
      </main>

      {/* Footer Social Bar */}
      <footer className="z-30 px-6 py-6 glass-panel border-t border-gold/20 flex justify-center gap-6">
        <a 
          href={FACEBOOK_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-navy border border-gold/30 rounded-xl flex items-center justify-center text-gold text-2xl hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a 
          href={TIKTOK_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-navy border border-gold/30 rounded-xl flex items-center justify-center text-gold text-2xl hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-navy border border-gold/30 rounded-xl flex items-center justify-center text-gold text-2xl hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="w-12 h-12 bg-navy border border-gold/30 rounded-xl flex items-center justify-center text-gold text-2xl hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
