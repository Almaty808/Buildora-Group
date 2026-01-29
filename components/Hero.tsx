
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden py-12 md:py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-slow-zoom"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 mb-6 md:mb-12 border border-white/60 rounded-full">
            <span className="text-white font-bold text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase">
              TOO “Buildora group”
            </span>
          </div>
          
          {/* Title - Optimized for Mobile Viewports */}
          <div className="text-white mb-6 md:mb-8">
            <h1 className="text-[10vw] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-2 md:mb-4">
              Масштабные
            </h1>
            <h1 className="text-[10vw] sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6 md:mb-12">
              решения
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline w-full gap-2 sm:gap-4">
              <span className="text-[8vw] sm:text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-orange-buildora leading-none">
                высокого
              </span>
              <span className="text-[8vw] sm:text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-orange-buildora leading-none">
                уровня
              </span>
            </div>
          </div>
          
          {/* Description - "Группа компаний" removed per request */}
          <p className="text-sm sm:text-base md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mb-12">
            Buildora Group — ваш надежный партнер в области промышленного строительства, проектирования и обеспечения комплексной безопасности. Мы создаем инфраструктуру будущего.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-2 md:mb-4 font-bold">Листайте вниз</span>
        <ChevronDown className="text-white/70 animate-bounce" size={20} />
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
