
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

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

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'О нас', href: '#about' },
    { name: 'Направления', href: '#services' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2 md:py-3' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Logo className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-20'}`} />
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-bold text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#F7941D] ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 ${
              isScrolled 
                ? 'bg-navy-buildora text-white shadow-md' 
                : 'bg-white text-navy-buildora shadow-xl'
            }`}
          >
            <Phone size={16} />
            Связаться
          </a>
        </nav>

        <button 
          className="md:hidden p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-navy-buildora z-40 transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center p-6 space-y-8`}
      >
        <Logo className="h-32 mb-4 bg-white p-4 rounded-2xl" />
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-xl font-bold uppercase tracking-widest hover:text-orange-buildora transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="bg-orange-buildora text-white w-full max-w-xs py-4 rounded-full text-lg font-bold uppercase"
        >
          Связаться с нами
        </button>
      </div>
    </header>
  );
};

export default Header;
