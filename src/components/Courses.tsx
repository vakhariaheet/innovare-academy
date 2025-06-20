import React from 'react';
import { BookOpen, Calculator, FileText, TrendingUp, BarChart, Users, Building, Briefcase, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'International Bookkeeping Fundamentals',
      description: 'Master the essentials of global bookkeeping standards and practices.',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Advanced QuickBooks Mastery Training',
      description: 'Deep-dive into advanced QuickBooks features for real-world business scenarios.',
      icon: Calculator,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Xero Professional Certification Program',
      description: 'Become a certified Xero expert and boost your cloud accounting credentials.',
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Advanced Taxation & VAT',
      description: 'Comprehensive training on international taxation and VAT compliance.',
      icon: TrendingUp,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Excel for Financial Analysis',
      description: 'Unlock the power of Excel for data-driven financial decision-making.',
      icon: BarChart,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'International Payroll Processing',
      description: 'Learn payroll processing for multinational organizations.',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Corporate Financial Reporting',
      description: 'Develop expertise in preparing and analyzing corporate financial statements.',
      icon: Building,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'KPO Sector Preparation',
      description: 'Specialized training for careers in Knowledge Process Outsourcing (KPO).',
      icon: Briefcase,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Professional Certification Track',
      description: 'Structured pathway to earn recognized professional accounting certifications.',
      icon: Award,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Our Course Offerings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Training Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive courses designed by industry experts to advance your accounting career. 
            All courses offered at a flat fee of ₹25,000 with flexible learning options.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.title}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${course.color} mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Price and CTA */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">₹25,000</div>
                    <div className="text-sm text-slate-500">Flat Fee</div>
                  </div>
                  <a href='#contact' className="block w-full text-center bg-gradient-to-r from-teal-600 to-slate-800 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    Enroll / Inquiry
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-slate-50 to-teal-50 rounded-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-slate-600 mb-6 text-lg">
            All courses are offered at a flat fee of ₹25,000. Submit your inquiry, and our team will contact you to guide you through the next steps.
          </p>
          <a href='#contact' className=" bg-gradient-to-r  text-center from-teal-600 to-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;