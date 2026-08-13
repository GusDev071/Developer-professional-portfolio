import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { href: '#about', label: t.navbar.about },
    { href: '#projects', label: t.navbar.projects },
    { href: '#contact', label: t.navbar.contact },
  ];

  return (
    <>
      <header
        className={`nav-shell transition-[background,backdrop-filter,border-color] duration-300 ${
          scrolled
            ? 'bg-ink/75 backdrop-blur-xl border-b border-line-soft'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-5 md:px-6 transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5 md:py-6'
          }`}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            {/* Language — left */}
            <div className="flex items-center gap-2 justify-self-start mono text-[11px] tracking-[0.14em]">
              <button
                type="button"
                onClick={() => toggleLanguage('es')}
                className={`transition-colors ${language === 'es' ? 'text-signal' : 'text-fog hover:text-mist'}`}
                aria-pressed={language === 'es'}
              >
                ES
              </button>
              <span className="text-line">/</span>
              <button
                type="button"
                onClick={() => toggleLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-signal' : 'text-fog hover:text-mist'}`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>

            {/* Mark — center */}
            <a
              href="#"
              className="justify-self-center display text-sm md:text-base font-bold tracking-tight text-paper hover:text-signal transition-colors"
            >
              GF
            </a>

            {/* Desktop links + mobile trigger — right */}
            <div className="justify-self-end flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
                {links.map((item) => (
                  <a key={item.href} href={item.href} className="nav-link">
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                className="md:hidden mono text-[11px] tracking-[0.16em] uppercase text-mist hover:text-paper transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                Menu
              </button>
            </div>
          </div>

          <div
            className={`mt-3 h-px w-full transition-opacity duration-300 ${
              scrolled ? 'bg-line opacity-100' : 'bg-line-soft opacity-60'
            }`}
          />
        </div>
      </header>

      {menuOpen && (
        <div className="nav-overlay md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute top-6 right-5 mono text-[11px] tracking-[0.16em] uppercase text-mist hover:text-paper"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>

          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
