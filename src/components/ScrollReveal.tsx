import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: string; // Clase de animación de Tailwind (ej: 'animate-fade-in')
  delay?: string; // Clase de delay (ej: 'delay-200')
  className?: string; // Clases adicionales para el contenedor
  threshold?: number; // Porcentaje de visibilidad para activar (0 a 1)
}

export default function ScrollReveal({ 
  children, 
  animation = 'animate-fade-in', 
  delay = '', 
  className = '',
  threshold = 0.1 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Activar un poco antes de que entre completamente
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-opacity duration-500 ${isVisible ? `${animation} ${delay} opacity-100` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
