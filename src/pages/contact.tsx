import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    const subject = `Nuevo mensaje de portafolio de ${name}`;
    const body = `Nombre: ${name}%0D%0ACorreo: ${email}%0D%0A%0D%0AMensaje:%0D%0A${message}`;
    
    
    window.location.href = `mailto:florescadenagustavo@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="min-h-screen w-full px-4 py-20 md:px-8 scroll-mt-32 flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto">
        <ScrollReveal animation="animate-slide-in-left">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16 hover:text-green-400 transition-colors duration-300">
            {t.contact.title}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Columna de Información */}
          <ScrollReveal animation="animate-fade-in" delay="delay-100">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">{t.contact.letsTalk}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {t.contact.description}
                </p>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/5628048986" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-green-500/30"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <i className="fa-brands fa-whatsapp text-2xl text-green-400"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">WhatsApp</h4>
                      <p className="text-gray-400 group-hover:text-green-400 transition-colors">{t.contact.whatsapp}</p>
                    </div>
                    <i className="fa-solid fa-arrow-right text-gray-500 ml-auto group-hover:translate-x-2 group-hover:text-green-400 transition-all"></i>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:florescadenagustavo@gmail.com" 
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-blue-500/30"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <i className="fa-solid fa-envelope text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-400 group-hover:text-blue-400 transition-colors">florescadenagustavo@gmail.com</p>
                    </div>
                    <i className="fa-solid fa-arrow-right text-gray-500 ml-auto group-hover:translate-x-2 group-hover:text-blue-400 transition-all"></i>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-transparent">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-location-dot text-2xl text-purple-400"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{t.contact.location}</h4>
                      <p className="text-gray-400">Chalco, Estado de México</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna del Formulario */}
          <ScrollReveal animation="animate-fade-in" delay="delay-300">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium ml-1">{t.contact.form.name}</label>
                  <div className="relative group/input">
                    <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors"></i>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 focus:bg-black/40 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium ml-1">{t.contact.form.email}</label>
                  <div className="relative group/input">
                    <i className="fa-solid fa-at absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors"></i>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.email}
                      className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 focus:bg-black/40 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white font-medium ml-1">{t.contact.form.message}</label>
                  <div className="relative group/input">
                    <i className="fa-solid fa-comment absolute left-4 top-6 text-gray-500 group-focus-within/input:text-green-400 transition-colors"></i>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 focus:bg-black/40 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>{t.contact.form.send}</span>
                  <i className="fa-solid fa-paper-plane group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}