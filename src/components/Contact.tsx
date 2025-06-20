import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const CustomDropdown = ({ label, name, options, value, onChange, required, placeholder }: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  placeholder?: string;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label} {required && '*'}
      </label>
      <button
        type="button"
        className={`w-full px-4 py-3 border border-gray-300 rounded-xl text-left bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 flex justify-between items-center ${open ? 'ring-2 ring-teal-500' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? '' : 'text-slate-400'}>
          {value === "" ? placeholder ?? 'Select an option' : value}
        </span>
        <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div
        className={`absolute left-0 right-0 z-10 bg-white border border-gray-200 rounded-xl shadow-lg mt-2 overflow-hidden transition-all duration-300 ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={`w-full text-left px-4 py-3 cursor-pointer hover:bg-teal-50 transition-colors ${value === option ? 'bg-teal-100 text-teal-700 font-semibold' : ''}`}
            onClick={() => { onChange(name, option); setOpen(false); }}
            aria-pressed={value === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courses: '',
    trainingMode: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    if (!formData.name || !formData.email || !formData.phone || !formData.courses || !formData.trainingMode) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }
    if (formData.courses === '' || formData.trainingMode === '') {
      toast.error('Please select a course and training mode.');
      return;
    }
    if (formData.message && formData.message.length > 500) {
      toast.error('Message cannot exceed 500 characters.'); 
      return;
    } 
    const resp = await fetch('https://entrywise.webbound.in/public/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key':import.meta.env.VITE_API_KEY
      },
      body: JSON.stringify({
        fields: {
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          courses: formData.courses,
          trainingMode: formData.trainingMode,
          message: formData.message ?? 'N/A'
        }
      })
    }).then((res) => res.json());
    if (resp.isSuccess) { 
      setFormData({
        name: '',
        email: '',
        phone: '',
        courses: '',
        trainingMode: '',
        message: ''
      });
      toast.success('Thank you for your inquiry! Our team will contact you within 24 hours to assist you with the enrollment process.');
    }
    else {
      toast.error('There was an error submitting the form. Please try again later.');
    }
    }
    catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting the form. Please try again later.');
    }
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const courses = [
    'International Bookkeeping Fundamentals',
    'Advanced QuickBooks Mastery Training',
    'Xero Professional Certification Program',
    'Advanced Taxation & VAT',
    'Excel for Financial Analysis',
    'International Payroll Processing',
    'Corporate Financial Reporting',
    'KPO Sector Preparation',
    'Professional Certification Track'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to advance your accounting career? Fill out the form below and our team will 
            contact you to guide you through the enrollment process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">academy@innovareeliteaccounting.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-gradient-to-br from-teal-50 to-slate-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                What Happens Next?
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span>We'll contact you within 24 hours to discuss your goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span>Our team will recommend the best courses for your career path</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span>We'll arrange payment and schedule your preferred training mode</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-11  pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <CustomDropdown
                  label="Course(s) Interested In"
                  name="courses"
                  options={courses}
                  value={formData.courses}
                  onChange={handleDropdownChange}
                  required
                  placeholder="Select a course"
                />
              </div>

              <div>
                <CustomDropdown
                  label="Preferred Training Mode"
                  name="trainingMode"
                  options={["Virtual Platform", "On-Site Training", "Hybrid (Virtual + On-Site)"]}
                  value={formData.trainingMode}
                  onChange={handleDropdownChange}
                  required
                  placeholder="Select training mode"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:outline-none focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your career goals or any specific questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-slate-800 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Inquiry</span>
              </button>

              <p className="text-sm text-slate-600 text-center">
                All courses are offered at a flat fee of ₹25,000. No online payments required - 
                our team will guide you through the enrollment process.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;