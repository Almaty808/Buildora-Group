
import React from 'react';
import { 
  HardHat, 
  Zap, 
  Building2, 
  Truck, 
  Utensils, 
  ShieldCheck, 
  DraftingCompass, 
  Factory, 
  PackageSearch 
} from 'lucide-react';
import { ServiceItem, ProjectItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'construction',
    title: 'Строительство',
    description: 'Полный цикл строительно-монтажных работ любой сложности.',
    icon: <HardHat className="w-8 h-8" />
  },
  {
    id: 'design',
    title: 'Проектирование и сопровождение',
    description: 'Разработка проектно-сметной документации и авторский надзор.',
    icon: <DraftingCompass className="w-8 h-8" />
  },
  {
    id: 'industrial',
    title: 'Промышленные объекты',
    description: 'Строительство и реконструкция заводов, цехов и складов.',
    icon: <Factory className="w-8 h-8" />
  },
  {
    id: 'electrical',
    title: 'Электромонтажные работы',
    description: 'От внутренней разводки до высоковольтных линий и подстанций.',
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 'civil',
    title: 'Гражданское строительство',
    description: 'Жилые комплексы и объекты городской инфраструктуры.',
    icon: <Building2 className="w-8 h-8" />
  },
  {
    id: 'supply',
    title: 'Поставки оборудования',
    description: 'Комплектация объектов передовым технологическим оборудованием.',
    icon: <PackageSearch className="w-8 h-8" />
  },
  {
    id: 'logistics',
    title: 'Транспортные услуги',
    description: 'Собственный парк спецтехники для решения логистических задач.',
    icon: <Truck className="w-8 h-8" />
  },
  {
    id: 'catering',
    title: 'Кейтеринг',
    description: 'Организация качественного питания на удаленных объектах.',
    icon: <Utensils className="w-8 h-8" />
  },
  {
    id: 'security',
    title: 'Комплексная безопасность',
    description: 'Охрана объектов и внедрение систем безопасности.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Подстанция ПС-110/35/10',
    location: 'г. Алматы',
    category: 'Энергетика',
    image: 'https://picsum.photos/seed/substation/800/600'
  },
  {
    id: 2,
    title: 'РП-10 кВ',
    location: 'г. Алматы',
    category: 'Энергетика',
    image: 'https://picsum.photos/seed/rp10/800/600'
  },
  {
    id: 3,
    title: 'Реконструкция электросетей (2010-19)',
    location: 'г. Алматы',
    category: 'Инфраструктура',
    image: 'https://picsum.photos/seed/grid/800/600'
  },
  {
    id: 4,
    title: 'Система освещения города',
    location: 'г. Алматы (2019-2023)',
    category: 'Городская среда',
    image: 'https://picsum.photos/seed/lighting/800/600'
  },
  {
    id: 5,
    title: 'ЖК TWIN TOWERS',
    location: 'г. Актау',
    category: 'Гражданское строительство',
    image: 'https://picsum.photos/seed/twintowers/800/600'
  },
  {
    id: 6,
    title: 'Ремонт АНПЗ и ПНХЗ',
    location: '2023-2025 гг.',
    category: 'Промышленный сервис',
    image: 'https://picsum.photos/seed/refinery/800/600'
  }
];

export const ADDITIONAL_PROJECTS = [
  'Строительство кабельных линий 6-10 кВ в г. Алматы',
  'Замена трансформаторов в районах РЭС-3, 4, 5, 6, 7, 10 г. Алматы',
  'Строительство воздушных линий 0,4 кВ в районах РЭС',
  'Строительство воздушных линий 35 кВ/10 кВ/6 кВ в г. Алматы'
];
