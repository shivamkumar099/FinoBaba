import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <Logo />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">Services</a>
          <a href="#professionals" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">Find CAs</a>
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">About</a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">Contact</a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
            Log in
          </a>
          <a href="#" className="text-sm font-semibold leading-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
            Register
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#professionals" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Find CAs</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">About</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Contact</a>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Log in</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-50">Register</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}