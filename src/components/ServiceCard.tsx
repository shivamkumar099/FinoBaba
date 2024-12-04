import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ name, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <Icon className="h-5 w-5 flex-none text-indigo-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
        {name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
        <p className="mt-6">
          <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </div>
  );
}