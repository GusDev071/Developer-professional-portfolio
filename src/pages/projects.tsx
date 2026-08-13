import { useState, useMemo, useEffect } from 'react';
import { db } from '../db/db';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState(t.projects.all);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    db.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return [t.projects.all, ...Array.from(techs)];
  }, [t.projects.all]);

  useEffect(() => {
    if (!allTechnologies.includes(selectedTech)) {
      setSelectedTech(t.projects.all);
    }
  }, [language, t.projects.all, allTechnologies, selectedTech]);

  const filteredProjects = useMemo(() => {
    return db.filter((project) => {
      const description = project.description[language];
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech =
        selectedTech === t.projects.all || project.technologies.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchTerm, selectedTech, language, t.projects.all]);

  return (
    <div id="projects" className="scroll-mt-28 mx-auto max-w-6xl px-5 md:px-6 py-20 md:py-28">
      <ScrollReveal>
        <div className="border-b border-line pb-8 md:pb-10 mb-10 md:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="mono text-[11px] tracking-[0.18em] uppercase text-fog mb-3">
                03 / {t.projects.title}
              </p>
              <h2 className="display text-4xl md:text-6xl font-extrabold text-paper">
                {t.projects.title}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end gap-5 w-full lg:w-auto lg:min-w-[460px]">
              <label className="flex-1 block">
                <span className="mono text-[10px] tracking-[0.14em] uppercase text-fog">Search</span>
                <input
                  type="text"
                  placeholder={t.projects.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="field-line mt-1"
                />
              </label>

              <label className="sm:w-40 block">
                <span className="mono text-[10px] tracking-[0.14em] uppercase text-fog">Stack</span>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="field-line field-line-select mt-1"
                >
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </label>

              <div className="flex items-center gap-4 pb-2 mono text-[11px] tracking-[0.12em] uppercase">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`transition-colors ${viewMode === 'list' ? 'text-signal' : 'text-fog hover:text-mist'}`}
                  aria-pressed={viewMode === 'list'}
                >
                  List
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`transition-colors ${viewMode === 'grid' ? 'text-signal' : 'text-fog hover:text-mist'}`}
                  aria-pressed={viewMode === 'grid'}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-x-6 gap-y-14' : 'space-y-16 md:space-y-24'}>
        {filteredProjects.map((project, index) => {
          const isActive = project.state[language].includes(t.projects.active);
          const number = String(index + 1).padStart(2, '0');
          const reverse = viewMode === 'list' && index % 2 === 1;

          return (
            <ScrollReveal key={project.id} delay={`delay-${(index % 3 + 1) * 100}`}>
              <article
                className={`case group ${
                  viewMode === 'list'
                    ? `grid lg:grid-cols-12 gap-6 lg:gap-10 items-center ${reverse ? '' : ''}`
                    : 'flex flex-col gap-5'
                }`}
              >
                {/* Media */}
                <div
                  className={`case-media relative ${
                    viewMode === 'list'
                      ? `lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`
                      : 'aspect-[16/10]'
                  }`}
                >
                  <div className={viewMode === 'list' ? 'aspect-[16/10] lg:aspect-[5/3]' : 'h-full'}>
                    <img src={`/img/${project.image}`} alt={project.name} />
                  </div>

                  {/* Bottom gradient strip with index — product feel */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />
                  <div className="absolute left-4 bottom-4 flex items-center gap-3">
                    <span className="case-index text-paper/80">{number}</span>
                    <span className={`case-status ${isActive ? '' : 'is-done'}`}>
                      {project.state[language]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    viewMode === 'list'
                      ? `lg:col-span-5 ${reverse ? 'lg:order-1 lg:text-right' : ''}`
                      : ''
                  } flex flex-col ${viewMode === 'list' ? 'justify-center' : ''}`}
                >
                  <h3 className="display text-2xl md:text-3xl lg:text-[2.1rem] font-extrabold text-paper leading-[1.05] mb-4">
                    {project.name}
                  </h3>

                  <p
                    className={`text-[0.95rem] md:text-base text-mist leading-relaxed mb-5 ${
                      reverse && viewMode === 'list' ? 'lg:ml-auto' : ''
                    } max-w-md`}
                  >
                    {project.description[language]}
                  </p>

                  <p
                    className={`case-meta mb-7 ${
                      reverse && viewMode === 'list' ? 'lg:ml-auto' : ''
                    } max-w-md`}
                  >
                    {project.technologies.join('  ·  ')}
                  </p>

                  <div className={reverse && viewMode === 'list' ? 'lg:flex lg:justify-end' : ''}>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-action"
                      >
                        {t.projects.viewProject}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <span className="mono text-xs tracking-[0.1em] uppercase text-fog">
                        {t.projects.private}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-24 border-t border-line text-center">
          <p className="display text-2xl font-bold text-paper mb-2">{t.projects.noResults}</p>
          <p className="text-sm text-mist">{t.projects.tryAgain}</p>
        </div>
      )}
    </div>
  );
}
