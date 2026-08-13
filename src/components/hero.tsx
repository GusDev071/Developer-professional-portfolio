import TypingEffect from './TypingEffect';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const techPills = [
    { name: 'Angular', icon: 'fa-brands fa-angular', color: 'text-red-400' },
    { name: 'React', icon: 'fa-brands fa-react', color: 'text-cyan-300' },
    { name: 'TypeScript', icon: 'fa-solid fa-code', color: 'text-blue-400' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-green-400' },
    { name: 'Tailwind', icon: 'fa-solid fa-wind', color: 'text-sky-300' },
  ];

  return (
    <section className="relative min-h-[92svh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Hero Ambient Radial Glow */}
      <div 
        className="absolute top-1/4 right-5 md:right-20 w-80 md:w-[480px] h-80 md:h-[480px] bg-signal/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow -z-10" 
        aria-hidden="true" 
      />

      {/* Decorative Technical Grid Crosshairs */}
      <span className="hidden lg:block absolute top-28 left-8 mono text-[10px] text-fog/40 select-none">+ 19.26° N</span>
      <span className="hidden lg:block absolute top-28 right-8 mono text-[10px] text-fog/40 select-none">98.89° W +</span>
      <span className="hidden lg:block absolute bottom-12 left-8 mono text-[10px] text-fog/40 select-none">[SYS_READY]</span>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column — Content & Hero Pitch */}
          <div className="lg:col-span-7 space-y-7 md:space-y-8">
            
            {/* Status & Availability Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel/90 border border-line-soft backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
                </span>
                <span className="mono text-[11px] uppercase tracking-[0.14em] text-paper/90 font-medium">
                  {t.hero.available}
                </span>
              </div>
              <span className="mono text-[11px] tracking-[0.14em] text-fog uppercase hidden sm:inline-block">
                • {t.hero.location}
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="display font-extrabold text-paper text-[clamp(3.4rem,9vw,5.6rem)] leading-none tracking-tight">
                {t.hero.greeting}
              </h1>
              <div className="flex items-center gap-3 mt-1 md:mt-2">
                <p className="display text-3xl md:text-5xl font-bold tracking-tight text-mist">
                  {t.hero.surname}
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-signal inline-block mt-2" />
              </div>
            </div>

            {/* Code / Typing Box */}
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-panel-2/90 border border-line mono text-xs md:text-sm text-mist">
                <span className="text-signal font-semibold">&lt;</span>
                <TypingEffect text={t.hero.typing} speed={100} />
                <span className="text-signal font-semibold">&gt;</span>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-mist">
                {t.hero.description}{' '}
                <span className="text-paper font-semibold hover:text-signal transition-colors cursor-default">Angular</span>{' '}
                {t.hero.and}{' '}
                <span className="text-paper font-semibold hover:text-signal transition-colors cursor-default">React</span>.
              </p>
            </div>

            {/* Interactive Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {techPills.map((tech) => (
                <span key={tech.name} className="hero-tech-pill group cursor-default">
                  <i className={`${tech.icon} ${tech.color} text-xs transition-transform group-hover:scale-110`} />
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* CTAs and Social Quick Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
              <a href="#projects" className="link-action-fill group">
                <span>{t.hero.viewProjects}</span>
                <span className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden>↓</span>
              </a>
              <a href="#contact" className="link-action group">
                <span>{t.hero.contactMe}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
              </a>

              {/* Quick Social Icons */}
              <div className="flex items-center gap-3.5 ml-auto sm:ml-0 pl-0 sm:pl-4 border-l-0 sm:border-l border-line-soft py-1">
                <a
                  href="https://github.com/GusDev071"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-fog hover:text-signal transition-colors text-base"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavo-flores-cruz-6950282b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-fog hover:text-signal transition-colors text-base"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column — High-Tech Blueprint HUD Profile Frame */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:ml-auto animate-float-soft">
              
              {/* Backlight Glow */}
              <div className="absolute -inset-3 bg-signal/15 blur-2xl rounded-2xl pointer-events-none" />

              {/* HUD Container Card */}
              <figure className="relative bg-panel/90 border border-line p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-xl group">
                
                {/* Floating Top Tag */}
                <div className="absolute -top-3 -right-2 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/90 border border-line-soft text-[11px] mono text-paper shadow-lg backdrop-blur-md">
                  <span className="text-signal">⚡</span>
                  <span>{t.hero.specialty}</span>
                </div>

                {/* Corner HUD Brackets */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-signal/60" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-signal/60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-signal/60" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-signal/60" />

                {/* Profile Picture */}
                <div className="overflow-hidden border border-line-soft rounded-lg relative">
                  <img
                    src="/img/GFC.png"
                    alt="Gustavo Flores"
                    className="w-full aspect-[4/5] object-cover filter saturate-[0.9] contrast-[1.05] group-hover:scale-[1.03] group-hover:saturate-100 transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Blueprint Card Footer */}
                <figcaption className="mt-3.5 pt-2 flex items-center justify-between border-t border-line-soft/80">
                  <div>
                    <p className="mono text-[10px] tracking-[0.16em] uppercase text-signal font-semibold">
                      {t.hero.developer}
                    </p>
                    <p className="text-xs text-mist font-medium mt-0.5">
                      {t.hero.roleTag}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="mono text-[11px] text-paper font-semibold">
                      {t.hero.experienceShort}
                    </p>
                    <p className="mono text-[9px] text-fog uppercase tracking-wider">
                      [01 // PORTFOLIO]
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

