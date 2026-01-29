
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-buildora font-bold text-sm tracking-[0.3em] uppercase mb-4">Комплексный подход</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-buildora mb-6">Наши направления</h3>
          <div className="w-24 h-1.5 bg-orange-buildora mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-navy-buildora transition-all duration-500 hover:shadow-2xl hover:shadow-navy-buildora/20 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-orange-buildora/10 text-orange-buildora flex items-center justify-center mb-6 group-hover:bg-orange-buildora group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-navy-buildora mb-4 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors duration-500 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-white/10 flex items-center text-orange-buildora font-bold text-sm">
                Узнать больше
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
