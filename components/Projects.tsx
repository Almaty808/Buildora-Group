
import React from 'react';
import { PROJECTS, ADDITIONAL_PROJECTS } from '../constants';
import { MapPin, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-orange-buildora font-bold text-sm tracking-[0.3em] uppercase mb-4">Наш опыт</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy-buildora">Реализованные проекты</h3>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-slate-500 max-w-sm ml-auto">
              Мы гордимся каждым завершенным объектом, применяя лучшие мировые практики и стандарты качества.
            </p>
          </div>
        </div>

        {/* Visual Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg h-[400px]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-buildora via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-orange-buildora text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-4">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h4>
                <div className="flex items-center text-slate-300 text-sm">
                  <MapPin size={16} className="mr-2 text-orange-buildora" />
                  {project.location}
                </div>
              </div>
              
              <div className="absolute top-6 right-6 transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy-buildora">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Project List - Professional List Style */}
        <div className="bg-navy-buildora rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-buildora/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -ml-32 -mb-32"></div>
          
          <h4 className="text-2xl font-bold mb-10 flex items-center gap-4 relative z-10">
            <span className="w-12 h-1 bg-orange-buildora rounded-full"></span>
            Другие значимые проекты
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
            {ADDITIONAL_PROJECTS.map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="mr-4 mt-1.5 w-2 h-2 rounded-full bg-orange-buildora group-hover:scale-150 transition-transform"></div>
                <p className="text-slate-300 group-hover:text-white transition-colors border-b border-white/5 pb-2 flex-grow">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
