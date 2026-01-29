
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-navy-buildora rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 lg:p-16 bg-gradient-to-br from-navy-buildora to-slate-900 text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
              <p className="text-slate-400 mb-12 text-lg">
                Наши специалисты готовы ответить на любые ваши вопросы и подготовить коммерческое предложение для вашего проекта.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-buildora group-hover:bg-orange-buildora group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Телефон</p>
                    <p className="text-xl font-bold">+7 (777) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-buildora group-hover:bg-orange-buildora group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-xl font-bold">info@buildora.kz</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-buildora group-hover:bg-orange-buildora group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Офис</p>
                    <p className="text-xl font-bold">Казахстан, г. Алматы</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-buildora">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Иван Иванов"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-buildora focus:ring-2 focus:ring-orange-buildora/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-buildora">Ваш телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-buildora focus:ring-2 focus:ring-orange-buildora/20 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-buildora">Услуга</label>
                <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-buildora focus:ring-2 focus:ring-orange-buildora/20 outline-none transition-all appearance-none cursor-pointer">
                  <option>Строительство</option>
                  <option>Проектирование</option>
                  <option>Электромонтаж</option>
                  <option>Другое</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-buildora">Сообщение</label>
                <textarea 
                  rows={4}
                  placeholder="Опишите вкратце ваш проект..."
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-buildora focus:ring-2 focus:ring-orange-buildora/20 outline-none transition-all"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-navy-buildora hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02] shadow-xl"
              >
                Отправить запрос <Send size={20} />
              </button>
              
              <p className="text-xs text-center text-slate-400">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
