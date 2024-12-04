import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50">
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Trusted Financial Guide
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with expert Chartered Accountants for tax consulting, auditing, compliance, 
            and more. Get professional financial guidance tailored to your business.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <SearchBar />
            <div className="flex gap-4">
              <a href="#services" className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-300">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#professionals" className="flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-blue-50 transition-colors duration-300">
                Find a CA
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}