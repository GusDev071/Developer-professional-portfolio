import ScrollReveal from './ScrollReveal';

export default function about() {
  return (
    <>
    <div className="overflow-hidden w-full flex justify-center">
        <section id="about" className="max-w-7xl mx-auto px-4 py-10 w-full">
            <ScrollReveal animation="animate-slide-in-left">
                <h2 className="text-6xl font-bold text-white text-center mb-16 hover:text-green-400 transition-colors duration-300">Acerca de mí</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 px-4">
                <ScrollReveal animation="animate-fade-in" delay="delay-100">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/30 group shadow-lg hover:shadow-green-500/10">
                        <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                            <i className="fa-solid fa-code text-3xl text-green-400"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Frontend Dev</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Desarrollador enfocado en la creación de interfaces modernas, escalables y orientadas a la experiencia de usuario.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="animate-fade-in" delay="delay-300">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 group shadow-lg hover:shadow-blue-500/10">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                            <i className="fa-solid fa-layer-group text-3xl text-blue-400"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Especializado en <span className="text-red-400 font-semibold">Angular</span> y <span className="text-cyan-400 font-semibold">React</span>, con experiencia en APIs REST y entornos empresariales.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="animate-fade-in" delay="delay-500">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/30 group shadow-lg hover:shadow-purple-500/10">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                            <i className="fa-solid fa-rocket text-3xl text-purple-400"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Innovación</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            En constante actualización, explorando nuevas metodologías para mejorar el rendimiento y mantenibilidad del código.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </div>
    <div className="grid md:grid-cols-1 justify-center items-center">
        <ScrollReveal animation="animate-fade-in" delay="delay-200">
             <h3 className="text-6xl font-bold text-white text-center z-10 m-10 hover:text-green-400 transition-colors duration-300">Tecnologías</h3>
        </ScrollReveal>
    </div>
    <div className="grid md:grid-cols-2 overflow-hidden justify-items-center mb-10">
       <section>
          <ScrollReveal animation="animate-slide-in-left" delay="delay-300">
             <h2 className="text-4xl font-bold text-white text-center z-10 m-10 hover:text-green-400 transition-colors duration-300">Frontend</h2>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center items-center z-10 m-10 gap-8 gap-y-12">
            {/* Angular */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-angular text-6xl text-red-500 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Angular</span>
                </div>
            </ScrollReveal>

            {/* React */}
            <ScrollReveal animation="animate-fade-in" delay="delay-200">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-react text-6xl text-cyan-400 drop-shadow-lg transition-transform duration-700 group-hover:animate-spin"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
                </div>
            </ScrollReveal>

            {/* TypeScript */}
            <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-js text-6xl text-yellow-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">TypeScript</span>
                </div>
            </ScrollReveal>

            {/* HTML5 */}
            <ScrollReveal animation="animate-fade-in" delay="delay-400">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-html5 text-6xl text-orange-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">HTML5</span>
                </div>
            </ScrollReveal>

            {/* CSS3 */}
            <ScrollReveal animation="animate-fade-in" delay="delay-500">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-css3-alt text-6xl text-blue-500 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">CSS3</span>
                </div>
            </ScrollReveal>

            {/* Tailwind CSS */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-solid fa-wind text-6xl text-cyan-400 drop-shadow-lg transition-transform duration-500 group-hover:translate-x-2"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind</span>
                </div>
            </ScrollReveal>

            {/* Bootstrap */}
            <ScrollReveal animation="animate-fade-in" delay="delay-200">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-bootstrap text-6xl text-purple-600 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bootstrap</span>
                </div>
            </ScrollReveal>

             {/* Figma */}
             <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-figma text-6xl text-pink-500 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Figma</span>
                </div>
            </ScrollReveal>
          </div>

       </section>
       <section>
        <ScrollReveal animation="animate-slide-in-right" delay="delay-300">
            <h2 className="text-4xl font-bold text-white text-center z-10 m-10 hover:text-green-400 transition-colors duration-300">Backend</h2>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center z-10 m-10 gap-8 gap-y-12">
            {/* Node.js */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-node-js text-6xl text-green-500 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Node.js</span>
                </div>
            </ScrollReveal>

            {/* Python */}
            <ScrollReveal animation="animate-fade-in" delay="delay-200">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-python text-6xl text-yellow-400 drop-shadow-lg transition-transform duration-500 group-hover:rotate-12"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Python</span>
                </div>
            </ScrollReveal>

             {/* SQL (Database Icon as generic SQL representation or specific if preferred) */}
             <ScrollReveal animation="animate-fade-in" delay="delay-300">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-solid fa-database text-6xl text-blue-400 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">SQL</span>
                </div>
            </ScrollReveal>

            {/* MongoDB */}
            <ScrollReveal animation="animate-fade-in" delay="delay-400">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-solid fa-leaf text-6xl text-green-600 drop-shadow-lg transition-transform duration-500 group-hover:rotate-45"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">MongoDB</span>
                </div>
            </ScrollReveal>

             {/* PHP */}
             <ScrollReveal animation="animate-fade-in" delay="delay-500">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-brands fa-php text-6xl text-indigo-400 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">PHP</span>
                </div>
            </ScrollReveal>

            {/* Express.js */}
            <ScrollReveal animation="animate-fade-in" delay="delay-100">
                <div className="group relative hover:z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-green-400/50 cursor-pointer">
                    <i className="fa-solid fa-server text-6xl text-gray-400 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"></i>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Express.js</span>
                </div>
            </ScrollReveal>
        </div>

       </section>
    </div>
    </>
  )
}
