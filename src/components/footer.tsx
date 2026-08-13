import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-6 py-8 md:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="display text-sm font-bold text-paper mb-1">Gustavo Flores</p>
          <p className="mono text-[11px] text-fog">
            © {currentYear} · {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-6 mono text-[11px] tracking-[0.12em] uppercase">
          <a
            href="https://www.linkedin.com/in/gustavo-flores-cadena-b972152ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-signal transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/GusDev071"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-signal transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
