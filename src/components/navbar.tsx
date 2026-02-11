

export default function navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur-lg border border-white/50 
            rounded-2xl shadow-lg p-4 m-4 md:m-10 flex justify-between items-center overflow-hidden animate-slide-down">
         
         <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
         </div>

         <h1 className="text-2xl font-bold text-white text-start z-10 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default font-mono tracking-tighter">
            <span className="text-green-400 font-extrabold">&lt;</span>
            Gustavo Flores
            <span className="text-green-400 font-extrabold"> /&gt;</span>
         </h1>
            <ul className="flex space-x-4 text-center justify-center z-10">
                <li className="animate-fade-in delay-100"><a href="#about" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">About</a></li>
                <li className="animate-fade-in delay-200"><a href="#projects" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">Projects</a></li>
                <li className="animate-fade-in delay-300"><a href="#contact" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">Contact</a></li>
            </ul>
      </nav>
    </>
  )
}
