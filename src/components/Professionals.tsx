import React from 'react';
import { ProfessionalCard } from './ProfessionalCard';

const professionals = [
  {
    name: 'Sarah Johnson',
    specialization: 'Tax Consulting & Compliance',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.9,
  },
  {
    name: 'Michael Chen',
    specialization: 'Business Registration & Auditing',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.8,
  },
  {
    name: 'Priya Patel',
    specialization: 'Financial Planning & Investment',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.9,
  },
];

export function Professionals() {
  return (
    <div id="professionals" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Expert Professionals</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Top Chartered Accountants
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with experienced CAs who are ready to help you with your financial needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.name} {...professional} />
          ))}
        </div>
      </div>
    </div>
  );
}