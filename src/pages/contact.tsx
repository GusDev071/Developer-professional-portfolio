import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="scroll-mt-28 contact-stage border-t border-line-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
          <ScrollReveal className="lg:col-span-5" animation="animate-from-left">
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-fog mb-5">
              04 / {t.contact.title}
            </p>

            <h2 className="display text-[clamp(3rem,8vw,5.5rem)] font-extrabold text-paper mb-6">
              {t.contact.letsTalk}
            </h2>

            <p className="text-mist leading-relaxed max-w-sm mb-12">
              {t.contact.description}
            </p>

            <div className="space-y-8">
              <a
                href="https://wa.me/5628048986"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <p className="mono text-[10px] tracking-[0.16em] uppercase text-fog mb-1">WhatsApp</p>
                <p className="text-xl md:text-2xl font-semibold text-paper group-hover:text-signal transition-colors border-b border-transparent group-hover:border-signal pb-1 inline-block">
                  {t.contact.whatsapp}
                </p>
              </a>

              <a href="mailto:florescadenagustavo@gmail.com" className="block group">
                <p className="mono text-[10px] tracking-[0.16em] uppercase text-fog mb-1">Email</p>
                <p className="text-xl md:text-2xl font-semibold text-paper group-hover:text-signal transition-colors border-b border-transparent group-hover:border-signal pb-1 inline-block break-all">
                  florescadenagustavo@gmail.com
                </p>
              </a>

              <div>
                <p className="mono text-[10px] tracking-[0.16em] uppercase text-fog mb-1">
                  {t.contact.location}
                </p>
                <p className="text-xl md:text-2xl font-semibold text-paper">
                  Chalco, Estado de México
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" animation="animate-from-right" delay="delay-100">
            <form onSubmit={handleSubmit} className="mt-16 lg:mt-32">
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="mono text-[10px] tracking-[0.14em] uppercase text-fog">
                      {t.contact.form.name}
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="field-line mt-2"
                    />
                  </label>

                  <label className="block">
                    <span className="mono text-[10px] tracking-[0.14em] uppercase text-fog">
                      {t.contact.form.email}
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.email}
                      className="field-line mt-2"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mono text-[10px] tracking-[0.14em] uppercase text-fog">
                    {t.contact.form.message}
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="field-line field-line-area mt-2"
                  />
                </label>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <p className="mono text-[11px] text-fog hidden sm:block">
                    mailto · no spam
                  </p>
                  <button type="submit" className="link-action-fill">
                    {t.contact.form.send}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
