import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
    <div id="about" className="overflow-hidden w-full flex justify-center scroll-mt-32">
        <section className="max-w-7xl mx-auto px-4 py-10 w-full">
            <ScrollReveal animation="animate-slide-in-left">
                <h2 className="text-6xl font-bold text-white text-center mb-16 hover:text-green-400 transition-colors duration-300">{t.about.title}</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 px-4">
                <ScrollReveal animation="animate-fade-in" delay="delay-100">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/30 group shadow-lg hover:shadow-green-500/10">
                        <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                            <i className="fa-solid fa-code text-3xl text-green-400"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t.about.frontendDev.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {t.about.frontendDev.desc}
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="animate-fade-in" delay="delay-300">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 group shadow-lg hover:shadow-blue-500/10">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                            <i className="fa-solid fa-layer-group text-3xl text-blue-400"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t.about.techStack.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {t.about.techStack.desc} <span className="text-red-400 font-semibold">Angular</span> {t.about.techStack.and} <span className="text-cyan-400 font-semibold">React</span>, {t.about.techStack.rest}
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="animate-fade-in" delay="delay-500">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 group shadow-lg hover:shadow-purple-500/10">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                            <i className="fa-solid fa-rocket text-3xl text-purple-400"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t.about.innovation.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {t.about.innovation.desc}
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </div>
    <div className="grid md:grid-cols-1 justify-center items-center">
        <ScrollReveal animation="animate-fade-in" delay="delay-200">
             <h3 className="text-6xl font-bold text-white text-center z-10 m-10 hover:text-green-400 transition-colors duration-300">{t.about.technologies}</h3>
        </ScrollReveal>
    </div>
    <div className="grid md:grid-cols-2 overflow-hidden justify-items-center pb-24">
       <section>
          <ScrollReveal animation="animate-slide-in-left" delay="delay-300">
             <h2 className="text-4xl font-bold text-white text-center z-10 m-10 hover:text-green-400 transition-colors duration-300">{t.about.sections.frontend}</h2>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center items-center z-10 m-10 gap-8 gap-y-16">
            {/* Angular */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer">
                    <i className="fa-brands fa-angular text-6xl text-red-500 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">Angular</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* React */}
            <ScrollReveal animation="animate-fade-in" delay="delay-200">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] cursor-pointer">
                    <i className="fa-brands fa-react text-6xl text-cyan-400 drop-shadow-lg transition-transform duration-700 group-hover:animate-spin"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">React</span>
                        <span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full mt-1 border border-yellow-500/20">{t.about.levels.learning}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* JavaScript */}
            <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] cursor-pointer">
                    <i className="fa-brands fa-js text-6xl text-yellow-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">JavaScript</span>
                        <span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full mt-1 border border-green-500/20">{t.about.levels.advanced}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* TypeScript */}
            <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer">
                    <img src="/img/typescript-official-svgrepo-com.svg" alt="TypeScript" className="w-16 h-16 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">TypeScript</span>
                        <span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full mt-1 border border-yellow-500/20">{t.about.levels.learning}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* HTML5 */}
            <ScrollReveal animation="animate-fade-in" delay="delay-400">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] cursor-pointer">
                    <i className="fa-brands fa-html5 text-6xl text-orange-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">HTML5</span>
                        <span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full mt-1 border border-green-500/20">{t.about.levels.advanced}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* CSS3 */}
            <ScrollReveal animation="animate-fade-in" delay="delay-500">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer">
                    <i className="fa-brands fa-css3-alt text-6xl text-blue-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">CSS3</span>
                        <span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full mt-1 border border-green-500/20">{t.about.levels.advanced}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* Tailwind CSS */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] cursor-pointer">
                    <i className="fa-solid fa-wind text-6xl text-cyan-400 drop-shadow-lg transition-transform duration-500 group-hover:translate-x-2"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">Tailwind</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* Bootstrap */}
            <ScrollReveal animation="animate-fade-in" delay="delay-200">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-purple-600/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] cursor-pointer">
                    <i className="fa-brands fa-bootstrap text-6xl text-purple-600 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">Bootstrap</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>
          </div>

       </section>
       <section>
        <ScrollReveal animation="animate-slide-in-right" delay="delay-300">
            <h2 className="text-4xl font-bold text-white text-center z-10 m-10 hover:text-green-400 transition-colors duration-300">{t.about.sections.backend}</h2>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center z-10 m-10 gap-8 gap-y-16">
            {/* Node.js */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer">
                    <i className="fa-brands fa-node-js text-6xl text-green-500 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">Node.js</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* Python */}
            <ScrollReveal animation="animate-fade-in" delay="delay-200">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] cursor-pointer">
                    <i className="fa-brands fa-python text-6xl text-yellow-400 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">Python</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>

             {/* SQL */}
             <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] cursor-pointer">
                    <i className="fa-solid fa-database text-6xl text-blue-400 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">SQL</span>
                        <span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full mt-1 border border-green-500/20">{t.about.levels.advanced}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* MongoDB */}
            <ScrollReveal animation="animate-fade-in" delay="delay-400">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-600/50 hover:shadow-[0_0_20px_rgba(22,163,74,0.6)] cursor-pointer">
                    <i className="fa-solid fa-leaf text-6xl text-green-600 drop-shadow-lg transition-transform duration-500 group-hover:rotate-45"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">MongoDB</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>

             {/* PHP */}
             <ScrollReveal animation="animate-fade-in" delay="delay-500">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.6)] cursor-pointer">
                    <i className="fa-brands fa-php text-6xl text-indigo-400 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">PHP</span>
                        <span className="text-blue-400 text-xs font-medium bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/20">{t.about.levels.intermediate}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* TypeScript (Backend) */}
            <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer">
                    <img src="/img/typescript-official-svgrepo-com.svg" alt="TypeScript" className="w-16 h-16 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">TypeScript</span>
                        <span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full mt-1 border border-yellow-500/20">{t.about.levels.learning}</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* JavaScript (Backend) */}
             <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] cursor-pointer">
                    <i className="fa-brands fa-js text-6xl text-yellow-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-40 pointer-events-none">
                        <span className="text-white text-sm font-bold tracking-wide">JavaScript</span>
                        <span className="text-green-400 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full mt-1 border border-green-500/20">{t.about.levels.advanced}</span>
                    </div>
                </div>
            </ScrollReveal>

        </div>
       </section>
    </div>
    </>
  )
}
