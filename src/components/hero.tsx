export default function hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
            {/* Text Content */}
            <div className="text-left space-y-6 animate-slide-in-left">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                    GUSTAVO <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">CADENA</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                    Frontend / Fullstack Dev
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                    Construyo interfaces rápidas, modernas y escalables con <span className="text-green-400 font-semibold">Angular</span> y <span className="text-cyan-400 font-semibold">React</span>.
                </p>
                
                <div className="flex gap-4 pt-4">
                     <a href="#about" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1">
                        Conoce más
                    </a>
                </div>
            </div>

            {/* Visual Element / Photo */}
            <div className="relative flex justify-center items-center animate-slide-in-right">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                     <div className="absolute inset-0 bg-linear-to-tr from-green-500 to-cyan-500 rounded-3xl rotate-6 opacity-30 blur-lg animate-pulse-glow"></div>
                     <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71Tc9Tk2q1eJUUlX1bXhWrc0-g8O9xnAplw&s" 
                        alt="Gustavo Cadena" 
                        className="relative w-full h-full object-cover rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-white/10 shadow-2xl z-10 bg-gray-800 animate-float"
                    />
                    
                    {/* Decorative floating elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center animate-float delay-100 z-20">
                        <i className="fa-brands fa-react text-3xl text-cyan-400"></i>
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center animate-float delay-300 z-20">
                        <i className="fa-brands fa-angular text-3xl text-red-500"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
