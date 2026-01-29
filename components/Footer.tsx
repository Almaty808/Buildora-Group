
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M110 120L130 30L150 120M115 100H145M120 70H140M125 50H135" stroke="#003366" strokeWidth="4" strokeLinecap="round"/>
    <path d="M130 30V150M180 70V150M250 85V150" stroke="#003366" strokeWidth="6" strokeLinecap="round"/>
    <path d="M130 70C150 60 170 65 180 70M180 85C210 75 230 80 250 85" stroke="#003366" strokeWidth="3" strokeLinecap="round"/>
    <path d="M80 130C120 100 180 110 240 130" stroke="#F7941D" strokeWidth="12" strokeLinecap="round"/>
    <path d="M100 150C160 120 250 135 320 145" stroke="#003366" strokeWidth="15" strokeLinecap="round"/>
    <text x="80" y="195" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="42" fill="#003366">Buildora</text>
    <text x="265" y="195" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="42" fill="#F7941D">Group</text>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <Logo className="h-20 md:h-28" />
            <p className="text-[10px] text-slate-400 font-bold tracking-[0.4em] uppercase ml-1">
              ГРУППА КОМПАНИЙ
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h6 className="font-bold text-navy-buildora uppercase text-xs tracking-widest mb-6">Навигация</h6>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-orange-buildora transition-colors">О компании</a></li>
                <li><a href="#services" className="hover:text-orange-buildora transition-colors">Направления</a></li>
                <li><a href="#projects" className="hover:text-orange-buildora transition-colors">Проекты</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-navy-buildora uppercase text-xs tracking-widest mb-6">Контакты</h6>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>info@buildora.kz</li>
                <li>+7 (777) 123-45-67</li>
                <li>г. Алматы</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h6 className="font-bold text-navy-buildora uppercase text-xs tracking-widest mb-6">Соцсети</h6>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-navy-buildora hover:bg-orange-buildora hover:text-white transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-xs font-medium">
            &copy; {currentYear} TOO “Buildora group”. Проектирование, строительство и инжиниринг мирового уровня.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-navy-buildora transition-colors">Приватность</a>
            <a href="#" className="hover:text-navy-buildora transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
