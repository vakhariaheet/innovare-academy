import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSectionNavigate } from '../utils/sectionNavigate';

const Footer = () => {
  const goToSection = useSectionNavigate();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-teal-600 to-slate-700 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Innovare Academy</h3>
                <p className="text-sm text-teal-400">Elite Accounting Training</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              The training arm of Innovare Elite Accounting, dedicated to advancing careers 
              in the global finance industry through expert-led courses and professional certifications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => goToSection('home')} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer w-full text-left">Home</button>
              </li>
              <li>
                <button onClick={() => goToSection('courses')} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer w-full text-left">Courses</button>
              </li>
              <li>
                <button onClick={() => goToSection('training')} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer w-full text-left">Training Approach</button>
              </li>
              <li>
                <button onClick={() => goToSection('testimonials')} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer w-full text-left">Testimonials</button>
              </li>
              <li>
                <button onClick={() => goToSection('faq')} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer w-full text-left">FAQ</button>
              </li>
              <li>
                <button onClick={() => goToSection('contact')} className="text-slate-300 hover:text-teal-400 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer w-full text-left">Contact</button>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#courses" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  QuickBooks Mastery
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  Xero Certification
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  Advanced Taxation
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  Excel for Finance
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  KPO Preparation
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  Professional Certification
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a href='mailto:academy@innovareeliteaccounting.com' className="flex items-center space-x-3 break-all">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-slate-300">academy@innovareeliteaccounting.com</span>
              </a>
              <a href='tel:+919876543210' className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">+91 98765 43210</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300">Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-800 rounded-xl">
              <h5 className="font-semibold mb-2 text-teal-400">Course Fee</h5>
              <p className="text-2xl font-bold text-white">₹25,000</p>
              <p className="text-sm text-slate-400">Flat fee for all courses</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Innovare Academy. All rights reserved. A division of Innovare Elite Accounting.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;