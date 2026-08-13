import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

type Level = 'intermediate' | 'advanced' | 'learning';

interface TechItem {
  name: string;
  icon: string | null;
  img?: string;
  color: string;
  level: Level;
}

export default function About() {
  const { t } = useLanguage();

  const frontendTechs: TechItem[] = [
    { name: 'Angular', icon: 'fa-brands fa-angular', color: 'text-red-400', level: 'intermediate' },
    { name: 'React', icon: 'fa-brands fa-react', color: 'text-cyan-300', level: 'learning' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'text-yellow-300', level: 'advanced' },
    { name: 'TypeScript', icon: null, img: '/img/typescript-official-svgrepo-com.svg', color: '', level: 'learning' },
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: 'text-orange-400', level: 'advanced' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: 'text-blue-400', level: 'advanced' },
    { name: 'Tailwind', icon: 'fa-solid fa-wind', color: 'text-sky-300', level: 'intermediate' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: 'text-purple-400', level: 'intermediate' },
  ];

  const backendTechs: TechItem[] = [
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-green-400', level: 'intermediate' },
    { name: 'Python', icon: 'fa-brands fa-python', color: 'text-yellow-200', level: 'intermediate' },
    { name: 'SQL', icon: 'fa-solid fa-database', color: 'text-blue-300', level: 'advanced' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: 'text-emerald-400', level: 'intermediate' },
    { name: 'PHP', icon: 'fa-brands fa-php', color: 'text-indigo-300', level: 'intermediate' },
    { name: 'TypeScript', icon: null, img: '/img/typescript-official-svgrepo-com.svg', color: '', level: 'learning' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'text-yellow-300', level: 'advanced' },
  ];

  const pillars = [
    { n: '01', title: t.about.frontendDev.title, desc: t.about.frontendDev.desc },
    {
      n: '02',
      title: t.about.techStack.title,
      desc: `${t.about.techStack.desc} Angular ${t.about.techStack.and} React, ${t.about.techStack.rest}`,
    },
    { n: '03', title: t.about.innovation.title, desc: t.about.innovation.desc },
  ];

  return (
    <div id="about" className="scroll-mt-28">
      <section className="mx-auto max-w-6xl px-5 md:px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
            <div className="lg:col-span-5">
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-fog mb-4">
                01 / {t.about.title}
              </p>
              <h2 className="display text-4xl md:text-5xl font-extrabold text-paper">
                {t.about.title}
              </h2>
            </div>
            <p className="lg:col-span-7 text-mist text-base md:text-lg leading-relaxed lg:pt-10">
              {t.about.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 border-t border-line pt-10">
          {pillars.map((item, i) => (
            <ScrollReveal key={item.n} delay={`delay-${(i + 1) * 100}`}>
              <article className="space-y-4">
                <p className="mono text-[11px] tracking-[0.16em] text-signal">{item.n}</p>
                <h3 className="display text-xl md:text-2xl font-bold text-paper">{item.title}</h3>
                <p className="text-sm md:text-[0.95rem] text-mist leading-relaxed">{item.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="delay-200">
          <div className="mt-16 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 border-t border-line pt-10">
            {[
              { label: t.about.years, value: '2+' },
              { label: t.about.projects, value: '8+' },
              { label: t.about.experience, value: 'FS' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="display text-3xl md:text-5xl font-extrabold text-paper mb-2">{stat.value}</p>
                <p className="mono text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-fog">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-line-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <ScrollReveal>
            <div className="mb-12 md:mb-16 max-w-2xl">
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-fog mb-4">
                02 / {t.about.technologies}
              </p>
              <h2 className="display text-4xl md:text-5xl font-extrabold text-paper">
                {t.about.sections.frontend}{' '}
                <span className="text-fog">&</span> {t.about.sections.backend}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-14">
            <div>
              <ScrollReveal animation="animate-from-left">
                <h3 className="mono text-[11px] tracking-[0.2em] uppercase text-fog mb-8">
                  {t.about.sections.frontend}
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
                {frontendTechs.map((tech, i) => (
                  <ScrollReveal key={`f-${tech.name}`} delay={`delay-${((i % 4) + 1) * 100}`}>
                    <div className="tech-tile">
                      {tech.icon ? (
                        <i className={`${tech.icon} tech-icon text-xl ${tech.color} mb-3 block`} />
                      ) : (
                        <img src={tech.img} alt={tech.name} className="tech-icon w-6 h-6 mb-3" />
                      )}
                      <p className="text-sm font-semibold text-paper mb-1">{tech.name}</p>
                      <p className="level-mark">{t.about.levels[tech.level]}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <ScrollReveal animation="animate-from-right">
                <h3 className="mono text-[11px] tracking-[0.2em] uppercase text-fog mb-8">
                  {t.about.sections.backend}
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
                {backendTechs.map((tech, i) => (
                  <ScrollReveal key={`b-${tech.name}-${i}`} delay={`delay-${((i % 4) + 1) * 100}`}>
                    <div className="tech-tile">
                      {tech.icon ? (
                        <i className={`${tech.icon} tech-icon text-xl ${tech.color} mb-3 block`} />
                      ) : (
                        <img src={tech.img} alt={tech.name} className="tech-icon w-6 h-6 mb-3" />
                      )}
                      <p className="text-sm font-semibold text-paper mb-1">{tech.name}</p>
                      <p className="level-mark">{t.about.levels[tech.level]}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
