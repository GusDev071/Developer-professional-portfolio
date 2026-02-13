import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright & Name */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 font-medium">
            &copy; {currentYear} <span className="text-white font-bold">Gustavo Flores</span>. {t.footer.rights}.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/gustavo-flores-cadena-b972152ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-green-500/20 hover:scale-110 transition-all duration-300 border border-transparent hover:border-green-500/30"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-xl"></i>
          </a>
          
          <a 
            href="https://github.com/GusDev071" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-green-500/20 hover:scale-110 transition-all duration-300 border border-transparent hover:border-green-500/30"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-xl"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}
