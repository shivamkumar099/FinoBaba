import React from 'react';
import { 
  BookOpen, 
  Building2, 
  ClipboardCheck, 
  FileText, 
  Calculator, 
  PiggyBank,
  Scale,
  TrendingUp
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    name: 'Bookkeeping & Accounting',
    description: 'Professional bookkeeping services to maintain accurate financial records.',
    icon: BookOpen,
  },
  {
    name: 'Business Registration',
    description: 'Complete assistance in company registration and incorporation.',
    icon: Building2,
  },
  {
    name: 'Compliance Management',
    description: 'Stay compliant with all regulatory requirements and deadlines.',
    icon: ClipboardCheck,
  },
  {
    name: 'Tax Consulting',
    description: 'Expert tax planning and consultation services.',
    icon: Calculator,
  },
  {
    name: 'Auditing',
    description: 'Comprehensive auditing services for businesses of all sizes.',
    icon: FileText,
  },
  {
    name: 'Financial Planning',
    description: 'Strategic financial planning and investment advice.',
    icon: TrendingUp,
  },
  {
    name: 'Insurance Services',
    description: 'Professional guidance on business and personal insurance.',
    icon: Scale,
  },
  {
    name: 'Investment Advisory',
    description: 'Expert advice on investments and portfolio management.',
    icon: PiggyBank,
  },
];

export function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive CA Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From tax consulting to business registration, we offer a wide range of professional services
            to help your business thrive.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}