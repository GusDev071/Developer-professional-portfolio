import { useState, useMemo, useEffect } from 'react';
import { db } from '../db/db';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState(t.projects.all);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    db.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return [t.projects.all, ...Array.from(techs)];
  }, [t.projects.all]);

  // Update selectedTech when language changes if the current selection is no longer valid
  useEffect(() => {
    if (!allTechnologies.includes(selectedTech)) {
      setSelectedTech(t.projects.all);
    }
  }, [language, t.projects.all, allTechnologies, selectedTech]);

  const filteredProjects = useMemo(() => {
    return db.filter(project => {
      const description = project.description[language];
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTech = selectedTech === t.projects.all || project.technologies.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchTerm, selectedTech, language, t.projects.all]);

  return (
    <div id="projects" className="min-h-screen w-full px-4 py-12 md:px-8 scroll-mt-32">
      <ScrollReveal animation="animate-slide-in-left">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 hover:text-green-400 transition-colors duration-300">
          {t.projects.title}
        </h2>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto mb-12 space-y-6">
        <ScrollReveal animation="animate-fade-in" delay="delay-100">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between items-center shadow-xl">
            
            <div className="relative w-full md:w-96 group">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-400 transition-colors"></i>
              <input 
                type="text"
                placeholder={t.projects.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:bg-black/40 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-4 w-full md:w-auto justify-end">
              <div className="relative group">
                <i className="fa-solid fa-filter absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"></i>
                <select 
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="appearance-none bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-10 text-white focus:outline-none focus:border-green-400/50 focus:bg-black/40 transition-all cursor-pointer min-w-[180px]"
                >
                  {allTechnologies.map(tech => (
                    <option key={tech} value={tech} className="bg-gray-900 text-white">
                      {tech}
                    </option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>

              <div className="flex bg-black/20 rounded-xl p-1 border border-white/10">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <i className="fa-solid fa-border-all"></i>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <i className="fa-solid fa-list"></i>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} animation="animate-fade-in" delay={`delay-${(index % 3 + 1) * 100}`}>
              <div className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 flex ${viewMode === 'list' ? 'flex-col md:flex-row h-full' : 'flex-col h-full'}`}>
                
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-full md:w-2/5 h-64 md:h-auto' : 'w-full h-56'}`}>
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={`/img/${project.image}`} 
                    alt={project.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.state[language].includes(t.projects.active) ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                      {project.state[language]}
                    </span>
                  </div>
                </div>

                <div className={`p-6 flex flex-col grow ${viewMode === 'list' ? 'w-full md:w-3/5' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed grow">
                    {project.description[language]}
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/5 hover:border-green-400/30 hover:text-green-400 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-green-400 font-semibold transition-colors group/link"
                        >
                          {t.projects.viewProject}
                          <i className="fa-solid fa-arrow-up-right-from-square text-sm transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"></i>
                        </a>
                      )}
                      {!project.url && (
                         <span className="text-gray-500 cursor-not-allowed flex items-center gap-2">
                           <i className="fa-solid fa-lock"></i> {t.projects.private}
                         </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-white/5 mb-4">
              <i className="fa-solid fa-ghost text-4xl text-gray-500"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{t.projects.noResults}</h3>
            <p className="text-gray-400">{t.projects.tryAgain}</p>
          </div>
        )}
      </div>
    </div>
  );
}