import React from 'react';

interface ProfessionalCardProps {
  name: string;
  specialization: string;
  experience: string;
  image: string;
  rating: number;
}

export function ProfessionalCard({ name, specialization, experience, image, rating }: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center gap-x-6">
        <img className="h-16 w-16 rounded-full object-cover" src={image} alt={name} />
        <div>
          <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">{specialization}</p>
        </div>
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 gap-4 text-sm leading-6">
          <div>
            <dt className="text-gray-500">Experience</dt>
            <dd className="font-medium text-gray-900">{experience}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Rating</dt>
            <dd className="font-medium text-gray-900 flex items-center gap-1">
              {'⭐'.repeat(Math.floor(rating))}
              <span className="ml-1">({rating}/5.0)</span>
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex gap-3">
          <a
            href="#"
            className="flex-1 text-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Book Consultation
          </a>
          <a
            href="#"
            className="flex-1 text-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}