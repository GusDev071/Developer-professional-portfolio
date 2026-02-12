import { useState } from 'react';
import TypingEffect from './TypingEffect';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleDropdown = () => setIsLangOpen(!isLangOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur-lg border border-white/50 
            rounded-2xl shadow-lg p-4 m-4 md:m-10 flex flex-col md:flex-row justify-between items-center overflow-visible animate-slide-down">
         
         <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden rounded-2xl">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
         </div>

         <h1 className="text-2xl font-bold text-white text-start z-10 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default font-mono tracking-tighter mb-4 md:mb-0">
            <span className="text-green-400 font-extrabold">&lt;</span>
            <TypingEffect text="  Gustavo Flores " speed={150} />
            <span className="text-green-400 font-extrabold"> /&gt;</span>
         </h1>
            
         <div className="flex items-center gap-6 z-10">
            <ul className="flex space-x-4 text-center justify-center">
                <li className="animate-fade-in delay-100"><a href="#about" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">{t.navbar.about}</a></li>
                <li className="animate-fade-in delay-200"><a href="#projects" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">{t.navbar.projects}</a></li>
                <li className="animate-fade-in delay-300"><a href="#contact" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">{t.navbar.contact}</a></li>
            </ul>

            {/* Language Dropdown */}
            <div className="relative">
                <button 
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 text-white hover:text-green-400 transition-all duration-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 hover:bg-white/20 backdrop-blur-md"
                >
                    <i className="fa-solid fa-globe"></i>
                    <span className="font-mono font-bold">{language.toUpperCase()}</span>
                    <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden flex flex-col animate-fade-in z-50">
                        <button 
                            onClick={() => { toggleLanguage('es'); setIsLangOpen(false); }}
                            className={`px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-2 ${language === 'es' ? 'text-green-400 font-bold bg-white/5' : 'text-white'}`}
                        >
                            <span className="text-lg">🇪🇸</span> ES
                        </button>
                        <button 
                            onClick={() => { toggleLanguage('en'); setIsLangOpen(false); }}
                            className={`px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-2 ${language === 'en' ? 'text-green-400 font-bold bg-white/5' : 'text-white'}`}
                        >
                             <span className="text-lg">🇺🇸</span> EN
                        </button>
                    </div>
                )}
            </div>
         </div>
      </nav>
    </>
  )
}
