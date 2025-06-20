import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useSectionNavigate } from '../utils/sectionNavigate';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const goToSection = useSectionNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '#home', section: 'home' },
    { label: 'Courses', href: '#courses', section: 'courses' },
    { label: 'Training', href: '#training', section: 'training' },
    { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
    { label: 'FAQ', href: '#faq', section: 'faq' },
    { label: 'Contact', href: '#contact', section: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-slate-800 to-teal-600 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">Innovare Academy</h1>
              <p className="text-xs text-teal-600 font-medium">Elite Accounting Training</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => goToSection(item.section)}
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group bg-transparent border-none outline-none cursor-pointer"
                style={{ background: 'none' }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button onClick={() => goToSection('contact')} className="hidden md:block bg-gradient-to-r from-teal-600 to-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Enroll Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { goToSection(item.section); setIsMenuOpen(false); }}
                  className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-200 px-4 py-2 text-left bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none' }}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => goToSection('contact')} className="mx-4 mt-2 bg-gradient-to-r from-teal-600 to-slate-800 text-white px-6 py-2 rounded-lg font-medium">
                Enroll Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;