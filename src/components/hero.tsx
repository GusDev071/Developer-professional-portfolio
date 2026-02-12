import TypingEffect from './TypingEffect';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
            
            {/* Big Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
                <h1 className="text-[15vw] md:text-[15vw] font-black text-white/20 whitespace-nowrap text-center leading-none animate-pulse-slow">
                    {t.hero.developer}
                </h1>
            </div>

            {/* Visual Element / Photo */}
            <div className="relative z-10 mb-11 animate-fade-in mt-7">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                     <img 
                        src="/img/GFC.png" 
                        alt="Gustavo Cadena" 
                        className="relative w-full h-full object-cover rounded-full z-10 "
                    />            
                </div>
            </div>

            {/* Foreground Text */}
            <div className="relative z-20 space-y-4 animate-slide-up">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                    {t.hero.greeting} <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">{t.hero.surname}</span>
                </h2>
                
                <p className="text-2xl md:text-3xl font-light text-gray-300 tracking-wide font-mono">
                    &lt;<TypingEffect text={t.hero.typing} speed={150} />&gt;
                </p>

                <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed pt-4">
                    {t.hero.description} <span className="text-green-400 font-semibold">Angular</span> {t.hero.and} <span className="text-cyan-400 font-semibold">React</span>.
                </p>
                
                <div className="flex justify-center gap-6 pt-8">
                     <a href="#projects" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-1">
                        {t.hero.viewProjects}
                    </a>
                     <a href="#contact" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1">
                        {t.hero.contactMe}
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
